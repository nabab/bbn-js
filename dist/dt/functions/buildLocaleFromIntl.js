import extend from "../../fn/object/extend.js";
import numProperties from "../../fn/object/numProperties.js";
/**
 * Build a token pattern (YYYY, MM, DD, dddd, HH, II, SS, A, z) from Intl parts.
 * Uses Intl options to distinguish MMM vs MMMM, ddd vs dddd, etc.
 */
function partsToPattern(parts, resolved, requestedOpts) {
    let pattern = '';
    const hourCycle = resolved.hourCycle;
    const hasDayPeriod = parts.some(p => p.type === 'dayPeriod');
    const is12h = hasDayPeriod || hourCycle === 'h12' || hourCycle === 'h11';
    // ALL NUMERIC (not 2-digit): year, month and day resolved as "numeric"
    const allNumericNonPadded = resolved.year === 'numeric' &&
        resolved.month === 'numeric' &&
        resolved.day === 'numeric';
    for (const p of parts) {
        switch (p.type) {
            case 'year': {
                // Use YY only if locale actually resolved 2-digit
                if (resolved.year === '2-digit') {
                    pattern += 'YY';
                }
                else {
                    pattern += 'YYYY';
                }
                break;
            }
            case 'month': {
                // textual month
                if (requestedOpts.month === 'short' || requestedOpts.month === 'long') {
                    pattern += requestedOpts.month === 'long' ? 'MMMM' : 'MMM';
                    break;
                }
                // ALL NUMERIC and non-padded → always use M
                if (allNumericNonPadded) {
                    pattern += 'M';
                    break;
                }
                // numeric / 2-digit generic case
                if (/^\d+$/.test(p.value)) {
                    pattern += p.value.length === 2 ? 'MM' : 'M';
                }
                else {
                    // fallback (shouldn't really happen without text month)
                    pattern += p.value.length > 3 ? 'MMMM' : 'MMM';
                }
                break;
            }
            case 'day': {
                // ALL NUMERIC and non-padded → always use D
                if (allNumericNonPadded) {
                    pattern += 'D';
                    break;
                }
                pattern += p.value.length === 2 ? 'DD' : 'D';
                break;
            }
            case 'weekday': {
                if (requestedOpts.weekday === 'short' || requestedOpts.weekday === 'narrow') {
                    pattern += 'ddd';
                }
                else if (requestedOpts.weekday === 'long') {
                    pattern += 'dddd';
                }
                else {
                    pattern += p.value.length > 3 ? 'dddd' : 'ddd';
                }
                break;
            }
            case 'hour': {
                if (is12h) {
                    pattern += p.value.length === 2 ? 'hh' : 'h';
                }
                else {
                    pattern += p.value.length === 2 ? 'HH' : 'H';
                }
                break;
            }
            case 'minute':
                pattern += 'II';
                break;
            case 'second':
                pattern += 'SS';
                break;
            case 'dayPeriod':
                pattern += 'A';
                break;
            case 'timeZoneName':
                pattern += 'z';
                break;
            case 'literal': {
                // Wrap literals in [ ... ] so your parser won't confuse them with tokens
                if (p.value.length) {
                    if (![' ', ',', '/', '-', ':', '.'].includes(p.value)) {
                        const v = p.value.replace(/]/g, '\\]');
                        pattern += `[${v}]`;
                    }
                    else {
                        pattern += p.value;
                    }
                }
                break;
            }
            default:
                pattern += p.value;
                break;
        }
    }
    return pattern;
}
/**
 * Get a curated set of *common* date, time and datetime formats
 * for the given locale, without exploding into thousands of combos.
 *
 * Rules:
 *  - Date: only sensible combos (Y-M-D ± weekday, Y-M, M-D).
 *  - Time: hour / hour:minute / hour:minute:second (+ optional TZ).
 *  - Datetime: only full dates (Y-M-D ± weekday) combined with time.
 */
