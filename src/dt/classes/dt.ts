import { Temporal } from 'temporal-polyfill';
import { bbnDtTemporal } from '../vars/types.js';
import { getWeekdayIndex, getWeekday } from '../functions/getWeekday.js';
import { unitsCorrespondence, units, formatsMap } from '../vars/units.js';
import _ from '../../_.js';
import substr from '../../fn/string/substr.js';
import each from '../../fn/loop/each.js';
import getRow from '../../fn/object/getRow.js';
import isPrimitive from '../../fn/type/isPrimitive.js';
import bbnDtDuration from './duration.js';
import camelToCss from '../../fn/string/camelToCss.js';


export abstract class bbnDt<TValue extends bbnDtTemporal> {
  abstract readonly kind: bbnDtKind;

  #value: TValue | undefined;

  constructor(value?: TValue) {
    this.#value = value;
  }

  get value(): TValue | undefined {
    return this.#value;
  };

  /** System time zone ID (e.g. "Europe/Rome") */
  private static readonly systemTimeZoneId = Temporal.Now.timeZoneId();

  /**
   * Convert this.value (PlainDate, PlainTime, PlainDateTime, YearMonth,
   * MonthDay, ZonedDateTime) into epoch milliseconds, using the system
   * time zone when needed.
   *
   * Conventions:
   *  - time       → today at that time in system tz
   *  - date       → that date at 00:00 in system tz
   *  - year-month → first of that month at 00:00 in system tz
   *  - month-day  → that month/day in *this year* at 00:00 in system tz
   */
  protected toEpochMs(): number {
    const tz = bbnDt.systemTimeZoneId;

    switch (this.kind) {
      case 'zoned': {
        const v = this.value as unknown as Temporal.ZonedDateTime;
        return v.toInstant().epochMilliseconds;
      }

      case 'datetime': {
        const v = this.value as unknown as Temporal.PlainDateTime;
        // RFC 9557 string: "YYYY-MM-DDTHH:mm:ss[Europe/Rome]"
        const iso = `${v.toString()}[${tz}]`;
        const zdt = Temporal.ZonedDateTime.from(iso);
        return zdt.toInstant().epochMilliseconds;
      }

      case 'date': {
        const d = this.value as unknown as Temporal.PlainDate;
        // "YYYY-MM-DDT00:00[Europe/Rome]"
        const iso = `${d.toString()}T00:00[${tz}]`;
        const zdt = Temporal.ZonedDateTime.from(iso);
        return zdt.toInstant().epochMilliseconds;
      }

      case 'time': {
        const t = this.value as unknown as Temporal.PlainTime;
        const today = Temporal.Now.plainDateISO();
        // "YYYY-MM-DDTHH:mm[:ss][Europe/Rome]"
        const iso = `${today.toString()}T${t.toString()}[${tz}]`;
        const zdt = Temporal.ZonedDateTime.from(iso);
        return zdt.toInstant().epochMilliseconds;
      }

      case 'year-month': {
        const ym = this.value as unknown as Temporal.PlainYearMonth;
        const d = ym.toPlainDate({day: 1}); // first day of month
        const iso = `${d.toString()}T00:00[${tz}]`;
        const zdt = Temporal.ZonedDateTime.from(iso);
        return zdt.toInstant().epochMilliseconds;
      }

      case 'month-day': {
        const md = this.value as unknown as Temporal.PlainMonthDay;
        const today = Temporal.Now.plainDateISO();
        const d = md.toPlainDate({year: today.year}); // current year
        const iso = `${d.toString()}T00:00[${tz}]`;
        const zdt = Temporal.ZonedDateTime.from(iso);
        return zdt.toInstant().epochMilliseconds;
      }

      default:
        throw new Error(`Unsupported kind '${this.kind}' in toEpochMs`);
    }
  }

