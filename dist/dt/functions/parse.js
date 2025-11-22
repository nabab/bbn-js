import locales from '../vars/locales.js';
export default function parse(input, format, locale) {
    var _a, _b, _c, _d;
    const TemporalAny = globalThis.Temporal;
    if (!TemporalAny) {
        throw new Error('Temporal API is required (load @js-temporal/polyfill)');
    }
    const T = TemporalAny;
    const loc = {
        monthsLong: (_a = locale === null || locale === void 0 ? void 0 : locale.monthsLong) !== null && _a !== void 0 ? _a : locales.monthsLong,
        monthsShort: (_b = locale === null || locale === void 0 ? void 0 : locale.monthsShort) !== null && _b !== void 0 ? _b : locales.monthsShort,
        weekdaysLong: (_c = locale === null || locale === void 0 ? void 0 : locale.weekdaysLong) !== null && _c !== void 0 ? _c : locales.weekdaysLong,
        weekdaysShort: (_d = locale === null || locale === void 0 ? void 0 : locale.weekdaysShort) !== null && _d !== void 0 ? _d : locales.weekdaysShort
    };
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
                const idx = loc.monthsLong
                    .findIndex((m) => m.toLowerCase() === v.toLowerCase());
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
                const idx = loc.monthsShort
                    .findIndex((m) => m.toLowerCase() === v.toLowerCase());
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
                // NOTE: in your original code this wrote to month, but name suggests minutes.
                // I'm keeping original behavior, but you might want to correct this.
                ctx.month = n;
                ctx.hasMonth = true;
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
                const idx = loc.weekdaysLong
                    .findIndex((w) => w.toLowerCase() === v.toLowerCase());
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
                const idx = loc.weekdaysShort
                    .findIndex((w) => w.toLowerCase() === v.toLowerCase());
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
        // Hours
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
            token: 'h', // PHP-like 24h alias here
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
        // Timezone offset (Z)
        {
            token: 'Z',
            regex: '(?:Z|[+-]\\d{2}:?\\d{2})',
            apply: (v, ctx) => {
                if (v === 'Z' || v === 'z') {
                    ctx.offsetMinutes = 0;
                    return;
                }
                const sign = v[0] === '-' ? -1 : 1;
                const rest = v.slice(1); // "02:00" or "0500"
                let hh;
                let mm;
                if (rest.includes(':')) {
                    const [h, m] = rest.split(':');
                    hh = parseInt(h, 10);
                    mm = parseInt(m, 10);
                }
                else {
                    hh = parseInt(rest.slice(0, 2), 10);
                    mm = parseInt(rest.slice(2, 4), 10);
                }
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
        }
    ];
    function parseWithFormat(fmt) {
        var _a;
        const ctx = {
            year: 1970,
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
        const tokenSpecs = makeTokenSpecs();
        const tokensByLength = [...tokenSpecs].sort((a, b) => b.token.length - a.token.length);
        let pattern = '';
        const applyFns = [];
        let i = 0;
        while (i < fmt.length) {
            let matchedToken = null;
            for (const spec of tokensByLength) {
                if (fmt.startsWith(spec.token, i)) {
                    matchedToken = spec;
                    break;
                }
            }
            if (matchedToken) {
                pattern += `(${matchedToken.regex})`;
                if (matchedToken.apply) {
                    applyFns.push(value => matchedToken.apply(value, ctx));
                }
                else {
                    applyFns.push(() => { });
                }
                i += matchedToken.token.length;
            }
            else {
                pattern += escapeRegex(fmt[i]);
                i += 1;
            }
        }
        const fullRegex = new RegExp('^' + pattern + '$');
        const match = fullRegex.exec(input);
        if (!match) {
            throw new Error(`Date string "${input}" does not match format "${fmt}"`);
        }
        for (let idx = 1; idx < match.length; idx++) {
            const value = match[idx];
            const apply = applyFns[idx - 1];
            if (value != null && apply) {
                apply(value);
            }
        }
        const hasDate = ctx.hasYear || ctx.hasMonth || ctx.hasDay;
        const hasFullDate = ctx.hasYear && ctx.hasMonth && ctx.hasDay;
        const hasYearMonthOnly = ctx.hasYear && ctx.hasMonth && !ctx.hasDay;
        const hasMonthDayOnly = !ctx.hasYear && ctx.hasMonth && ctx.hasDay;
        const hasTime = ctx.hasHour || ctx.hasMinute || ctx.hasSecond || ctx.hasMs;
        const hasZone = ctx.timeZone != null || ctx.offsetMinutes != null;
        // ---------- 1) If timezone (Z or z) → Instant ----------
        if (hasZone) {
            // Fill date/time with whatever we have + defaults (1970-01-01 etc.)
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
                return zdt.toInstant();
            }
            // offsetMinutes only
            const utcMs = Date.UTC(ctx.year, ctx.month - 1, ctx.day, ctx.hour, ctx.minute, ctx.second, ctx.ms);
            const epochMs = utcMs - ((_a = ctx.offsetMinutes) !== null && _a !== void 0 ? _a : 0) * 60000;
            return T.Instant.fromEpochMilliseconds(epochMs);
        }
        // ---------- 2) No timezone: decide which Plain* type ----------
        if (hasDate && hasTime) {
            // Full DateTime (even if some date fields defaulted; we require full date)
            if (!hasFullDate) {
                throw new Error('PlainDateTime requires year, month and day');
            }
            return new T.PlainDateTime(ctx.year, ctx.month, ctx.day, ctx.hour, ctx.minute, ctx.second, ctx.ms * 1000000);
        }
        if (hasDate && !hasTime) {
            if (hasFullDate) {
                return new T.PlainDate(ctx.year, ctx.month, ctx.day);
            }
            if (hasYearMonthOnly) {
                return new T.PlainYearMonth(ctx.year, ctx.month);
            }
            if (hasMonthDayOnly) {
                // Reference year: 1972 is often used (leap year)
                return new T.PlainMonthDay(ctx.month, ctx.day, 1972);
            }
            // e.g. only year → ambiguous, you can decide another behavior if you want
            throw new Error('Not enough date components for a known Temporal type');
        }
        if (!hasDate && hasTime) {
            // PlainTime
            return new T.PlainTime(ctx.hour, ctx.minute, ctx.second, ctx.ms * 1000000);
        }
        throw new Error('No date or time information found in input');
    }
    // ---------- Handle single format or array of formats ----------
    if (Array.isArray(format)) {
        let lastError = null;
        for (const fmt of format) {
            try {
                return parseWithFormat(fmt);
            }
            catch (e) {
                lastError = e;
            }
        }
        throw lastError !== null && lastError !== void 0 ? lastError : new Error('No format matched');
    }
    return parseWithFormat(format);
}
;