export function getCommonFormatsForLocale(lng) {
    const sample = new Date(Date.UTC(2000, 0, 2, 13, 45, 30));
    const date = [];
    const time = [];
    const datetime = [];
    const seenDatePatterns = new Set();
    const seenTimePatterns = new Set();
    const seenDateTimePatterns = new Set();
    // ---- 1) DATE: curated list of useful patterns ----
    // Includes your important one: { day: "numeric", month: "short", year: "numeric" }
    const dateOptionsList = [
        // Full dates
        { year: 'numeric', month: '2-digit', day: '2-digit' },
        { year: 'numeric', month: 'numeric', day: 'numeric' },
        { year: 'numeric', month: 'short', day: 'numeric' },
        { year: 'numeric', month: 'long', day: 'numeric' },
        // Full dates with weekday
        { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' },
        { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
        // Year–month
        { year: 'numeric', month: 'numeric' },
        { year: 'numeric', month: '2-digit' },
        { year: 'numeric', month: 'short' },
        { year: 'numeric', month: 'long' },
        // Month–day (no year)
        { month: 'numeric', day: 'numeric' },
        { month: '2-digit', day: '2-digit' },
        { month: 'short', day: 'numeric' }, // ← e.g. "22 janv."
        { month: 'long', day: 'numeric' }
    ];
    const fullDateOptions = []; // Y+M+D (± weekday)
    for (const opts of dateOptionsList) {
        const fmt = new Intl.DateTimeFormat(lng, opts);
        const parts = fmt.formatToParts(sample);
        const resolved = fmt.resolvedOptions();
        const pattern = partsToPattern(parts, resolved, opts);
        if (!seenDatePatterns.has(pattern)) {
            seenDatePatterns.add(pattern);
            date.push({
                pattern,
                sample: fmt.format(sample),
                options: opts
            });
        }
        // keep track of "full dates" (year+month+day) for datetime
        if (opts.year && opts.month && opts.day) {
            fullDateOptions.push(opts);
        }
    }
    // ---- 2) TIME: curated, valid combos (always have hour, then minute/second) ----
    const timeOptionsList = [
        { hour: 'numeric' },
        { hour: '2-digit', minute: '2-digit' },
        { hour: '2-digit', minute: '2-digit', second: '2-digit' },
        { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' },
        { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' },
        { hour: '2-digit', minute: '2-digit', timeZoneName: 'long' }
    ];
    for (const opts of timeOptionsList) {
        const fmt = new Intl.DateTimeFormat(lng, opts);
        const parts = fmt.formatToParts(sample);
        const resolved = fmt.resolvedOptions();
        const pattern = partsToPattern(parts, resolved, opts);
        if (!seenTimePatterns.has(pattern)) {
            seenTimePatterns.add(pattern);
            time.push({
                pattern,
                sample: fmt.format(sample),
                options: opts
            });
        }
    }
    // ---- 3) DATETIME: only full dates (Y-M-D ± weekday) × time
    for (const dOpts of fullDateOptions) {
        for (const tOpts of timeOptionsList) {
            const opts = Object.assign(Object.assign({}, dOpts), tOpts);
            const fmt = new Intl.DateTimeFormat(lng, opts);
            const parts = fmt.formatToParts(sample);
            const resolved = fmt.resolvedOptions();
            const pattern = partsToPattern(parts, resolved, opts);
            if (!seenDateTimePatterns.has(pattern)) {
                seenDateTimePatterns.add(pattern);
                datetime.push({
                    pattern,
                    sample: fmt.format(sample),
                    options: opts
                });
            }
        }
    }
    return { date, time, datetime };
}
export default function buildLocaleFromIntl() {
    if (numProperties(bbn.dt.locales)) {
        return;
    }
    const langs = [bbn.env.lang, ...navigator.languages];
    const fmtMonthLong = new Intl.DateTimeFormat(langs, { month: 'long' });
    const fmtMonthShort = new Intl.DateTimeFormat(langs, { month: 'short' });
    const fmtWeekLong = new Intl.DateTimeFormat(langs, { weekday: 'long' });
    const fmtWeekShort = new Intl.DateTimeFormat(langs, { weekday: 'short' });
    // Create 12 dates for months (2020 chosen arbitrarily)
    const monthsLong = [];
    const monthsShort = [];
    for (let m = 0; m < 12; m++) {
        const d = new Date(2020, m, 1);
        monthsLong.push(fmtMonthLong.format(d));
        monthsShort.push(fmtMonthShort.format(d));
    }
    // Create 7 dates for weekdays (starting from Sunday 2020-02-02 which *is* Sunday)
    // 2020-02-02 is Sunday → guarantees stable weekday list
    const baseSunday = new Date(2020, 1, 2); // YYYY, MM (0-based), DD
    const weekdaysLong = [];
    const weekdaysShort = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(baseSunday.getTime() + i * 86400000);
        weekdaysLong.push(fmtWeekLong.format(d));
        weekdaysShort.push(fmtWeekShort.format(d));
    }
    const { date, time, datetime } = getCommonFormatsForLocale(langs);
    extend(bbn.dt.locales, {
        monthsLong,
        monthsShort,
        weekdaysLong,
        weekdaysShort,
        date,
        time,
        datetime
    });
}
;