  /**
   * "Now" value in the same *kind* as this instance.
   */
  protected static nowForKind(
    kind: bbnDtKind,
  ):
    | Temporal.PlainDate
    | Temporal.PlainTime
    | Temporal.PlainDateTime
    | Temporal.PlainYearMonth
    | Temporal.PlainMonthDay
    | Temporal.ZonedDateTime {

    switch (kind) {
      case 'zoned':
        return Temporal.Now.zonedDateTimeISO();
      case 'datetime':
        return Temporal.Now.plainDateTimeISO();
      case 'date':
        return Temporal.Now.plainDateISO();
      case 'time':
        return Temporal.Now.plainTimeISO();
      case 'year-month': {
        const d = Temporal.Now.plainDateISO();
        return new Temporal.PlainYearMonth(d.year, d.month);
      }
      case 'month-day': {
        const d = Temporal.Now.plainDateISO();
        return new Temporal.PlainMonthDay(d.month, d.day, undefined, d.year);
      }
      default:
        throw new Error(`Unsupported kind '${kind}' in nowForKind`);
    }
  }

  /**
   * Helper to rebuild the same concrete subclass with a new Temporal value.
   * Assumes your subclass constructor takes the value as first argument.
   */
  protected withValue(newValue: any): this {
    const Ctor = this.constructor as new (...args: any[]) => this;
    return new Ctor(newValue);
  }

  static compare(a: any, b: any, unit: string | undefined): -1 | 0 | 1 {
    if (!a || !b) {
      throw new TypeError('Both arguments must be Temporal values');
    }
    if (a.constructor !== b.constructor) {
      throw new TypeError('Cannot compare different Temporal types');
    }

    const Ctor = a.constructor as any;

    // No unit → delegate to the built-in static compare
    if (unit === undefined) {
      if (typeof Ctor.compare !== 'function') {
        throw new TypeError('This Temporal type has no static compare');
      }
      return Ctor.compare(a, b); // -1, 0, 1
    }

    // With unit → use .until() and let Temporal validate the unit
    if (typeof a.until !== 'function') {
      throw new TypeError('This Temporal type does not support until/since');
    }

    // If `unit` is invalid for this Temporal type, this will throw RangeError
    const diff = a.until(b, { largestUnit: unit });

    return diff.sign; // -1 / 0 / 1
  }

  static parse(
    input: string,
    format: string | string[],
    cls: 'auto' | 'zoned' | 'dateTime' | 'date' | 'time' | 'yearMonth' | 'monthDay' = 'auto',
    locale?: {
      monthsLong?: string[];
      monthsShort?: string[];
      weekdaysLong?: string[];
      weekdaysShort?: string[];
    }
  ): bbnDt<any>
  {
    return parse(input, format, cls, locale) as bbnDt<any>;
  }

  parse(input: string, format: string): bbnDt<any> {
    return bbnDt.parse(input, format, camelToCss(this.kind)) as bbnDt<any>;
  }

  compare(other: any, unit?: string): -1 | 0 | 1 {
    if (!(other instanceof bbnDt)) {
      other = bbn.dt(other, null, this.kind) as TValue;
    }
    
    return bbnDt.compare(this.value, other.value as bbnDtTemporal, unit);
  }

  add(amount: number | bbnDtDuration | object, unit?: string): bbnDt<any> {
    if (!this.value) {
      return undefined;
    }

    if (this.value instanceof Temporal.PlainMonthDay || typeof this.value.add !== 'function') {
      throw new TypeError('This Temporal type does not support add/subtract');
    }

    if (amount instanceof bbnDtDuration) {
      const d = this.value.add(amount.value as any);
      return new (this.constructor as any)(d);
    }
    else if (typeof amount === 'object') {
      const dur = new bbnDtDuration(amount);
      const d = this.value.add(dur.value as any);
      return new (this.constructor as any)(d);
    }
    else {
      if (!unit) {
        throw new Error('Unit must be specified when adding a number');
      }

      const dur = bbnDtDuration.fromUnit(amount, unit);
      const d = this.value.add(dur.value as any);
      return new (this.constructor as any)(d);
    }
  }

