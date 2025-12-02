var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _bbnDt_value;
import { Temporal } from 'temporal-polyfill';
import { unitsCorrespondence, units, formatsMap } from '../vars/units.js';
import _ from '../../_.js';
import substr from '../../fn/string/substr.js';
import each from '../../fn/loop/each.js';
import getRow from '../../fn/object/getRow.js';
import isPrimitive from '../../fn/type/isPrimitive.js';
import bbnDtDuration from './duration.js';
export class bbnDt {
    constructor(value) {
        this.__bbnNoData = true;
        this.__isBbnDt = true;
        _bbnDt_value.set(this, void 0);
        this.getWeekdayIndex = (name, locale) => {
            const loc = locale || bbn.env.lang;
            const input = name.trim().toLowerCase();
            // Build a localized map only once per locale (optional optimization)
            const langs = [loc, ...navigator.languages];
            for (let i = 0; i < langs.length; i++) {
                if (!langs[i]) {
                    continue;
                }
                const formatter = new Intl.DateTimeFormat(langs[i], { weekday: "long" });
                // Generate localized weekday names for Sun → Sat
                for (let i = 0; i < 7; i++) {
                    // 2023-01-01 was Sunday
                    const date = new Date(2023, 0, 1 + i);
                    const localized = formatter.format(date).toLowerCase();
                    if (localized === input) {
                        return i; // JS weekday number
                    }
                }
            }
            throw new Error(`Unknown weekday name '${name}' for locale '${loc}'`);
        };
        Object.defineProperty(this, 'isValid', {
            value: true,
            writable: false,
            configurable: true
        });
        __classPrivateFieldSet(this, _bbnDt_value, value, "f");
    }
    setValid(isValid) {
        Object.defineProperty(this, 'isValid', {
            value: isValid,
            writable: false,
            configurable: false
        });
    }
    get value() {
        return __classPrivateFieldGet(this, _bbnDt_value, "f");
    }
    get hasFullDate() {
        return ('year' in this.value) && ('month' in this.value) && ('day' in this.value);
    }
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
    toEpochMs() {
        const tz = bbnDt.systemTimeZoneId;
        switch (this.kind) {
            case 'zoned': {
                const v = this.value;
                return v.toInstant().epochMilliseconds;
            }
            case 'dateTime': {
                const v = this.value;
                // RFC 9557 string: "YYYY-MM-DDTHH:mm:ss[Europe/Rome]"
                const iso = `${v.toString()}[${tz}]`;
                const zdt = Temporal.ZonedDateTime.from(iso);
                return zdt.toInstant().epochMilliseconds;
            }
            case 'date': {
                const d = this.value;
                // "YYYY-MM-DDT00:00[Europe/Rome]"
                const iso = `${d.toString()}T00:00[${tz}]`;
                const zdt = Temporal.ZonedDateTime.from(iso);
                return zdt.toInstant().epochMilliseconds;
            }
            case 'time': {
                const t = this.value;
                const today = Temporal.Now.plainDateISO();
                // "YYYY-MM-DDTHH:mm[:ss][Europe/Rome]"
                const iso = `${today.toString()}T${t.toString()}[${tz}]`;
                const zdt = Temporal.ZonedDateTime.from(iso);
                return zdt.toInstant().epochMilliseconds;
            }
            case 'yearMonth': {
                const ym = this.value;
                const d = ym.toPlainDate({ day: 1 }); // first day of month
                const iso = `${d.toString()}T00:00[${tz}]`;
                const zdt = Temporal.ZonedDateTime.from(iso);
                return zdt.toInstant().epochMilliseconds;
            }
            case 'monthDay': {
                const md = this.value;
                const today = Temporal.Now.plainDateISO();
                const d = md.toPlainDate({ year: today.year }); // current year
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
    static nowForKind(kind) {
        switch (kind) {
            case 'zoned':
                return Temporal.Now.zonedDateTimeISO();
            case 'dateTime':
                return Temporal.Now.plainDateTimeISO();
            case 'date':
                return Temporal.Now.plainDateISO();
            case 'time':
                return Temporal.Now.plainTimeISO();
            case 'yearMonth': {
                const d = Temporal.Now.plainDateISO();
                return new Temporal.PlainYearMonth(d.year, d.month);
            }
            case 'monthDay': {
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
    withValue(newValue) {
        const Ctor = this.constructor;
        return new Ctor(newValue);
    }
    static compare(a, b, unit) {
        if (!a || !b) {
            throw new TypeError('Both arguments must be Temporal values');
        }
        const tz = Temporal.Now.timeZoneId();
        const realUnit = unitsCorrespondence[unit] ? getRow(units, d => d[0] === unitsCorrespondence[unit])[1] : undefined;
        const isBbnDt = (x) => x instanceof bbnDt;
        // --- helper: get underlying Temporal value if wrapper ---
        const unwrap = (x) => isBbnDt(x) ? x.value : x;
        // --- helper: normalized ZonedDateTime for comparison ---
        const toZdt = (x) => {
            // x may be a bbnDt* or a raw Temporal
            if (isBbnDt(x)) {
                switch (x.kind) {
                    case 'zoned': {
                        return x.value;
                    }
                    case 'dateTime': {
                        const v = x.value;
                        const iso = `${v.toString()}[${tz}]`;
                        return Temporal.ZonedDateTime.from(iso);
                    }
                    case 'date': {
                        const d = x.value;
                        const iso = `${d.toString()}T00:00[${tz}]`;
                        return Temporal.ZonedDateTime.from(iso);
                    }
                    case 'yearMonth': {
                        const ym = x.value;
                        const d = ym.toPlainDate({ day: 1 });
                        const iso = `${d.toString()}T00:00[${tz}]`;
                        return Temporal.ZonedDateTime.from(iso);
                    }
                    default:
                        throw new TypeError(`Cannot convert kind '${x.kind}' to ZonedDateTime for comparison`);
                }
            }
            // If it's already a Temporal.ZonedDateTime, keep it
            if (x instanceof Temporal.ZonedDateTime) {
                return x;
            }
            throw new TypeError('toZdt expects a bbnDt wrapper or ZonedDateTime');
        };
        // ---- CASE 1: same constructor → your original logic on raw Temporal ----
        const rawA = unwrap(a);
        const rawB = unwrap(b);
        if (rawA.constructor === rawB.constructor) {
            const Ctor = rawA.constructor;
            if (realUnit === undefined) {
                if (typeof Ctor.compare !== 'function') {
                    throw new TypeError('This Temporal type has no static compare');
                }
                return Ctor.compare(rawA, rawB); // -1, 0, 1
            }
            if (typeof rawA.until !== 'function') {
                throw new TypeError('This Temporal type does not support until/since');
            }
            const diff = rawA.until(rawB, { smallestUnit: realUnit, largestUnit: realUnit, roundingMode: 'floor' });
            //bbn.fn.log(['compare0', diff, realUnit, diff.sign, a.date(), b.date(), rawA.day, rawB.day]);
            return diff.sign;
        }
        // ---- CASE 2: different constructors, but convertible bbnDt kinds ----
        const convertibleKinds = new Set([
            'zoned',
            'dateTime',
            'date',
            'yearMonth',
        ]);
        if (isBbnDt(a) &&
            isBbnDt(b) &&
            convertibleKinds.has(a.kind) &&
            convertibleKinds.has(b.kind)) {
            const za = toZdt(a);
            const zb = toZdt(b);
            if (realUnit === undefined) {
                return Temporal.ZonedDateTime.compare(za, zb);
            }
            if (typeof za.until !== 'function') {
                throw new TypeError('ZonedDateTime does not support until/since');
            }
            const diff = za.until(zb, { smallestUnit: realUnit, largestUnit: realUnit, roundingMode: 'floor' });
            //bbn.fn.log(['compare', diff, realUnit, diff.sign, a.date(), b.date(), za.day, zb.day]);
            return diff.sign;
        }
        // ---- CASE 3: not compatible ----
        throw new TypeError('Cannot compare different Temporal or bbnDt types');
    }
    static parse(input, format, cls = 'auto', locale) {
        return bbn.dt(input, format, cls, locale);
    }
    parse(input, format, cls) {
        return bbnDt.parse(input, format, cls || this.kind);
    }
    compare(other, unit) {
        if (!(other instanceof bbnDt)) {
            other = bbn.dt(other, null, this.kind);
        }
        return bbnDt.compare(this, other, unit);
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
    isBefore(other, unit) {
        return this.compare(other, unit) < 0;
    }
    isBeforeOrSame(other, unit) {
        return this.compare(other, unit) <= 0;
    }
    isAfter(other, unit) {
        return this.compare(other, unit) > 0;
    }
    isAfterOrSame(other, unit) {
        return this.compare(other, unit) >= 0;
    }
    isSame(other, unit) {
        return this.compare(other, unit) === 0;
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
            if (this.hasFullDate) {
                return 0;
            }
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
            if (this.hasFullDate) {
                return 0;
            }
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
            if (this.hasFullDate) {
                return 0;
            }
            throw new Error('second() is not supported for this type');
        }
        if ((v !== undefined) && !(v instanceof Event)) {
            const d = this.value.with({ second: v });
            return new this.constructor(d);
        }
        return this.value.second;
    }
    weekday(v, past) {
        if (!this.value) {
            return undefined;
        }
        if (!('dayOfWeek' in this.value)) {
            throw new Error('weekday() is not supported for this type');
        }
        if ((v !== undefined) && !(v instanceof Event)) {
            return this.setWeekday(v, past);
        }
        return this.value.dayOfWeek;
    }
    date(v) {
        if (!this.value) {
            return undefined;
        }
        if (!this.hasFullDate) {
            throw new Error('date() is not supported for this type');
        }
        if (0 in arguments && (v !== undefined) && !(v instanceof Event)) {
            return this.parse(v, 'Y-m-d');
        }
        return this.YYYY + '-' + this.MM + '-' + this.DD;
    }
    datetime(v) {
        if (0 in arguments && (v !== undefined) && !(v instanceof Event)) {
            if (this.kind === 'date') {
                return this.parse(this.date() + ' ' + v, 'Y-m-d 00:00:00', 'dateTime');
            }
            return this.parse(v, 'Y-m-d H:i:s');
        }
        return this.YYYY + '-' + this.MM + '-' + this.DD + ' ' + this.HH + ':' + this.II + ':' + this.SS;
    }
    time(v) {
        if (0 in arguments && (v !== undefined) && !(v instanceof Event)) {
            if (this.kind === 'zoned') {
                return this.parse(this.date() + ' ' + v + ' GMT' + this.value.timeZoneId, 'Y-m-d H:i:s[ GMT]Z', 'dateTime');
            }
            if (['dateTime', 'date'].includes(this.kind)) {
                return this.parse(this.date() + ' ' + v, 'Y-m-d H:i:s', 'dateTime');
            }
            return this.parse(v, 'H:i:s');
        }
        return this.HH + ':' + this.II + ':' + this.SS;
    }
    fdate(long = false, withTime = false) {
        if (!this.value) {
            return '';
        }
        return bbn.dt.locales.formatters.short.format(new Date(this.toEpochMs()));
    }
    ftime(withSeconds = true) {
        if (!this.value) {
            return '';
        }
        return this.format('HH:II' + (withSeconds ? ':SS' : ''));
    }
    week() {
        if (!this.value) {
            return undefined;
        }
        if (!('weekOfYear' in this.value)) {
            throw new Error('week() is not supported for this type');
        }
        return this.value.weekOfYear;
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
            return bbn.dt.locales.monthsLong[this.month() - 1];
        }
        return undefined;
    }
    get MMM() {
        if ('month' in this.value) {
            return bbn.dt.locales.monthsShort[this.month() - 1];
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
            return this.getWeekday(0, 'long');
        }
        return undefined;
    }
    get ddd() {
        if ('day' in this.value) {
            return this.getWeekday(0, 'short');
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
        else if (this.hasFullDate) {
            return '00';
        }
        return undefined;
    }
    get H() {
        if ('hour' in this.value) {
            return this.hour().toString();
        }
        else if (this.hasFullDate) {
            return '0';
        }
        return undefined;
    }
    get II() {
        if ('minute' in this.value) {
            const i = parseInt(this.minute().toString());
            return i < 10 ? '0' + i.toString() : i.toString();
        }
        else if (this.hasFullDate) {
            return '00';
        }
        return undefined;
    }
    get mm() {
        if ('minute' in this.value) {
            const i = parseInt(this.minute().toString());
            return i < 10 ? '0' + i.toString() : i.toString();
        }
        else if (this.hasFullDate) {
            return '00';
        }
        return undefined;
    }
    get I() {
        if ('minute' in this.value) {
            return this.minute().toString();
        }
        else if (this.hasFullDate) {
            return '0';
        }
        return undefined;
    }
    get SS() {
        if ('second' in this.value) {
            const s = parseInt(this.second().toString());
            return s < 10 ? '0' + s.toString() : s.toString();
        }
        else if (this.hasFullDate) {
            return '00';
        }
        return undefined;
    }
    get S() {
        if ('second' in this.value) {
            return this.second().toString();
        }
        else if (this.hasFullDate) {
            return '0';
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
    unix(ms = false) {
        if (typeof ms === 'number') {
            const Ctor = this.constructor;
            const d = new Date(ms);
            return new Ctor(d);
        }
        return ms ? this.toEpochMs() : Math.floor(this.toEpochMs() / 1000);
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
    calendar(short) {
        const now = this.constructor.now();
        const startThis = this.startOf("day");
        const startNow = now.startOf("day");
        const diffDays = startThis.diff(startNow, "day");
        const rtf = new Intl.RelativeTimeFormat(bbn.env.lang, { numeric: "auto" });
        let phrase;
        if (diffDays >= -6 && diffDays <= 6) {
            phrase = rtf.format(diffDays, "day");
        }
        else {
            const diffWeeks = Math.floor(diffDays / 7);
            phrase = rtf.format(diffWeeks, "week");
        }
        return `${phrase} ${this.ftime()}`;
    }
    matchFormat(value, format) {
        try {
            this.parse(value, format);
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    getWeekday(n, mode = 'long', locale) {
        if (!mode) {
            const letter = this.getWeekday(n, 'narrow', locale);
            const abbr = this.getWeekday(n, 'short', locale);
            const full = this.getWeekday(n, 'long', locale);
            return {
                letter,
                abbr,
                full,
                long: full,
                short: abbr,
                narrow: letter
            };
        }
        let m;
        if (mode === 'letter') {
            m = 'narrow';
        }
        else if (mode === 'abbr') {
            m = 'short';
        }
        else if (mode === 'full') {
            m = 'long';
        }
        else if (!['long', 'short', 'narrow'].includes(mode)) {
            throw new Error('Invalid mode for getWeekDay: ' + mode + '. Allowed values are "long", "short", "narrow", "letter", "abbr", "full".');
        }
        else {
            m = mode;
        }
        // Create a date with the right weekday
        // 2023-01-01 was a Sunday → base for offset
        const base = new Date(2023, 0, 1 + n);
        return base.toLocaleDateString([locale || bbn.env.lang, ...navigator.languages], { weekday: m });
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
            weekday = this.getWeekdayIndex(weekday, locale);
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
    diff(date, unit = '', abs = false) {
        let targetMs;
        if (date instanceof bbnDt) {
            targetMs = date.toEpochMs();
        }
        else if (date instanceof Temporal.ZonedDateTime ||
            date instanceof Temporal.PlainDateTime ||
            date instanceof Temporal.PlainDate ||
            date instanceof Temporal.PlainTime ||
            date instanceof Temporal.PlainYearMonth ||
            date instanceof Temporal.PlainMonthDay) {
            // Wrap it in a temporary bbnDt-like shim to reuse toEpochMs logic;
            // or write a small standalone helper similar to toEpochMs(kind, value).
            const temp = { kind: this.kind, value: date };
            targetMs = temp.toEpochMs();
        }
        else if (typeof date === 'string' || typeof date === 'number') {
            // Reuse your parse API: parse into same kind as `this`
            const parsed = this.parse(String(date), ''); // format depends on your API
            targetMs = parsed.toEpochMs();
        }
        else {
            bbn.fn.log("DATE??", date);
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
    guessUnit(valueInMs) {
        const absDiff = Math.abs(valueInMs);
        for (const [shortUnit, rtfUnit, ms] of units) {
            if ((absDiff >= ms) || (rtfUnit === 'second')) {
                return shortUnit;
            }
        }
        return null;
    }
    fromNow(unit = '') {
        const nowValue = bbnDt.nowForKind(this.kind);
        const temp = bbn.dt(nowValue, null, this.kind);
        const rawDiffMs = this.diff(temp);
        const chosenUnit = unitsCorrespondence[unit] || this.guessUnit(rawDiffMs);
        if (!chosenUnit) {
            throw new Error('Cannot guess unit for fromNow');
        }
        const diff = this.diff(temp, chosenUnit);
        const rtf = new Intl.RelativeTimeFormat([bbn.env.lang, ...navigator.languages], { numeric: 'auto' });
        const match = getRow(units, d => d[0] === chosenUnit);
        if (!match) {
            throw new Error('Invalid unit for fromNow: ' + unit);
        }
        const [, rtfUnit] = match; // [shortUnit, rtfUnit, ms]
        return rtf.format(diff, rtfUnit);
    }
    fromDate(date, unit = '') {
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
    startOf(unit = 'd') {
        var _a, _b;
        const u = unitsCorrespondence[unit] || unit;
        if (!u) {
            throw new Error('Invalid unit for startOf: ' + unit);
        }
        let v = this.value;
        const zeroTime = (obj) => {
            const change = {};
            if ('hour' in obj) {
                Object.assign(change, {
                    hour: 0, minute: 0, second: 0,
                    millisecond: 0, microsecond: 0, nanosecond: 0,
                });
                return obj.with(change);
            }
            return obj;
        };
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
                    v = zeroTime(newDate.toPlainDateTime((_b = (_a = v.toPlainTime) === null || _a === void 0 ? void 0 : _a.call(v)) !== null && _b !== void 0 ? _b : Temporal.PlainTime.from('00:00')));
                }
                else {
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
    endOf(unit = "d") {
        const tz = Temporal.Now.timeZoneId();
        const u = unitsCorrespondence[unit] || unit;
        // 1. Convert current value to a ZonedDateTime (using your conventions)
        const toZdt = (v) => {
            switch (this.kind) {
                case "zoned":
                    return this.value;
                case "dateTime": {
                    const pdt = this.value;
                    const iso = `${pdt.toString()}[${tz}]`;
                    return Temporal.ZonedDateTime.from(iso);
                }
                case "date": {
                    const d = this.value;
                    const iso = `${d.toString()}T00:00[${tz}]`;
                    return Temporal.ZonedDateTime.from(iso);
                }
                case "time": {
                    const t = this.value;
                    const today = Temporal.Now.plainDateISO();
                    const iso = `${today.toString()}T${t.toString()}[${tz}]`;
                    return Temporal.ZonedDateTime.from(iso);
                }
                case "yearMonth": {
                    const ym = this.value;
                    const d = ym.toPlainDate({ day: 1 });
                    const iso = `${d.toString()}T00:00[${tz}]`;
                    return Temporal.ZonedDateTime.from(iso);
                }
                case "monthDay": {
                    const md = this.value;
                    const today = Temporal.Now.plainDateISO();
                    const d = md.toPlainDate({ year: today.year });
                    const iso = `${d.toString()}T00:00[${tz}]`;
                    return Temporal.ZonedDateTime.from(iso);
                }
                default:
                    throw new Error("Unsupported kind in endOf");
            }
        };
        let zdt = toZdt(this.value);
        // 2. compute start of next unit
        let next;
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
                return this.withValue(end);
            case "dateTime":
                return this.withValue(end.toPlainDateTime());
            case "date":
                return this.withValue(end.toPlainDate());
            case "time":
                return this.withValue(end.toPlainTime());
            case "yearMonth": {
                const p = end.toPlainDate();
                return this.withValue(new Temporal.PlainYearMonth(p.year, p.month));
            }
            case "monthDay": {
                const p = end.toPlainDate();
                return this.withValue(new Temporal.PlainMonthDay(p.month, p.day));
            }
            default:
                throw new Error("Unsupported kind in endOf");
        }
    }
    clone() {
        return this.withValue(this.value);
    }
    inLeapYear() {
        if (this.isValid) {
            const year = this.year();
            return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        }
        return false;
    }
    daysInMonth() {
        if (this.isValid) {
            switch (this.month()) {
                case 2:
                    if (this.year() % 4 === 0) {
                        return 29;
                    }
                    else {
                        return 28;
                    }
                case 1:
                case 4:
                case 6:
                case 9:
                case 11:
                    return 30;
                default:
                    return 31;
            }
        }
    }
    valueOf() {
        return this.unix();
    }
}
_bbnDt_value = new WeakMap();
/** System time zone ID (e.g. "Europe/Rome") */
bbnDt.systemTimeZoneId = Temporal.Now.timeZoneId();
export default bbnDt;
