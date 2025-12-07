import buildLocaleFromIntl from './buildLocaleFromIntl.js';
import bbnDtZoned from '../classes/zoned.js';
import bbnDtDateTime from '../classes/dateTime.js';
import bbnDtDate from '../classes/date.js';
import bbnDtTime from '../classes/time.js';
import bbnDtYearMonth from '../classes/yearMonth.js';
import bbnDtMonthDay from '../classes/monthDay.js';
const lc = function (str, localeCode) {
    try {
        return localeCode ? str.toLocaleLowerCase(localeCode) : str.toLowerCase();
    }
    catch (_a) {
        return str.toLowerCase();
    }
};
export default function parse(input, format, cls = 'auto', force, locale) {
    var _a, _b, _c, _d, _e, _f, _g;
    buildLocaleFromIntl();
    const TemporalAny = globalThis.Temporal;
    if (!TemporalAny) {
        throw new Error('Temporal API is required (load @js-temporal/polyfill)');
    }
    const T = TemporalAny;
    let isValid = true;
    if (!locale) {
        locale = ((_a = bbn === null || bbn === void 0 ? void 0 : bbn.dt) === null || _a === void 0 ? void 0 : _a.locales) || {};
    }
    const loc = {
        monthsLong: (_b = locale === null || locale === void 0 ? void 0 : locale.monthsLong) !== null && _b !== void 0 ? _b : bbn.dt.locales.monthsLong,
        monthsShort: (_c = locale === null || locale === void 0 ? void 0 : locale.monthsShort) !== null && _c !== void 0 ? _c : bbn.dt.locales.monthsShort,
        weekdaysLong: (_d = locale === null || locale === void 0 ? void 0 : locale.weekdaysLong) !== null && _d !== void 0 ? _d : bbn.dt.locales.weekdaysLong,
        weekdaysShort: (_e = locale === null || locale === void 0 ? void 0 : locale.weekdaysShort) !== null && _e !== void 0 ? _e : bbn.dt.locales.weekdaysShort
    };
    const localeCode = ((bbn === null || bbn === void 0 ? void 0 : bbn.env) && ((_f = bbn.env) === null || _f === void 0 ? void 0 : _f.lang)) ||
        ((bbn === null || bbn === void 0 ? void 0 : bbn.dt) && ((_g = bbn.dt) === null || _g === void 0 ? void 0 : _g.locale)) ||
        Intl.DateTimeFormat().resolvedOptions().locale;
    const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const makeTokenSpecs = () => [
        // Years
        {
            token: 'YYYY',
            regex: '\\d{4}',
            apply: (v, ctx) => {
                ctx.year = parseInt(v, 10);
                ctx.hasYear = true;
            }
        },
        {
            token: 'YY',
            regex: '\\d{2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                ctx.year = n >= 70 ? 1900 + n : 2000 + n;
                ctx.hasYear = true;
            }
        },
        {
            token: 'Y',
            regex: '[+-]?\\d{1,6}',
            apply: (v, ctx) => {
                ctx.year = parseInt(v, 10);
                ctx.hasYear = true;
            }
        },
        // Months
        {
            token: 'MMMM',
            regex: '[^\\d\\s]+',
            apply: (v, ctx) => {
                const val = lc(v, localeCode);
                const idx = loc.monthsLong
                    .findIndex((m) => lc(m, localeCode) === val);
                if (idx === -1) {
                    throw new Error('Invalid month name: ' + v);
                }
                ctx.month = idx + 1;
                ctx.hasMonth = true;
            }
        },
        {
            token: 'MMM',
            regex: '[^\\d\\s]+',
            apply: (v, ctx) => {
                const val = lc(v, localeCode);
                const idx = loc.monthsShort
                    .findIndex((m) => lc(m, localeCode) === val);
                if (idx === -1) {
                    throw new Error('Invalid short month name: ' + v);
                }
                ctx.month = idx + 1;
                ctx.hasMonth = true;
            }
        },
        {
            token: 'MM',
            regex: '\\d{2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 1 || n > 12) {
                    throw new Error('Invalid month: ' + n);
                }
                ctx.month = n;
                ctx.hasMonth = true;
            }
        },
        {
            token: 'mm',
            regex: '\\d{2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 0 || n > 59) {
                    throw new Error('Invalid minute: ' + n);
                }
                // NOTE: kept as in your original code, even though name suggests minutes.
                ctx.minute = n;
                ctx.hasMinute = true;
            }
        },
        {
            token: 'M',
            regex: '\\d{1,2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 1 || n > 12) {
                    throw new Error('Invalid month: ' + n);
                }
                ctx.month = n;
                ctx.hasMonth = true;
            }
        },
        {
            token: 'm', // PHP-like month
            regex: '\\d{2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 1 || n > 12) {
                    throw new Error('Invalid month: ' + n);
                }
                ctx.month = n;
                ctx.hasMonth = true;
            }
        },
        // Day of month
        {
            token: 'DD',
            regex: '\\d{2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 1 || n > 31) {
                    throw new Error('Invalid day of month: ' + n);
                }
                ctx.day = n;
                ctx.hasDay = true;
            }
        },
        {
            token: 'D',
            regex: '\\d{1,2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 1 || n > 31) {
                    throw new Error('Invalid day of month: ' + n);
                }
                ctx.day = n;
                ctx.hasDay = true;
            }
        },
        {
            token: 'd', // PHP-like day-of-month
            regex: '\\d{2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 1 || n > 31) {
                    throw new Error('Invalid day of month: ' + n);
                }
                ctx.day = n;
                ctx.hasDay = true;
            }
        },
        // Weekday (validated only, not used for construction)
        {
            token: 'dddd',
            regex: '[^\\d\\s]+',
            apply: (v, ctx) => {
                const val = lc(v, localeCode);
                const idx = loc.weekdaysLong
                    .findIndex((w) => lc(w, localeCode) === val);
                if (idx === -1) {
                    throw new Error('Invalid weekday name: ' + v);
                }
                ctx.weekday = idx; // 0-6
            }
        },
        {
            token: 'ddd',
            regex: '[^\\d\\s]+',
            apply: (v, ctx) => {
                const val = lc(v, localeCode);
                const idx = loc.weekdaysShort
                    .findIndex((w) => lc(w, localeCode) === val);
                if (idx === -1) {
                    throw new Error('Invalid short weekday name: ' + v);
                }
                ctx.weekday = idx;
            }
        },
        {
            token: 'EE',
            regex: '\\d{1}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 0 || n > 7) {
                    throw new Error('Invalid weekday number: ' + n);
                }
                ctx.weekday = n;
            }
        },
        // -------- Hours (24h + 12h) --------
        // 12-hour, zero-padded (01–12)
        {
            token: 'hh',
            regex: '\\d{2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 1 || n > 12) {
                    throw new Error('Invalid 12-hour clock hour: ' + n);
                }
                ctx.hour = n; // keep 1–12 for now, convert after AM/PM
                ctx.hasHour = true;
                ctx.uses12Hour = true;
            }
        },
        // 24-hour, zero-padded
        {
            token: 'HH',
            regex: '\\d{2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 0 || n > 23) {
                    throw new Error('Invalid hour: ' + n);
                }
                ctx.hour = n;
                ctx.hasHour = true;
            }
        },
        {
            token: 'H',
            regex: '\\d{1,2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 0 || n > 23) {
                    throw new Error('Invalid hour: ' + n);
                }
                ctx.hour = n;
                ctx.hasHour = true;
            }
        },
        {
            token: 'h', // PHP-like 24h alias here (kept as you had it)
            regex: '\\d{2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 0 || n > 23) {
                    throw new Error('Invalid hour: ' + n);
                }
                ctx.hour = n;
                ctx.hasHour = true;
            }
        },
        // Minutes
        {
            token: 'II',
            regex: '\\d{2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 0 || n > 59) {
                    throw new Error('Invalid minute: ' + n);
                }
                ctx.minute = n;
                ctx.hasMinute = true;
            }
        },
        {
            token: 'I',
            regex: '\\d{1,2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 0 || n > 59) {
                    throw new Error('Invalid minute: ' + n);
                }
                ctx.minute = n;
                ctx.hasMinute = true;
            }
        },
        {
            token: 'i', // PHP-like minutes
            regex: '\\d{2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 0 || n > 59) {
                    throw new Error('Invalid minute: ' + n);
                }
                ctx.minute = n;
                ctx.hasMinute = true;
            }
        },
        // Seconds
        {
            token: 'SS',
            regex: '\\d{2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 0 || n > 59) {
                    throw new Error('Invalid second: ' + n);
                }
                ctx.second = n;
                ctx.hasSecond = true;
            }
        },
        {
            token: 'S',
            regex: '\\d{1,2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 0 || n > 59) {
                    throw new Error('Invalid second: ' + n);
                }
                ctx.second = n;
                ctx.hasSecond = true;
            }
        },
        {
            token: 'ss', // PHP-like seconds
            regex: '\\d{2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 0 || n > 59) {
                    throw new Error('Invalid second: ' + n);
                }
                ctx.second = n;
                ctx.hasSecond = true;
            }
        },
        {
            token: 's', // PHP-like seconds
            regex: '\\d{2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 0 || n > 59) {
                    throw new Error('Invalid second: ' + n);
                }
                ctx.second = n;
                ctx.hasSecond = true;
            }
        },
        // Milliseconds
        {
            token: 'ms',
            regex: '\\d{1,3}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 0 || n > 999) {
                    throw new Error('Invalid millisecond: ' + n);
                }
                ctx.ms = n;
                ctx.hasMs = true;
            }
        },
        // Week (parsed, not used yet)
        {
            token: 'WWWW',
            regex: '\\d{1,2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 1 || n > 53) {
                    throw new Error('Invalid week number: ' + n);
                }
                ctx.week = n;
            }
        },
        {
            token: 'WWW',
            regex: '\\d{1,2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 1 || n > 53) {
                    throw new Error('Invalid week number: ' + n);
                }
                ctx.week = n;
            }
        },
        {
            token: 'WW',
            regex: '\\d{1,2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 1 || n > 53) {
                    throw new Error('Invalid week number: ' + n);
                }
                ctx.week = n;
            }
        },
        {
            token: 'W',
            regex: '\\d{1,2}',
            apply: (v, ctx) => {
                const n = parseInt(v, 10);
                if (n < 1 || n > 53) {
                    throw new Error('Invalid week number: ' + n);
                }
                ctx.week = n;
            }
        },
        // Timezone offset
        {
            token: 'ZZ',
            regex: '(?:Z?[+-]\\d{2}\\d{2})',
            apply: (v, ctx) => {
                if (v === 'Z' || v === 'z') {
                    ctx.offsetMinutes = 0;
                    return;
                }
                const sign = v[0] === '-' ? -1 : 1;
                const rest = v.slice(1); // "02:00" or "0500"
                const hh = parseInt(rest.slice(0, 2), 10);
                const mm = parseInt(rest.slice(2), 10);
                if (hh < 0 || hh > 23 || mm < 0 || mm > 59) {
                    throw new Error('Invalid timezone offset: ' + v);
                }
                ctx.offsetMinutes = sign * (hh * 60 + mm);
            }
        },
        {
            token: 'Z',
            regex: '(?:Z?[+-]\\d{2}\\:{1}\\d{2})',
            apply: (v, ctx) => {
                if (v === 'Z' || v === 'z') {
                    ctx.offsetMinutes = 0;
                    return;
                }
                const sign = v[0] === '-' ? -1 : 1;
                const rest = v.slice(1); // "02:00" or "0500"
                const [h, m] = rest.split(':');
                let hh = parseInt(h, 10);
                let mm = parseInt(m, 10);
                if (hh < 0 || hh > 23 || mm < 0 || mm > 59) {
                    throw new Error('Invalid timezone offset: ' + v);
                }
                ctx.offsetMinutes = sign * (hh * 60 + mm);
            }
        },
        // Timezone name (z) – IANA like "Europe/Rome"
        {
            token: 'z',
            regex: '[A-Za-z_\\/]+',
            apply: (v, ctx) => {
                ctx.timeZone = v;
            }
        },
        // -------- NEW: AM/PM markers --------
        {
            token: 'A',
            regex: '(?:AM|PM|am|pm)',
            apply: (v, ctx) => {
                ctx.isPM = /pm/i.test(v);
                ctx.hasAmPm = true;
            }
        },
        {
            token: 'a',
            regex: '(?:AM|PM|am|pm)',
            apply: (v, ctx) => {
                ctx.isPM = /pm/i.test(v);
                ctx.hasAmPm = true;
            }
        }
    ];
    function parseWithFormat(fmt, cls = 'auto') {
        var _a;
        const currentDate = new bbnDtDateTime();
        const ctx = {
            year: currentDate.year(),
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            ms: 0,
            hasYear: false,
            hasMonth: false,
            hasDay: false,
            hasHour: false,
            hasMinute: false,
            hasSecond: false,
            hasMs: false
        };
        const isClsAuto = cls === 'auto';
        const isClsZoned = cls.toLowerCase() === 'zoned';
        const isClsDateTime = cls.toLowerCase() === 'datetime';
        const isClsDate = cls.toLowerCase() === 'date';
        const isClsTime = cls.toLowerCase() === 'time';
        const isClsYearMonth = cls.toLowerCase() === 'yearmonth';
        const isClsMonthDay = cls.toLowerCase() === 'monthday';
        const tokenSpecs = makeTokenSpecs();
        const tokensByLength = [...tokenSpecs].sort((a, b) => b.token.length - a.token.length);
        let pattern = '';
        const applyFns = [];
        let i = 0;
        let lastPositionMatch = 0;
        while (i < fmt.length) {
            // 1) Handle [literal] blocks first
            if (fmt[i] === '[') {
                let j = i + 1;
                let rawLiteral = '';
                while (j < fmt.length && fmt[j] !== ']') {
                    rawLiteral += fmt[j];
                    j++;
                }
                if (j < fmt.length && fmt[j] === ']') {
                    // We found a closing bracket: treat content as literal
                    // Undo our earlier escaping of ']' (we used '\]' when building)
                    const literal = rawLiteral.replace(/\\]/g, ']');
                    pattern += escapeRegex(literal);
                    // No capturing group & no applyFn, we just match this text
                    i = j + 1;
                    continue;
                }
                // If there's no closing ']', fall through and treat '[' as normal char
            }
            // 2) Try to match a token at this position
            let matchedToken = null;
            for (const spec of tokensByLength) {
                if (fmt.startsWith(spec.token, i)) {
                    matchedToken = spec;
                    break;
                }
            }
            if (matchedToken) {
                pattern += `(${matchedToken.regex})`;
                lastPositionMatch = pattern.length;
                if (matchedToken.apply) {
                    applyFns.push(value => matchedToken.apply(value, ctx));
                }
                else {
                    applyFns.push(() => { });
                }
                i += matchedToken.token.length;
            }
            else {
                // 3) Plain literal character
                pattern += escapeRegex(fmt[i]);
                i += 1;
            }
        }
        const fullRegex = new RegExp('^' + bbn.fn.substr(pattern, 0, lastPositionMatch));
        let match = fullRegex.exec(input);
        if (!match) {
            if (force) {
                const inputDate = new bbnDtDateTime(currentDate.year(), 1, 1, 0, 0, 0, 0);
                input = inputDate.format(fmt);
                isValid = false;
                match = fullRegex.exec(input);
            }
            else {
                throw new Error(`Date string "${input}" does not match format "${fmt}"`);
            }
        }
        for (let idx = 1; idx < match.length; idx++) {
            const value = match[idx];
            const apply = applyFns[idx - 1];
            if (value != null && apply) {
                apply(value);
            }
        }
        // ---- NEW: convert 12h + AM/PM to 24h ----
        if (ctx.uses12Hour) {
            if (!ctx.hasAmPm) {
                throw new Error('AM/PM marker (A or a) is required with 12-hour format (hh)');
            }
            let h = ctx.hour; // 1–12
            if (ctx.isPM) {
                if (h < 12) {
                    h += 12;
                }
            }
            else { // AM
                if (h === 12) {
                    h = 0;
                }
            }
            ctx.hour = h;
        }
        const hasDate = ctx.hasYear || ctx.hasMonth || ctx.hasDay;
        const hasFullDate = ctx.hasYear && ctx.hasMonth && ctx.hasDay;
        const hasYearMonthOnly = ctx.hasYear && ctx.hasMonth && !ctx.hasDay;
        const hasMonthDayOnly = !ctx.hasYear && ctx.hasMonth && ctx.hasDay;
        const hasTime = ctx.hasHour || ctx.hasMinute || ctx.hasSecond || ctx.hasMs;
        const hasZone = ctx.timeZone != null || ctx.offsetMinutes != null;
        let dtObj;
        // ---------- 1) If timezone (Z or z) → Zoned ----------
        if (isClsZoned || (hasZone && isClsAuto)) {
            let pdt;
            try {
                pdt = new T.PlainDateTime(ctx.year, ctx.month, ctx.day, ctx.hour, ctx.minute, ctx.second, ctx.ms * 1000000);
            }
            catch (_b) {
                throw new Error('Invalid date/time components');
            }
            if (ctx.timeZone) {
                const tz = T.TimeZone.from(ctx.timeZone);
                const zdt = pdt.toZonedDateTime(tz);
                dtObj = new bbnDtZoned(zdt);
            }
            else {
                const utcMs = Date.UTC(ctx.year, ctx.month - 1, ctx.day, ctx.hour, ctx.minute, ctx.second, ctx.ms);
                const epochMs = utcMs - ((_a = ctx.offsetMinutes) !== null && _a !== void 0 ? _a : 0) * 60000;
                dtObj = new bbnDtZoned(T.Instant.fromEpochMilliseconds(epochMs).toZonedDateTimeISO(T.Now.timeZoneId()));
            }
        }
        // ---------- 2) No timezone: decide which Plain* type ----------
        else if (isClsDateTime || (isClsAuto && (isValid || (hasDate && hasTime)))) {
            if (!hasFullDate && !isValid) {
                throw new Error('PlainDateTime requires year, month and day');
            }
            const d = new T.PlainDateTime(ctx.year, ctx.month, ctx.day, ctx.hour, ctx.minute, ctx.second, ctx.ms * 1000000);
            dtObj = new bbnDtDateTime(d);
        }
        else if (isClsDate || isClsYearMonth || isClsMonthDay || (isClsAuto && hasDate && !hasTime)) {
            if (isClsDate || (hasFullDate && isClsAuto)) {
                const d = new T.PlainDate(ctx.year, ctx.month, ctx.day);
                dtObj = new bbnDtDate(d);
            }
            else if (isClsYearMonth || (hasYearMonthOnly && isClsAuto)) {
                const d = new T.PlainYearMonth(ctx.year, ctx.month);
                dtObj = new bbnDtYearMonth(d);
            }
            else if (isClsMonthDay || (hasMonthDayOnly && isClsAuto)) {
                const d = new T.PlainMonthDay(ctx.month, ctx.day, 1972);
                dtObj = new bbnDtMonthDay(d);
            }
            else if (isClsAuto && ctx.hasYear) {
                const d = new T.PlainDate(ctx.year, 1, 1);
                dtObj = new bbnDtDate(d);
            }
            else {
                throw new Error('Not enough date components for a known Temporal type');
            }
        }
        else if (isClsTime || (isClsAuto && !hasDate && hasTime)) {
            const d = new T.PlainTime(ctx.hour, ctx.minute, ctx.second, ctx.ms * 1000000);
            dtObj = new bbnDtTime(d);
        }
        else {
            throw new Error('No date or time information found in input');
        }
        dtObj.setValid(isValid);
        return dtObj;
    }
    if (Array.isArray(format)) {
        let lastError = null;
        for (const fmt of format) {
            try {
                return parseWithFormat(fmt, cls);
            }
            catch (e) {
                lastError = e;
            }
        }
        throw lastError !== null && lastError !== void 0 ? lastError : new Error('No format matched');
    }
    return parseWithFormat(format, cls);
}
;
