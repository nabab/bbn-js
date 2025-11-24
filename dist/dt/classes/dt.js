import { Temporal } from 'temporal-polyfill';
import substr from '../../fn/string/substr.js';
import { getWeekdayIndex, getWeekday } from '../functions/getWeekday.js';
import { unitsCorrespondence, formatsMap } from '../vars/units.js';
import each from '../../fn/loop/each.js';
import isPrimitive from '../../fn/type/isPrimitive.js';
import bbnDtDuration from './duration.js';
export class bbnDt {
    static compare(a, b, unit) {
        if (!a || !b) {
            throw new TypeError('Both arguments must be Temporal values');
        }
        if (a.constructor !== b.constructor) {
            throw new TypeError('Cannot compare different Temporal types');
        }
        const Ctor = a.constructor;
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
    compare(other, unit) {
        if (!(other instanceof bbnDt)) {
            other = bbn.dt(other, this.kind);
        }
        return bbnDt.compare(this.value, other.value, unit);
    }
    add(amount, unit) {
        if (!this.value) {
            return undefined;
        }
        if (this.value instanceof Temporal.PlainMonthDay || typeof this.value.add !== 'function') {
            throw new TypeError('This Temporal type does not support add/subtract');
        }
        if (amount instanceof bbnDtDuration) {
            const d = this.value.add(amount.value);
            return new this.constructor(d);
        }
        else if (typeof amount === 'object') {
            const dur = new bbnDtDuration(amount);
            const d = this.value.add(dur.value);
            return new this.constructor(d);
        }
        else {
            if (!unit) {
                throw new Error('Unit must be specified when adding a number');
            }
            const dur = bbnDtDuration.fromUnit(amount, unit);
            const d = this.value.add(dur.value);
            return new this.constructor(d);
        }
    }
    subtract(amount, unit) {
        if (!this.value) {
            return undefined;
        }
        if (this.value instanceof Temporal.PlainMonthDay || typeof this.value.subtract !== 'function') {
            throw new TypeError('This Temporal type does not support add/subtract');
        }
        if (amount instanceof bbnDtDuration) {
            const d = this.value.subtract(amount.value);
            return new this.constructor(d);
        }
        else if (typeof amount === 'object') {
            const dur = new bbnDtDuration(amount);
            const d = this.value.subtract(dur.value);
            return new this.constructor(d);
        }
        else {
            if (!unit) {
                throw new Error('Unit must be specified when adding a number');
            }
            const dur = bbnDtDuration.fromUnit(amount, unit);
            const d = this.value.subtract(dur.value);
            return new this.constructor(d);
        }
    }
    isBefore(other) {
        return this.compare(other) < 0;
    }
    isAfter(other) {
        return this.compare(other) > 0;
    }
    isSame(other) {
        return this.compare(other) === 0;
    }
    equals(other) {
        return this.isSame(other);
    }
    // ---- Serialization ----
    toJSON() {
        return {
            kind: this.kind,
            value: String(this.value)
        };
    }
    toString() {
        return String(this.value);
    }
    year(v) {
        if (!this.value) {
            return undefined;
        }
        if (!('year' in this.value)) {
            throw new Error('year() is not supported for this type');
        }
        if ((v !== undefined) && !(v instanceof Event)) {
            const d = this.value.with({ year: v });
            return new this.constructor(d);
        }
        return this.value.year;
    }
    month(v) {
        if (!this.value) {
            return undefined;
        }
        if (!('month' in this.value)) {
            throw new Error('month() is not supported for this type');
        }
        if ((v !== undefined) && !(v instanceof Event)) {
            const d = this.value.with({ month: v });
            return new this.constructor(d);
        }
        return this.value.month;
    }
    day(v) {
        if (!this.value) {
            return undefined;
        }
        if (!('day' in this.value)) {
            throw new Error('day() is not supported for this type');
        }
        if ((v !== undefined) && !(v instanceof Event)) {
            const d = this.value.with({ day: v });
            return new this.constructor(d);
        }
        return this.value.day;
    }
    hour(v) {
        if (!this.value) {
            return undefined;
        }
        if (!('hour' in this.value)) {
            throw new Error('hour() is not supported for this type');
        }
        if ((v !== undefined) && !(v instanceof Event)) {
            const d = this.value.with({ hour: v });
            return new this.constructor(d);
        }
        return this.value.hour;
    }
    minute(v) {
        if (!this.value) {
            return undefined;
        }
        if (!('minute' in this.value)) {
            throw new Error('minute() is not supported for this type');
        }
        if ((v !== undefined) && !(v instanceof Event)) {
            const d = this.value.with({ minute: v });
            return new this.constructor(d);
        }
        return this.value.minute;
    }
    second(v) {
        if (!this.value) {
            return undefined;
        }
        if (!('second' in this.value)) {
            throw new Error('second() is not supported for this type');
        }
        if ((v !== undefined) && !(v instanceof Event)) {
            const d = this.value.with({ second: v });
            return new this.constructor(d);
        }
        return this.value.second;
    }
    weekday() {
        if (!this.value) {
            return undefined;
        }
        if (!('dayOfWeek' in this.value)) {
            throw new Error('weekday() is not supported for this type');
        }
        return this.value.dayOfWeek;
    }
    get YYYY() {
        if ('year' in this.value) {
            return this.year().toString();
        }
        return undefined;
    }
    get YY() {
        if ('year' in this.value) {
            return substr(this.year().toString(), 2, 2);
        }
        return undefined;
    }
    get MMMM() {
        if ('month' in this.value) {
            return this.format('MMMM');
        }
        return undefined;
    }
    get MMM() {
        if ('month' in this.value) {
            return this.format('MMM');
        }
        return undefined;
    }
    get MM() {
        if ('month' in this.value) {
            const m = parseInt(this.month().toString());
            return m < 10 ? '0' + m.toString() : m.toString();
        }
        return undefined;
    }
    get M() {
        if ('month' in this.value) {
            return this.month().toString();
        }
        return undefined;
    }
    get EE() {
        if ('dayOfWeek' in this.value) {
            return this.value.dayOfWeek.toString();
        }
        return undefined;
    }
    get DD() {
        if ('day' in this.value) {
            const d = parseInt(this.day().toString());
            return d < 10 ? '0' + d.toString() : d.toString();
        }
        return undefined;
    }
    get d() {
        if ('day' in this.value) {
            return this.day().toString();
        }
        return undefined;
    }
    get dddd() {
        if ('dayOfWeek' in this.value) {
            return getWeekday(0, 'long');
        }
        return undefined;
    }
    get ddd() {
        if ('day' in this.value) {
            return getWeekday(0, 'short');
        }
        return undefined;
    }
    get D() {
        if ('day' in this.value) {
            return this.day().toString();
        }
        return undefined;
    }
    get HH() {
        if ('hour' in this.value) {
            const h = parseInt(this.hour().toString());
            return h < 10 ? '0' + h.toString() : h.toString();
        }
        return undefined;
    }
    get H() {
        if ('hour' in this.value) {
            return this.hour().toString();
        }
        return undefined;
    }
    get II() {
        if ('minute' in this.value) {
            const i = parseInt(this.minute().toString());
            return i < 10 ? '0' + i.toString() : i.toString();
        }
        return undefined;
    }
    get mm() {
        if ('minute' in this.value) {
            const i = parseInt(this.minute().toString());
            return i < 10 ? '0' + i.toString() : i.toString();
        }
        return undefined;
    }
    get I() {
        if ('minute' in this.value) {
            return this.minute().toString();
        }
        return undefined;
    }
    get SS() {
        if ('second' in this.value) {
            const s = parseInt(this.second().toString());
            return s < 10 ? '0' + s.toString() : s.toString();
        }
        return undefined;
    }
    get S() {
        if ('second' in this.value) {
            return this.second().toString();
        }
        return undefined;
    }
    get WW() {
        if ('weekOfYear' in this.value) {
            return this.value.weekOfYear.toString().padStart(2, '0');
        }
        return undefined;
    }
    get W() {
        if ('weekOfYear' in this.value) {
            return this.value.weekOfYear.toString();
        }
        return undefined;
    }
    format(format = 'YYYY-MM-DD HH:II:SS') {
        let str = '';
        if (format) {
            const reg = new RegExp('(\[|\]|' + Object.keys(unitsCorrespondence).join('|') + ')', 'g');
            let opened = 0;
            const parts = format.split(reg);
            each(parts, (part) => {
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
                    if (part in this && isPrimitive(this[part])) {
                        str += this[part];
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
    setWeekday(weekday, past = false, locale) {
        let targetDay;
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
        const currentDay = this.weekday(); // JS weekday (0–6)
        let diff;
        if (!past) {
            // ---------- NEXT occurrence ----------
            diff = (targetDay - currentDay + 7) % 7;
            if (diff === 0) {
                diff = 7; // next week if same day
            }
        }
        else {
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