  subtract(amount: number | bbnDtDuration | object, unit?: string): bbnDt<any> {
    if (!this.value) {
      return undefined;
    }

    if (this.value instanceof Temporal.PlainMonthDay || typeof this.value.subtract !== 'function') {
      throw new TypeError('This Temporal type does not support add/subtract');
    }

    if (amount instanceof bbnDtDuration) {
      const d = this.value.subtract(amount.value as any);
      return new (this.constructor as any)(d);
    }
    else if (typeof amount === 'object') {
      const dur = new bbnDtDuration(amount);
      const d = this.value.subtract(dur.value as any);
      return new (this.constructor as any)(d);
    }
    else {
      if (!unit) {
        throw new Error('Unit must be specified when adding a number');
      }

      const dur = bbnDtDuration.fromUnit(amount, unit);
      const d = this.value.subtract(dur.value as any);
      return new (this.constructor as any)(d);
    }
  }

  isBefore(other: any): boolean {
    return this.compare(other) < 0;
  }

  isBeforeOrSame(other: any): boolean {
    return this.compare(other) <= 0;
  }

  isAfter(other: any): boolean {
    return this.compare(other) > 0;
  }

  isAfterOrSame(other: any): boolean {
    return this.compare(other) >= 0;
  }

  isSame(other: any): boolean {
    return this.compare(other) === 0;
  }

  equals(other: any): boolean {
    return this.isSame(other);
  }

  // ---- Serialization ----

  toJSON() {
    return {
      kind: this.kind,
      value: String(this.value)
    };
  }

  toString(): string {
    return String(this.value);
  }

  year(v?: any): number | bbnDt<any> {
    if (!this.value) {
      return undefined;
    }

    if (!('year' in this.value)) {
      throw new Error('year() is not supported for this type');
    }

    if ((v !== undefined) && !(v instanceof Event)) {
      const d = this.value.with({ year: v });
      return new (this.constructor as any)(d);
    }

    return (this.value as any).year;
  }

  month(v?: any): number | bbnDt<any> {
    if (!this.value) {
      return undefined;
    }

    if (!('month' in this.value)) {
      throw new Error('month() is not supported for this type');
    }

    if ((v !== undefined) && !(v instanceof Event)) {
      const d = this.value.with({ month: v });
      return new (this.constructor as any)(d);
    }

    return (this.value as any).month;
  }

  day(v?: any): number | bbnDt<any> {
    if (!this.value) {
      return undefined;
    }

    if (!('day' in this.value)) {
      throw new Error('day() is not supported for this type');
    }

    if ((v !== undefined) && !(v instanceof Event)) {
      const d = this.value.with({ day: v });
      return new (this.constructor as any)(d);
    }

    return (this.value as any).day;
  }

  hour(v?: any): number | bbnDt<any> {
    if (!this.value) {
      return undefined;
    }

    if (!('hour' in this.value)) {
      throw new Error('hour() is not supported for this type');
    }

    if ((v !== undefined) && !(v instanceof Event)) {
      const d = this.value.with({ hour: v });
      return new (this.constructor as any)(d);
    }

    return (this.value as any).hour;
  }

  minute(v?: any): number | bbnDt<any> {
    if (!this.value) {
      return undefined;
    }

    if (!('minute' in this.value)) {
      throw new Error('minute() is not supported for this type');
    }

    if ((v !== undefined) && !(v instanceof Event)) {
      const d = this.value.with({ minute: v });
      return new (this.constructor as any)(d);
    }

    return (this.value as any).minute;
  }

  second(v?: any): number | bbnDt<any> {
    if (!this.value) {
      return undefined;
    }

    if (!('second' in this.value)) {
      throw new Error('second() is not supported for this type');
    }

    if ((v !== undefined) && !(v instanceof Event)) {
      const d = this.value.with({ second: v });
      return new (this.constructor as any)(d);
    }

    return (this.value as any).second;
  }

  weekday(v?: any, past?: any): number | bbnDt<any> {
    if (!this.value) {
      return undefined;
    }

    if (!('dayOfWeek' in this.value)) {
      throw new Error('weekday() is not supported for this type');
    }

    if ((v !== undefined) && !(v instanceof Event)) {
      return this.setWeekday(v, past);
    }

    return (this.value as any).dayOfWeek;
  }

