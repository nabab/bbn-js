import { Temporal } from 'temporal-polyfill';
import { bbnDtTemporal } from '../vars/types.js';
import substr from '../../fn/string/substr.js';
import { getWeekdayIndex, getWeekday } from '../functions/getWeekday.js';
import { unitsCorrespondence, formatsMap } from '../vars/units.js';
import each from '../../fn/loop/each.js';
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
      other = bbn.dt(other, this.kind) as TValue;
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

  isBefore(other: bbnDt<any>): boolean {
    return this.compare(other) < 0;
  }

  isAfter(other: bbnDt<any>): boolean {
    return this.compare(other) > 0;
  }

  isSame(other: bbnDt<any>): boolean {
    return this.compare(other) === 0;
  }

  equals(other: bbnDt<any>): boolean {
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

}

export default bbnDt;
