import { Temporal } from 'temporal-polyfill';
import { BbnDtKind, BbnDtTemporal } from '../vars/types.js';
import substr from '../../fn/string/substr.js';
import { getWeekdayIndex, getWeekday } from '../functions/getWeekday.js';
import { unitsCorrespondence, formatsMap } from '../vars/units.js';
import each from '../../fn/loop/each.js';
import isPrimitive from '../../fn/type/isPrimitive.js';

export abstract class bbnDt<TValue extends BbnDtTemporal> {
  abstract readonly kind: BbnDtKind;

  abstract get value(): TValue;

  // ---- Same-kind comparison (no time zone) ----

  /**
   * Subclasses implement how to compare two values of the *same kind*.
   * Base class does not try to mix date vs time etc.
   */
  protected abstract compareSameKind(other: this): -1 | 0 | 1;

  abstract add(value: number, unit: string): TValue;
  abstract subtract(value: number, unit: string): TValue;


  compare(other: bbnDt<any>): -1 | 0 | 1 {
    if (this.kind !== other.kind) {
      throw new Error(
        `Cannot compare ${this.kind} with ${other.kind} without timezone semantics`
      );
    }
    // TS sees other as bbnDtBase<any>, but at runtime kinds match,
    // so a cast to this is safe.
    return this.compareSameKind(other as this);
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

  year(v?: any): number | TValue {
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
  month(v?: any): number | TValue {
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
  day(v?: any): number | TValue {
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
  hour(v?: any): number | TValue {
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
  minute(v?: any): number | TValue {
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
  second(v?: any): number | TValue {
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

  weekday(): number {
    if (!this.value) {
      return undefined;
    }

    if (!('dayOfWeek' in this.value)) {
      throw new Error('weekday() is not supported for this type');
    }

    return (this.value as any).dayOfWeek;
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
  setWeekday(weekday: number | string, past = false, locale?: string): TValue
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