  date(v?: any): string | bbnDt<any> {
    if (!this.value) {
      return undefined;
    }

    if (!('year' in this.value) || !('month' in this.value) || !('day' in this.value)) {
      throw new Error('date() is not supported for this type');
    }

    return this.parse(v, 'Y-m-d');
  }
  
  datetime(v?: any): string | bbnDt<any> {
    if (0 in arguments && (v !== undefined) && !(v instanceof Event)) {
      return this.parse(v, 'Y-m-d H:i:s');
    }

    return this.format('Y-m-d H:i:s');
  }

  time(v?: any): string | bbnDt<any> {
    if (0 in arguments && (v !== undefined) && !(v instanceof Event)) {
      return this.parse(v, 'H:i:s');
    }

    return this.format('H:i:s');
  }

  week(): number {
    if (!this.value) {
      return undefined;
    }

    if (!('weekOfYear' in this.value)) {
      throw new Error('week() is not supported for this type');
    }

    return (this.value as any).weekOfYear;
  }

  get YYYY(): string {
    if ('year' in this.value) {
      return this.year().toString();
    }
    return undefined;
  }

  get YY(): string {
    if ('year' in this.value) {
      return substr(this.year().toString(), 2, 2);
    }
    return undefined;
  }

  get MMMM(): string {
    if ('month' in this.value) {
      return this.format('MMMM');
    }
    return undefined;
  }

  get MMM(): string {
    if ('month' in this.value) {
      return this.format('MMM');
    }
    return undefined; 
  }

  get MM(): string {
    if ('month' in this.value) {
      const m = parseInt(this.month().toString());
      return m < 10 ? '0' + m.toString() : m.toString();
    }
    return undefined;
  }

  get M(): string {
    if ('month' in this.value) {
      return this.month().toString();
    }
    return undefined;
  }

  get EE(): string {
    if ('dayOfWeek' in this.value) {
      return this.value.dayOfWeek.toString();
    }

    return undefined;
  }

  get DD(): string {
    if ('day' in this.value) {
      const d = parseInt(this.day().toString());
      return d < 10 ? '0' + d.toString() : d.toString();
    }
    return undefined;
  }

  get d(): string {
    if ('day' in this.value) {
      return this.day().toString();
    }
    return undefined;
  }

  get dddd(): string {
    if ('dayOfWeek' in this.value) {
      return getWeekday(0, 'long');
    }
    return undefined;
  }

  get ddd(): string {
    if ('day' in this.value) {
      return getWeekday(0, 'short');
    }
    return undefined;
  }

  get D(): string {
    if ('day' in this.value) {
      return this.day().toString();
    }
    return undefined;
  }

  get HH(): string {
    if ('hour' in this.value) {
      const h = parseInt(this.hour().toString());
      return h < 10 ? '0' + h.toString() : h.toString();
    }
    return undefined;
  }
  
  get H(): string {
    if ('hour' in this.value) {
      return this.hour().toString();
    }
    return undefined;
  }
  
  get II(): string {
    if ('minute' in this.value) {
      const i = parseInt(this.minute().toString());
      return i < 10 ? '0' + i.toString() : i.toString();
    }
    return undefined;
  }

  get mm(): string {
    if ('minute' in this.value) {
      const i = parseInt(this.minute().toString());
      return i < 10 ? '0' + i.toString() : i.toString();
    }
    return undefined;
  }

  get I(): string {
    if ('minute' in this.value) {
      return this.minute().toString();
    }
    return undefined;
  }

  get SS(): string {
    if ('second' in this.value) {
      const s = parseInt(this.second().toString());
      return s < 10 ? '0' + s.toString() : s.toString();
    }
    return undefined;
  }

  get S(): string {
    if ('second' in this.value) {
      return this.second().toString();
    }
    return undefined;
  }

  get WW(): string {
    if ('weekOfYear' in this.value) {
      return this.value.weekOfYear.toString().padStart(2, '0');
    }
    return undefined;
  }

  get W(): string {
    if ('weekOfYear' in this.value) {
      return this.value.weekOfYear.toString();
    }
    return undefined;
  }

