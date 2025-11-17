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
var _bbnDateDuration_instances, _bbnDateDuration_durationMs, _bbnDateDuration_unit, _bbnDateDuration_getUnitRowByName, _bbnDateDuration_getUnitValue, _bbnDateTool_value, _bbnDateTool_daysInMonth, _bbnDateTool_isDuration;
import _ from './_.js';
import each from './fn/loop/each.js';
import substr from './fn/string/substr.js';
import isNumber from './fn/type/isNumber.js';
import isDate from './fn/type/isDate.js';
import isPrimitive from './fn/type/isPrimitive.js';
const patterns = [
    // MariaDB DATETIME "YYYY-MM-DD HH:MM:SS"
    {
        name: 'mariadb-datetime',
        re: /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2}):(\d{2})$/,
        map: m => ({
            year: +m[1],
            month: +m[2],
            day: +m[3],
            hours: +m[4],
            minutes: +m[5],
            seconds: +m[6],
        })
    },
    // MariaDB DATETIME without seconds "YYYY-MM-DD HH:MM"
    {
        name: 'mariadb-datetime-no-sec',
        re: /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})$/,
        map: m => ({
            year: +m[1],
            month: +m[2],
            day: +m[3],
            hours: +m[4],
            minutes: +m[5],
            seconds: 0,
        })
    },
    // MariaDB DATE "YYYY-MM-DD"
    {
        name: 'mariadb-date',
        re: /^(\d{4})-(\d{2})-(\d{2})$/,
        map: m => ({
            year: +m[1],
            month: +m[2],
            day: +m[3],
            hours: 0,
            minutes: 0,
            seconds: 0,
        })
    },
    // ISO / JS-style "YYYY-MM-DDTHH:MM[:SS][.sss][Z or ±HH:MM]"
    {
        name: 'iso-datetime',
        re: /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?(?:\.\d+)?(?:Z|[+\-]\d{2}:?\d{2})?$/,
        map: m => ({
            year: +m[1],
            month: +m[2],
            day: +m[3],
            hours: +m[4],
            minutes: +m[5],
            seconds: m[6] !== undefined ? +m[6] : 0,
        })
    },
    // Simple slash date "YYYY/MM/DD"
    {
        name: 'slash-date',
        re: /^(\d{2})\/(\d{2})\/(\d{4})$/,
        map: m => ({
            year: +m[3],
            month: +m[2],
            day: +m[1],
            hours: 0,
            minutes: 0,
            seconds: 0,
        })
    },
    // Slash datetime "YYYY/MM/DD HH:MM:SS"
    {
        name: 'slash-datetime',
        re: /^(\d{2})\/(\d{2})\/(\d{4})[ T](\d{2}):(\d{2}):(\d{2})$/,
        map: m => ({
            year: +m[3],
            month: +m[2],
            day: +m[1],
            hours: +m[4],
            minutes: +m[5],
            seconds: +m[6],
        })
    },
];
const units = [
    ['y', "year", 365 * 24 * 60 * 60 * 1000],
    ['m', "month", 30 * 24 * 60 * 60 * 1000],
    ['w', "week", 7 * 24 * 60 * 60 * 1000],
    ['d', "day", 24 * 60 * 60 * 1000],
    ['h', "hour", 60 * 60 * 1000],
    ['i', "minute", 60 * 1000],
    ['s', "second", 1000]
];
const unitsMap = {
    'y': 'Year',
    'm': 'Month',
    'd': 'Date',
    'w': 'Week',
    'h': 'Hours',
    'i': 'Minutes',
    's': 'Seconds'
};
const formatsMap = {
    'y': 'YYYY',
    'm': 'MM',
    'd': 'DD',
    'e': 'EE',
    'w': 'WW',
    'h': 'HH',
    'i': 'II',
    's': 'SS'
};
const unitsCorrespondence = {
    'years': 'y',
    'year': 'y',
    'YEARS': 'y',
    'YEAR': 'y',
    'Years': 'y',
    'Year': 'y',
    'YYYY': 'y',
    'YY': 'y',
    'yyyy': 'y',
    'yy': 'y',
    'Y': 'y',
    'y': 'y',
    'months': 'm',
    'month': 'm',
    'Months': 'm',
    'Month': 'm',
    'MONTHS': 'm',
    'MONTH': 'm',
    'MMMM': 'm',
    'MMM': 'm',
    'MM': 'm',
    'M': 'm',
    'm': 'm',
    'weekday': 'e',
    'WEEKDAY': 'e',
    'ee': 'e',
    'EE': 'e',
    'e': 'e',
    'E': 'e',
    'ddd': 'e',
    'days': 'd',
    'day': 'd',
    'Days': 'd',
    'Day': 'd',
    'DAYS': 'd',
    'DAY': 'd',
    'DD': 'd',
    'D': 'd',
    'dd': 'd',
    'd': 'd',
    'hours': 'h',
    'hour': 'h',
    'Hours': 'h',
    'Hour': 'h',
    'HOURS': 'h',
    'HOUR': 'h',
    'HH': 'h',
    'hr': 'h',
    'H': 'h',
    'hh': 'h',
    'h': 'h',
    'minutes': 'i',
    'minute': 'i',
    'Minutes': 'i',
    'Minute': 'i',
    'MINUTES': 'i',
    'MINUTE': 'i',
    'II': 'i',
    'ii': 'i',
    'mn': 'i',
    'mm': 'i',
    'min': 'i',
    'n': 'i',
    'i': 'i',
    'SS': 's',
    'ss': 's',
    'seconds': 's',
    'second': 's',
    'Seconds': 's',
    'Second': 's',
    'SECONDS': 's',
    'SECOND': 's',
    'sec': 's',
    's': 's',
    'S': 's',
    'WW': 'w',
    'W': 'w',
    'w': 'w'
};
class bbnDateDuration {
    constructor(len, unit, fromMs = false) {
        _bbnDateDuration_instances.add(this);
        _bbnDateDuration_durationMs.set(this, 0);
        _bbnDateDuration_unit.set(this, '');
        const realUnit = unitsCorrespondence[unit] || unit;
        if (!realUnit) {
            throw new Error('Invalid unit for duration: ' + unit);
        }
        __classPrivateFieldSet(this, _bbnDateDuration_unit, realUnit, "f");
        const row = bbn.fn.getRow(units, d => d[0] === realUnit);
        if (!row) {
            throw new Error('Invalid unit for duration: ' + realUnit);
        }
        const msPerUnit = row[2];
        __classPrivateFieldSet(this, _bbnDateDuration_durationMs, fromMs ? len : len * msPerUnit, "f");
    }
    // -----------------------
    //     Public getters
    // -----------------------
    years(remaining = false) { return __classPrivateFieldGet(this, _bbnDateDuration_instances, "m", _bbnDateDuration_getUnitValue).call(this, 'year', remaining); }
    months(remaining = false) { return __classPrivateFieldGet(this, _bbnDateDuration_instances, "m", _bbnDateDuration_getUnitValue).call(this, 'month', remaining); }
    weeks(remaining = false) { return __classPrivateFieldGet(this, _bbnDateDuration_instances, "m", _bbnDateDuration_getUnitValue).call(this, 'week', remaining); }
    days(remaining = false) { return __classPrivateFieldGet(this, _bbnDateDuration_instances, "m", _bbnDateDuration_getUnitValue).call(this, 'day', remaining); }
    hours(remaining = false) { return __classPrivateFieldGet(this, _bbnDateDuration_instances, "m", _bbnDateDuration_getUnitValue).call(this, 'hour', remaining); }
    minutes(remaining = false) { return __classPrivateFieldGet(this, _bbnDateDuration_instances, "m", _bbnDateDuration_getUnitValue).call(this, 'minute', remaining); }
    seconds(remaining = false) { return __classPrivateFieldGet(this, _bbnDateDuration_instances, "m", _bbnDateDuration_getUnitValue).call(this, 'second', remaining); }
    // -----------------------
    //      Day.js style
    //   "asX" conversions
    // -----------------------
    /**
     * Returns the full duration expressed as X (float), like Day.js.
     */
    asYears() {
        const [, , ms] = __classPrivateFieldGet(this, _bbnDateDuration_instances, "m", _bbnDateDuration_getUnitRowByName).call(this, 'year');
        return __classPrivateFieldGet(this, _bbnDateDuration_durationMs, "f") / ms;
    }
    asMonths() {
        const [, , ms] = __classPrivateFieldGet(this, _bbnDateDuration_instances, "m", _bbnDateDuration_getUnitRowByName).call(this, 'month');
        return __classPrivateFieldGet(this, _bbnDateDuration_durationMs, "f") / ms;
    }
    asWeeks() {
        const [, , ms] = __classPrivateFieldGet(this, _bbnDateDuration_instances, "m", _bbnDateDuration_getUnitRowByName).call(this, 'week');
        return __classPrivateFieldGet(this, _bbnDateDuration_durationMs, "f") / ms;
    }
    asDays() {
        const [, , ms] = __classPrivateFieldGet(this, _bbnDateDuration_instances, "m", _bbnDateDuration_getUnitRowByName).call(this, 'day');
        return __classPrivateFieldGet(this, _bbnDateDuration_durationMs, "f") / ms;
    }
    asHours() {
        const [, , ms] = __classPrivateFieldGet(this, _bbnDateDuration_instances, "m", _bbnDateDuration_getUnitRowByName).call(this, 'hour');
        return __classPrivateFieldGet(this, _bbnDateDuration_durationMs, "f") / ms;
    }
    asMinutes() {
        const [, , ms] = __classPrivateFieldGet(this, _bbnDateDuration_instances, "m", _bbnDateDuration_getUnitRowByName).call(this, 'minute');
        return __classPrivateFieldGet(this, _bbnDateDuration_durationMs, "f") / ms;
    }
    asSeconds() {
        const [, , ms] = __classPrivateFieldGet(this, _bbnDateDuration_instances, "m", _bbnDateDuration_getUnitRowByName).call(this, 'second');
        return __classPrivateFieldGet(this, _bbnDateDuration_durationMs, "f") / ms;
    }
    /**
     * Add any unit (or instance default).
     */
    add(value, unit) {
        const targetUnit = unit
            ? (unitsCorrespondence[unit] || unit)
            : __classPrivateFieldGet(this, _bbnDateDuration_unit, "f");
        const row = bbn.fn.getRow(units, d => d[0] === targetUnit);
        if (!row) {
            throw new Error('Invalid unit for duration: ' + (unit !== null && unit !== void 0 ? unit : targetUnit));
        }
        return new bbnDateDuration(__classPrivateFieldGet(this, _bbnDateDuration_durationMs, "f") + value * row[2], __classPrivateFieldGet(this, _bbnDateDuration_unit, "f"), true);
    }
    subtract(value, unit) {
        return this.add(-value, unit);
    }
    toMilliseconds() {
        return __classPrivateFieldGet(this, _bbnDateDuration_durationMs, "f");
    }
}
_bbnDateDuration_durationMs = new WeakMap(), _bbnDateDuration_unit = new WeakMap(), _bbnDateDuration_instances = new WeakSet(), _bbnDateDuration_getUnitRowByName = function _bbnDateDuration_getUnitRowByName(name) {
    const row = bbn.fn.getRow(units, d => d[1] === name);
    if (!row) {
        throw new Error('Unit name not found: ' + name);
    }
    return row;
}, _bbnDateDuration_getUnitValue = function _bbnDateDuration_getUnitValue(name, remaining) {
    const index = units.findIndex(([, n]) => n === name);
    if (index === -1) {
        throw new Error('Unit not found: ' + name);
    }
    const unitMs = units[index][2];
    // Total units
    if (!remaining) {
        return Math.floor(__classPrivateFieldGet(this, _bbnDateDuration_durationMs, "f") / unitMs);
    }
    // Remaining units
    let remainingMs = __classPrivateFieldGet(this, _bbnDateDuration_durationMs, "f");
    for (let i = 0; i < index; i++) {
        const [, , msHigher] = units[i];
        const amount = Math.floor(remainingMs / msHigher);
        remainingMs -= amount * msHigher;
    }
    return Math.floor(remainingMs / unitMs);
};
class bbnDateTool {
    constructor(value, inputFormat = null) {
        _bbnDateTool_value.set(this, void 0);
        _bbnDateTool_daysInMonth.set(this, 0);
        _bbnDateTool_isDuration.set(this, false);
        let t = typeof value;
        if (!value) {
            __classPrivateFieldSet(this, _bbnDateTool_value, new Date(), "f");
        }
        else if (inputFormat) {
            /** @todo read the date from the input format */
            __classPrivateFieldSet(this, _bbnDateTool_value, new Date(), "f");
        }
        else {
            if (t === 'number' || (isNumber(value) && value !== '')) {
                if ((value < 5000) && isNumber(inputFormat)) {
                    value = Array.from(arguments);
                }
                else if (value < 10000000000) {
                    value = value * 1000;
                }
                if (!Array.isArray(value)) {
                    __classPrivateFieldSet(this, _bbnDateTool_value, new Date(value), "f");
                }
            }
            if (t === 'string') {
                for (const p of patterns) {
                    const m = value.match(p.re);
                    if (m) {
                        const { year, month, day, hours, minutes, seconds } = p.map(m);
                        __classPrivateFieldSet(this, _bbnDateTool_value, new Date(year, month - 1, day, hours, minutes, seconds, 0), "f");
                    }
                }
                if (!__classPrivateFieldGet(this, _bbnDateTool_value, "f")) {
                    throw new Error('Invalid date string format: ' + value);
                }
            }
            else if (isDate(value)) {
                __classPrivateFieldSet(this, _bbnDateTool_value, value, "f");
            }
            else if (Array.isArray(value)) {
                __classPrivateFieldSet(this, _bbnDateTool_value, new Date(...value), "f");
            }
        }
        if (__classPrivateFieldGet(this, _bbnDateTool_value, "f") === undefined) {
            const obj = {};
            return new Proxy(this, {
                get: (target, prop) => {
                    return undefined;
                }
            });
        }
    }
    toString() {
        return __classPrivateFieldGet(this, _bbnDateTool_value, "f") ? this.format() : '';
    }
    year(v) {
        if (0 in arguments) {
            const d = this.copy();
            d.setFullYear(v);
            return new bbnDateTool(d);
        }
        return __classPrivateFieldGet(this, _bbnDateTool_value, "f").getFullYear();
    }
    month(v) {
        if (0 in arguments) {
            const d = this.copy();
            d.setMonth(v - 1);
            return new bbnDateTool(d);
        }
        return __classPrivateFieldGet(this, _bbnDateTool_value, "f").getMonth() + 1;
    }
    day(v) {
        if (0 in arguments) {
            const d = this.copy();
            d.setDate(v);
            return new bbnDateTool(d);
        }
        return __classPrivateFieldGet(this, _bbnDateTool_value, "f").getDate();
    }
    hours(v) {
        if (0 in arguments) {
            const d = this.copy();
            d.setHours(v);
            return new bbnDateTool(d);
        }
        return __classPrivateFieldGet(this, _bbnDateTool_value, "f").getHours();
    }
    minutes(v) {
        if (0 in arguments) {
            const d = this.copy();
            d.setMinutes(v);
            return new bbnDateTool(d);
        }
        return __classPrivateFieldGet(this, _bbnDateTool_value, "f").getMinutes();
    }
    seconds(v) {
        if (0 in arguments) {
            const d = this.copy();
            d.setSeconds(v);
            return new bbnDateTool(d);
        }
        return __classPrivateFieldGet(this, _bbnDateTool_value, "f").getSeconds();
    }
    weekday(v, past = false) {
        if (0 in arguments) {
            return this.setWeekday(v, past);
        }
        return __classPrivateFieldGet(this, _bbnDateTool_value, "f").getDay();
    }
    /**
     * Returns the ISO-8601 week number of this date.
     * Week starts on Monday, and week 1 is the week with Jan 4.
     *
     * @returns {number} ISO week number (1–53)
     */
    week() {
        // Copy date in UTC to avoid timezone issues
        const d = new Date(Date.UTC(this.year(), this.month() - 1, this.day()));
        // Set to nearest Thursday (ISO anchor)
        // (Thursday = day 4, because Sunday=0, Monday=1,...)
        const dayNum = d.getUTCDay() || 7; // make Sunday = 7
        // Move date to Thursday of this week
        d.setUTCDate(d.getUTCDate() + (4 - dayNum));
        // First week of the year is the week with Jan 4 in it
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        // Calculate full weeks between the dates
        const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
        return weekNo;
    }
    get tst() {
        return Math.ceil(__classPrivateFieldGet(this, _bbnDateTool_value, "f").getTime() / 1000);
    }
    get mtst() {
        return __classPrivateFieldGet(this, _bbnDateTool_value, "f").getTime();
    }
    get YYYY() {
        return this.year().toString();
    }
    get YY() {
        return substr(this.year().toString(), 2, 2);
    }
    get MMMM() {
        const opt = {
            month: 'long',
        };
        const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
        return d.format(__classPrivateFieldGet(this, _bbnDateTool_value, "f"));
    }
    get MMM() {
        const opt = {
            month: 'short',
        };
        const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
        return d.format(__classPrivateFieldGet(this, _bbnDateTool_value, "f"));
    }
    get MM() {
        const m = parseInt(this.month().toString());
        return m < 10 ? '0' + m.toString() : m.toString();
    }
    get M() {
        return this.month().toString();
    }
    get EE() {
        return this.weekday().toString();
    }
    get DD() {
        const d = parseInt(this.day().toString());
        return d < 10 ? '0' + d.toString() : d.toString();
    }
    get d() {
        return this.day().toString();
    }
    get dddd() {
        const opt = {
            weekday: 'long'
        };
        const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
        return d.format(__classPrivateFieldGet(this, _bbnDateTool_value, "f"));
    }
    get ddd() {
        const opt = {
            weekday: 'short'
        };
        const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
        return d.format(__classPrivateFieldGet(this, _bbnDateTool_value, "f"));
    }
    get D() {
        return this.day().toString();
    }
    get HH() {
        const h = parseInt(this.hours().toString());
        return h < 10 ? '0' + h.toString() : h.toString();
    }
    get H() {
        return this.hours().toString();
    }
    get II() {
        const i = parseInt(this.minutes().toString());
        return i < 10 ? '0' + i.toString() : i.toString();
    }
    get I() {
        return this.minutes().toString();
    }
    get SS() {
        const s = parseInt(this.seconds().toString());
        return s < 10 ? '0' + s.toString() : s.toString();
    }
    get S() {
        return this.seconds().toString();
    }
    get WW() {
        const y = parseInt(this.year().toString());
        const firstDayOfYear = new Date(y, 0, 1);
        const pastDaysOfYear = (__classPrivateFieldGet(this, _bbnDateTool_value, "f").getTime() - firstDayOfYear.getTime()) / 86400000;
        return String(Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)).padStart(2, '0');
    }
    get isValid() {
        return __classPrivateFieldGet(this, _bbnDateTool_value, "f") !== undefined;
    }
    get daysInMonth() {
        if (this.isValid && !__classPrivateFieldGet(this, _bbnDateTool_daysInMonth, "f")) {
            switch (__classPrivateFieldGet(this, _bbnDateTool_value, "f").getMonth()) {
                case 1:
                    if (__classPrivateFieldGet(this, _bbnDateTool_value, "f").getFullYear() % 4 === 0) {
                        __classPrivateFieldSet(this, _bbnDateTool_daysInMonth, 29, "f");
                    }
                    else {
                        __classPrivateFieldSet(this, _bbnDateTool_daysInMonth, 28, "f");
                    }
                    break;
                case 0:
                case 3:
                case 5:
                case 8:
                case 10:
                    __classPrivateFieldSet(this, _bbnDateTool_daysInMonth, 30, "f");
                    break;
                default:
                    __classPrivateFieldSet(this, _bbnDateTool_daysInMonth, 31, "f");
                    break;
            }
        }
        return __classPrivateFieldGet(this, _bbnDateTool_daysInMonth, "f");
    }
    valueOf() {
        return this.mtst;
    }
    add(value, unit = 'd') {
        const date = __classPrivateFieldGet(this, _bbnDateTool_value, "f") ? new Date(__classPrivateFieldGet(this, _bbnDateTool_value, "f").getTime()) : new Date();
        if (unitsCorrespondence[unit]) {
            const realUnit = unitsCorrespondence[unit];
            const suffix = realUnit === 'y' ? 'FullYear' : unitsMap[realUnit];
            const getter = 'get' + suffix;
            const setter = 'set' + suffix;
            date[setter](date[getter]() + value);
            return new bbnDateTool(date);
        }
        return null;
    }
    subtract(value, unit) {
        return this.add(-value, unit);
    }
    dateFromFormat(value, unit) {
        const d = new Date();
        return d;
    }
    date() {
        return this.format('Y-m-d');
    }
    datetime() {
        return this.format('Y-m-d H:i:s');
    }
    time() {
        return this.format('H:i:s');
    }
    fdate(long = false, withTime = false, weekday = false) {
        if (!__classPrivateFieldGet(this, _bbnDateTool_value, "f")) {
            return '';
        }
        const opt = Object.assign(Object.assign({ year: 'numeric', month: long ? 'long' : 'short', day: 'numeric' }, (weekday ? { weekday: 'long' } : {})), (withTime ? { hour: '2-digit', minute: '2-digit' } : {}));
        const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
        return d.format(__classPrivateFieldGet(this, _bbnDateTool_value, "f"));
    }
    ftime(withSeconds = false) {
        if (!__classPrivateFieldGet(this, _bbnDateTool_value, "f")) {
            return '';
        }
        const opt = {
            hour: '2-digit',
            minute: '2-digit',
        };
        if (withSeconds) {
            opt.second = '2-digit';
        }
        const t = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
        return t.format(__classPrivateFieldGet(this, _bbnDateTool_value, "f"));
    }
    format(format = 'y-m-d h:i:s') {
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
    unix(ms = false) {
        if (typeof ms === 'number') {
            const date = this.copy();
            date.setTime(ms * 1000);
            return new bbnDateTool(date);
        }
        if (__classPrivateFieldGet(this, _bbnDateTool_value, "f")) {
            if (ms) {
                return __classPrivateFieldGet(this, _bbnDateTool_value, "f").getTime();
            }
            else {
                return Math.floor(__classPrivateFieldGet(this, _bbnDateTool_value, "f").getTime() / 1000);
            }
        }
        return 0;
    }
    sql(noTime = false) {
        if (!__classPrivateFieldGet(this, _bbnDateTool_value, "f")) {
            return '';
        }
        return noTime
            ? this.format('YYYY-MM-DD')
            : this.format('YYYY-MM-DD HH:II:SS');
    }
    /**
     * Compare this date to another date with a given precision.
     * @returns -1 if this < other, 0 if equal, 1 if this > other
     */
    compare(date, unit = '') {
        var _a;
        const d = date instanceof bbnDateTool ? date : new bbnDateTool(date);
        const realUnit = unitsCorrespondence[unit] || null;
        // If no unit or unknown unit, fall back to timestamp comparison
        if (!realUnit) {
            if (this.mtst < d.mtst) {
                return -1;
            }
            if (this.mtst > d.mtst) {
                return 1;
            }
            return 0;
        }
        const order = ['y', 'm', 'd', 'h', 'i', 's'];
        // Compare step by step until the requested precision
        for (const u of order) {
            const key = (_a = bbn.fn.getRow(units, un => un[0] === u)) === null || _a === void 0 ? void 0 : _a[1];
            const a = this[key]();
            const b = d[key]();
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            // Stop when we've reached the desired unit
            if (u === realUnit) {
                break;
            }
        }
        return 0;
    }
    isBefore(date, unit = '') {
        return this.compare(date, unit) === -1;
    }
    isAfter(date, unit = 'day') {
        return this.compare(date, unit) === 1;
    }
    isSame(date, unit = 'day') {
        return this.compare(date, unit) === 0;
    }
    isAfterOrSame(date, unit = '') {
        return [0, 1].includes(this.compare(date, unit));
    }
    isBeforeOrSame(date, unit = '') {
        return [-1, 0].includes(this.compare(date, unit));
    }
    fromNow(unit = '') {
        const date = new Date();
        const chosenUnit = unitsCorrespondence[unit] || this.guessUnit(this.diff(date));
        const diff = this.diff(date, chosenUnit);
        const rtf = new Intl.RelativeTimeFormat([bbn.env.lang, ...navigator.languages], { numeric: "auto" });
        // FORCED UNIT MODE
        const match = bbn.fn.getRow(units, d => d[0] === chosenUnit);
        if (!match) {
            throw new Error('Invalid unit for fromDate: ' + unit);
        }
        return rtf.format(diff, match[1]);
    }
    fromDate(date, unit = '') {
        const chosenUnit = unitsCorrespondence[unit] || this.guessUnit(this.diff(date));
        const diff = this.diff(date, chosenUnit);
        return diff > 0 ? _('%d %s before', diff, unit) : (diff < 0 ? _('%d %s after', -diff, unit) : _("The same %s", unit));
    }
    guessUnit(valueInMs) {
        const absDiff = Math.abs(valueInMs);
        for (const [shortUnit, rtfUnit, ms] of units) {
            if ((absDiff >= ms) || (rtfUnit === "second")) {
                return shortUnit;
            }
        }
    }
    diff(date, unit = '', abs = false) {
        const target = (date instanceof bbnDateTool) ? date.mtst : new Date(date).getTime();
        const now = this.mtst;
        let diff = now - target;
        if (abs) {
            diff = Math.abs(diff);
        }
        if (!unit) {
            return diff;
        }
        const realUnit = unitsCorrespondence[unit];
        const match = bbn.fn.getRow(units, d => d[0] === realUnit);
        if (!match) {
            throw new Error('Invalid unit for diff: ' + unit);
        }
        const [u, rtfUnit, ms] = match;
        return Math.round(diff / ms);
    }
    calendar(format) {
        let str = '';
        if (format) {
        }
        return str;
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
    getWeekdayIndex(name, locale) {
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
        const d = this.copy();
        d.setDate(d.getDate() + diff);
        return new bbnDateTool(d);
    }
    copy() {
        return new Date(__classPrivateFieldGet(this, _bbnDateTool_value, "f").getTime());
    }
    clone() {
        return new bbnDateTool(__classPrivateFieldGet(this, _bbnDateTool_value, "f") ? new Date(__classPrivateFieldGet(this, _bbnDateTool_value, "f").getTime()) : undefined);
    }
    /**
     * Returns a NEW bbnDateTool at the start of the given unit.
     * Units: year, month, week, day, hour, minute, second
     */
    startOf(unit = "d") {
        const u = unitsCorrespondence[unit];
        if (!u) {
            throw new Error('Invalid unit for startOf: ' + unit);
        }
        let d;
        switch (u) {
            case "y":
                d = new Date(this.year(), 0, 1, 0, 0, 0, 0);
                break;
            case "m":
                d = new Date(this.year(), this.month() - 1, 1, 0, 0, 0, 0);
                break;
            case "w": {
                // Week starting Monday:
                // JS getDay(): 0 (Sun) .. 6 (Sat)
                const current = new Date(this.year(), this.month() - 1, this.day(), this.hours(), this.minutes(), this.seconds(), 0);
                const wd = current.getDay(); // 0..6
                const diffToMonday = (wd + 6) % 7; // 0 for Monday, 6 for Sunday
                d = new Date(current.getFullYear(), current.getMonth(), current.getDate() - diffToMonday, 0, 0, 0, 0);
                break;
            }
            case "d":
                d = new Date(this.year(), this.month() - 1, this.day(), 0, 0, 0, 0);
                break;
            case "h":
                d = new Date(this.year(), this.month() - 1, this.day(), this.hours(), 0, 0, 0);
                break;
            case "i":
                d = new Date(this.year(), this.month() - 1, this.day(), this.hours(), this.minutes(), 0, 0);
                break;
            case "s":
                d = new Date(this.year(), this.month() - 1, this.day(), this.hours(), this.minutes(), this.seconds(), 0);
                break;
            default:
                throw new Error('Invalid unit for startOf: ' + unit);
        }
        return new bbnDateTool(d);
    }
    /**
     * Returns a NEW bbnDateTool at the end of the given unit.
     * Units: year, month, week, day, hour, minute, second
     */
    endOf(unit = "d") {
        const u = unitsCorrespondence[unit];
        if (!u) {
            throw new Error('Invalid unit for endOf: ' + unit);
        }
        let d;
        switch (u) {
            case "y":
                // Dec 31, 23:59:59.999
                d = new Date(this.year(), 11, 31, 23, 59, 59, 999);
                break;
            case "m":
                // Day 0 of next month = last day of this month
                d = new Date(this.year(), this.month(), 0, 23, 59, 59, 999);
                break;
            case "w": {
                // End of week (starting Monday) = startOf('week') + 6 days, at 23, 59, 59, 999
                const start = this.startOf("w");
                const base = new Date(start.year(), start.month() - 1, start.day(), 23, 59, 59, 999);
                base.setDate(base.getDate() + 6);
                d = base;
                break;
            }
            case "day":
                d = new Date(this.year(), this.month() - 1, this.day(), 23, 59, 59, 999);
                break;
            case "hour":
                d = new Date(this.year(), this.month() - 1, this.day(), this.hours(), 59, 59, 999);
                break;
            case "minute":
                d = new Date(this.year(), this.month() - 1, this.day(), this.hours(), this.minutes(), 59, 999);
                break;
            case "second":
                d = new Date(this.year(), this.month() - 1, this.day(), this.hours(), this.minutes(), this.seconds(), 999);
                break;
            default:
                d = new Date(this.mtst);
        }
        return new bbnDateTool(d);
    }
    duration(num, unit = 's') {
        return new bbnDateDuration(num, unit);
    }
}
_bbnDateTool_value = new WeakMap(), _bbnDateTool_daysInMonth = new WeakMap(), _bbnDateTool_isDuration = new WeakMap();
function generatorFunction(value, inputFormat = null) {
    if (value instanceof bbnDateTool) {
        return value;
    }
    return new bbnDateTool(value, inputFormat);
}
export default generatorFunction;