  format(format: string = 'YYYY-MM-DD HH:II:SS'): string {
    let str: string = '';
    if (format) {
      const reg = new RegExp('(\[|\]|' + Object.keys(unitsCorrespondence).join('|') + ')', 'g');
      let opened = 0;
      const parts = format.split(reg);
      each(parts, (part: string) => {
        if (part === '[') {
          opened++;
          return;
        }
        else if (part === ']') {
          opened--;
          return;
        }
        
        if (opened > 0) {
          str += part;
          return;
        }

        if (part in unitsCorrespondence) {
          if (part in this && isPrimitive(this[part as keyof this])) {
            str += this[part as keyof this];
          }
          else {
            const suffix = formatsMap[unitsCorrespondence[part]];
            str += this[suffix];
          }
        }
        else {
          str += part;
        }
      });
    }
    return str;
  }

  getWeekday(n: 0 | 1 | 2 | 3 | 4 | 5 | 6, mode: string = 'long', locale?: string): string {
    return getWeekday(n, mode, locale);
  }

  /**
   * Returns a NEW date that is the next (or previous if past=true)
   * occurrence of the given weekday, starting from this.#value.
   *
   * @param {number|string} weekday - Weekday index (0=Sunday…6=Saturday)
   *                                 or a localized weekday name.
   * @param {boolean} past - If true → return previous occurrence instead of next.
   * @param {string} [locale] - Optional locale for weekday names.
   */
  setWeekday(weekday: number | string, past = false, locale?: string): bbnDt<any>
  {
    let targetDay: number;

    if (typeof weekday === "string") {
      // Use your previously defined reverse method:
      weekday = getWeekdayIndex(weekday, locale);
    }
    // --- Normalize weekday ---
    if (typeof weekday === "number") {
      if (weekday < 0 || weekday > 6) {
        throw new RangeError("weekday number must be between 0 and 6");
      }
      targetDay = weekday;
    }
    else {
      throw new TypeError("weekday must be a number (0–6) or a string");
    }

    const currentDay = this.weekday() as number; // JS weekday (0–6)
    let diff;

    if (!past) {
      // ---------- NEXT occurrence ----------
      diff = (targetDay - currentDay + 7) % 7;
      if (diff === 0) {
        diff = 7; // next week if same day
      }
    } else {
      // ---------- PREVIOUS occurrence ----------
      diff = (currentDay - targetDay + 7) % 7;
      if (diff === 0) {
        diff = 7; // previous week if same day
      }
      diff = -diff;
    }

    return this.add(diff, 'd');
  }

  diff(date: any, unit: string = '', abs: boolean = false): number {
    let targetMs: number;

    if (date instanceof bbnDt) {
      targetMs = (date as bbnDt<any>).toEpochMs();
    }
    else if (
      date instanceof Temporal.ZonedDateTime ||
      date instanceof Temporal.PlainDateTime ||
      date instanceof Temporal.PlainDate ||
      date instanceof Temporal.PlainTime ||
      date instanceof Temporal.PlainYearMonth ||
      date instanceof Temporal.PlainMonthDay
    ) {
      // Wrap it in a temporary bbnDt-like shim to reuse toEpochMs logic;
      // or write a small standalone helper similar to toEpochMs(kind, value).
      const temp = { kind: this.kind, value: date } as any as bbnDt<any>;
      targetMs = temp.toEpochMs();
    }
    else if (typeof date === 'string' || typeof date === 'number') {
      // Reuse your parse API: parse into same kind as `this`
      const parsed = this.parse(String(date), ''); // format depends on your API
      targetMs = parsed.toEpochMs();
    }
    else {
      throw new TypeError('Unsupported date argument for diff');
    }

    const nowMs = this.toEpochMs();
    let diff = nowMs - targetMs;
    if (abs) {
      diff = Math.abs(diff);
    }

    if (!unit) {
      return diff;
    }

    const realUnit = unitsCorrespondence[unit] || unit;
    const match = getRow(units, d => d[0] === realUnit);
    if (!match) {
      throw new Error('Invalid unit for diff: ' + unit);
    }

    const [, , ms] = match; // [shortUnit, rtfUnit, ms]
    return Math.round(diff / ms);
  }  

  guessUnit(valueInMs: number): string | null {
    const absDiff = Math.abs(valueInMs);
    for (const [shortUnit, rtfUnit, ms] of units) {
      if ((absDiff >= ms) || (rtfUnit === 'second')) {
        return shortUnit;
      }
    }
    return null;
  }

  fromNow(unit: string = '') {
    const nowValue = bbnDt.nowForKind(this.kind);
    const temp = { kind: this.kind, value: nowValue } as any as bbnDt<any>;

    const rawDiffMs = this.diff(temp);
    const chosenUnit = unitsCorrespondence[unit] || this.guessUnit(rawDiffMs);
    if (!chosenUnit) {
      throw new Error('Cannot guess unit for fromNow');
    }

    const diff = this.diff(temp, chosenUnit);
    const rtf = new Intl.RelativeTimeFormat(
      [bbn.env.lang, ...navigator.languages],
      { numeric: 'auto' }
    );

    const match = getRow(units, d => d[0] === chosenUnit);
    if (!match) {
      throw new Error('Invalid unit for fromNow: ' + unit);
    }

    const [, rtfUnit] = match; // [shortUnit, rtfUnit, ms]
    return rtf.format(diff, rtfUnit);
  }

  fromDate(date: any, unit: string = '') {
    const rawDiffMs = this.diff(date);
    const chosenUnit = unitsCorrespondence[unit] || this.guessUnit(rawDiffMs);
    if (!chosenUnit) {
      throw new Error('Cannot guess unit for fromDate');
    }

    const diff = this.diff(date, chosenUnit);
    const u = chosenUnit; // text unit, you may want a label here

    return diff > 0
      ? _('%d %s before', diff, u)
      : diff < 0
        ? _('%d %s after', -diff, u)
        : _('The same %s', u);
  }

  startOf(unit = 'd'): bbnDt<any> {
    const u = unitsCorrespondence[unit] || unit;
    if (!u) {
      throw new Error('Invalid unit for startOf: ' + unit);
    }

    let v: any = this.value;

    const zeroTime = (obj: any) =>
      obj.with({
        hour: 0, minute: 0, second: 0,
        millisecond: 0, microsecond: 0, nanosecond: 0,
      });

    switch (u) {
      case 'y':
        if (!('year' in v)) {
          throw new Error('startOf("y") only valid for year-based types');
        }
        v = zeroTime(v.with({ month: 1, day: 1 }));
        break;

      case 'm':
        if (!('month' in v)) {
          throw new Error('startOf("m") only valid for month-based types');
        }
        v = zeroTime(v.with({ day: 1 }));
        break;

      case 'w': {
        // ISO dayOfWeek: 1 (Mon) .. 7 (Sun)
        const d = ('toPlainDate' in v) ? v.toPlainDate() : v;
        const dow = d.dayOfWeek; // 1..7
        const diffToMonday = dow - 1; // 0 for Monday
        const newDate = d.subtract({ days: diffToMonday });
        if ('toPlainDateTime' in v) {
          v = zeroTime(newDate.toPlainDateTime(v.toPlainTime?.() ?? Temporal.PlainTime.from('00:00')));
        } else {
          v = newDate; // PlainDate case
        }
        break;
      }

      case 'd':
        v = zeroTime(v);
        break;

      case 'h':
        v = v.with({ minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 });
        break;

      case 'i':
        v = v.with({ second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 });
        break;

      case 's':
        v = v.with({ millisecond: 0, microsecond: 0, nanosecond: 0 });
        break;

      default:
        throw new Error('Invalid unit for startOf: ' + unit);
    }

    return this.withValue(v);
  }

  endOf(unit: string = "d"): bbnDt<any> {
    const tz = Temporal.Now.timeZoneId();
    const u = unitsCorrespondence[unit] || unit;

    // 1. Convert current value to a ZonedDateTime (using your conventions)
    const toZdt = (v: Temporal.PlainDate | Temporal.PlainTime | Temporal.PlainDateTime | any) => {
      switch (this.kind) {
        case "zoned":
          return (this.value as Temporal.ZonedDateTime);

        case "datetime": {
          const pdt = this.value as Temporal.PlainDateTime;
          const iso = `${pdt.toString()}[${tz}]`;
          return Temporal.ZonedDateTime.from(iso);
        }

        case "date": {
          const d = this.value as Temporal.PlainDate;
          const iso = `${d.toString()}T00:00[${tz}]`;
          return Temporal.ZonedDateTime.from(iso);
        }

        case "time": {
          const t = this.value as Temporal.PlainTime;
          const today = Temporal.Now.plainDateISO();
          const iso = `${today.toString()}T${t.toString()}[${tz}]`;
          return Temporal.ZonedDateTime.from(iso);
        }

        case "year-month": {
          const ym = this.value as Temporal.PlainYearMonth;
          const d = ym.toPlainDate({day: 1});
          const iso = `${d.toString()}T00:00[${tz}]`;
          return Temporal.ZonedDateTime.from(iso);
        }

        case "month-day": {
          const md = this.value as Temporal.PlainMonthDay;
          const today = Temporal.Now.plainDateISO();
          const d = md.toPlainDate({year: today.year});
          const iso = `${d.toString()}T00:00[${tz}]`;
          return Temporal.ZonedDateTime.from(iso);
        }

        default:
          throw new Error("Unsupported kind in endOf");
      }
    };

    let zdt = toZdt(this.value);

    // 2. compute start of next unit
    let next: Temporal.ZonedDateTime;

    switch (u) {
      case "y": {
        next = zdt.with({ month: 1, day: 1, hour: 0, minute: 0, second: 0,
                          millisecond: 0, microsecond: 0, nanosecond: 0 })
          .add({ years: 1 });
        break;
      }

      case "m": {
        next = zdt.with({ day: 1, hour: 0, minute: 0, second: 0,
                          millisecond: 0, microsecond: 0, nanosecond: 0 })
          .add({ months: 1 });
        break;
      }

      case "w": {
        // ISO week: Monday = 1, Sunday = 7
        const dow = zdt.toPlainDate().dayOfWeek;
        const diffToMonday = -(dow - 1);
        const weekStart = zdt.add({ days: diffToMonday }).with({
          hour: 0, minute: 0, second: 0,
          millisecond: 0, microsecond: 0, nanosecond: 0
        });
        next = weekStart.add({ weeks: 1 });
        break;
      }

      case "d": {
        next = zdt
          .with({
            hour: 0, minute: 0, second: 0,
            millisecond: 0, microsecond: 0, nanosecond: 0
          })
          .add({ days: 1 });
        break;
      }

      case "h": {
        next = zdt.with({
          minute: 0, second: 0,
          millisecond: 0, microsecond: 0, nanosecond: 0
        }).add({ hours: 1 });
        break;
      }

      case "i": // minute
      case "n": // minute alternative?
      case "min": {
        next = zdt.with({
          second: 0,
          millisecond: 0, microsecond: 0, nanosecond: 0
        }).add({ minutes: 1 });
        break;
      }

      case "s": {
        next = zdt.with({
          millisecond: 0, microsecond: 0, nanosecond: 0
        }).add({ seconds: 1 });
        break;
      }

      default:
        throw new Error("Invalid unit for endOf: " + unit);
    }

    // 3. endOf = startOfNext - 1 millisecond
    const end = (next.subtract({ milliseconds: 1 }));

    // 4. Convert back to original kind
    switch (this.kind) {
      case "zoned":
        return this.withValue(end as any);

      case "datetime":
        return this.withValue(end.toPlainDateTime() as any);

      case "date":
        return this.withValue(end.toPlainDate() as any);

      case "time":
        return this.withValue(end.toPlainTime() as any);

      case "year-month": {
        const p = end.toPlainDate();
        return this.withValue(new Temporal.PlainYearMonth(p.year, p.month) as any);
      }

      case "month-day": {
        const p = end.toPlainDate();
        return this.withValue(new Temporal.PlainMonthDay(p.month, p.day) as any);
      }

      default:
        throw new Error("Unsupported kind in endOf");
    }
  }

  clone(): bbnDt<any> {
    return this.withValue(this.value);
  }
}

export default bbnDt;
