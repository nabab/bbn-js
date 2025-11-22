import buildLocaleFromIntl from './buildLocaleFromIntl.js';
import parse from './parse.js';
/**
 * Guess a date format string for the given input.
 *
 * - If `formats` is provided, it will try those formats in order and return
 *   the first one that successfully parses.
 * - If `formats` is not provided, it will try a set of built-in common formats
 *   (MySQL, ISO/JS, EU/US, full-text using bbn.dt.locales).
 * - Returns `null` if no format matches.
 *
 * NOTE: It relies on `this.parse(input, format)` NOT throwing when the format is correct.
 */
export default function guessFormat(input, formats) {
    var _a;
    const str = input.trim();
    if (!str) {
        return null;
    }
    const tryFormats = (formatsToTry) => {
        for (const fmt of formatsToTry) {
            try {
                // We only care that it parses without throwing
                parse(str, fmt);
                return fmt;
            }
            catch (_a) {
                // ignore
            }
        }
        return null;
    };
    // If user provided formats, restrict to those only
    if (formats) {
        const list = Array.isArray(formats) ? formats : [formats];
        return tryFormats(list);
    }
    // -------- Autodetection mode (no user-provided formats) --------
    const lower = str.toLowerCase();
    // Access locales for full-text formats (months / weekdays)
    buildLocaleFromIntl();
    const loc = ((_a = bbn === null || bbn === void 0 ? void 0 : bbn.dt) === null || _a === void 0 ? void 0 : _a.locales) || {};
    const monthsLong = loc.monthsLong || [];
    const monthsShort = loc.monthsShort || [];
    const weekdaysLong = loc.weekdaysLong || [];
    const weekdaysShort = loc.weekdaysShort || [];
    const timeFormats = loc.time || [];
    const dateFormats = loc.date || [];
    const datetimeFormats = loc.datetime || [];
    const hasMonthName = monthsLong.some(m => lower.includes(m.toLowerCase())) ||
        monthsShort.some(m => lower.includes(m.toLowerCase()));
    const hasWeekdayName = weekdaysLong.some(w => lower.includes(w.toLowerCase())) ||
        weekdaysShort.some(w => lower.includes(w.toLowerCase()));
    const hasLetterTZ = /gmt|utc|[+-]\d{2}:?\d{2}|z$/i.test(str);
    const looksISO = /^\d{4}-\d{2}-\d{2}t\d{2}:\d{2}:\d{2}(\.\d+)?(z|[+\-]\d{2}:?\d{2})?$/i.test(str);
    const looksMySQLDateTime = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(:\d{2}(\.\d+)?)?$/i.test(str);
    const looksMySQLDate = /^\d{4}-\d{2}-\d{2}$/.test(str);
    const looksTimeOnly = /^\d{2}:\d{2}(:\d{2}(\.\d+)?)?$/.test(str);
    // Start building candidate formats (most specific first)
    const candidates = [
        ...datetimeFormats.map(f => f.pattern),
    ];
    // --- Full-text / locale-based formats ---
    if (hasMonthName || hasWeekdayName) {
        // e.g. "Monday 15 January 2024"
        candidates.push('dddd, DD MMMM YYYY HH:II:SSZ', 'dddd, DD MMMM YYYY HH:II:SS', 'dddd, DD MMMM YYYY', 'DD MMMM YYYY HH:II:SSZ', 'DD MMMM YYYY HH:II:SS', 'DD MMMM YYYY', 'ddd, DD MMM YYYY HH:II:SSZ', 'ddd, DD MMM YYYY HH:II:SS', 'ddd, DD MMM YYYY');
        // JS Date.toString() / toUTCString()-like
        // "Tue Oct 29 2024 14:30:00 GMT+0200"
        candidates.push('ddd MMM DD YYYY HH:II:SSZ', 'ddd, DD MMM YYYY HH:II:SS z');
    }
    // --- ISO / JS-like default formats ---
    if (looksISO || str.includes('T')) {
        candidates.push('YYYY-MM-DDTHH:II:SS.msZ', 'YYYY-MM-DDTHH:II:SSZ', 'YYYY-MM-DDTHH:II:SS.ms', 'YYYY-MM-DDTHH:II:SS', 'YYYY-MM-DDTHH:II:Z', 'YYYY-MM-DDTHH:II');
    }
    // --- MySQL classic formats ---
    if (looksMySQLDateTime) {
        candidates.push('YYYY-MM-DD HH:II:SS.msZ', 'YYYY-MM-DD HH:II:SSZ', 'YYYY-MM-DD HH:II:SS.ms', 'YYYY-MM-DD HH:II:SS', 'YYYY-MM-DD HH:II');
    }
    if (looksMySQLDate) {
        candidates.push('YYYY-MM-DD');
    }
    // --- Time-only strings ---
    if (looksTimeOnly) {
        candidates.push(...timeFormats.map(f => f.pattern), 'HH:II:SS.msZ', 'HH:II:SS.ms', 'HH:II:SS', 'HH:II');
    }
    // --- Common EU / US formats ---
    candidates.push(...dateFormats.map(f => f.pattern), 
    // European style
    'DD/MM/YYYY HH:II:SSZ', 'DD/MM/YYYY HH:II:SS', 'DD/MM/YYYY HH:II', 'DD/MM/YYYY', 'DD-MM-YYYY HH:II:SSZ', 'DD-MM-YYYY HH:II:SS', 'DD-MM-YYYY HH:II', 'DD-MM-YYYY', 
    // US style
    'MM/DD/YYYY HH:II:SSZ', 'MM/DD/YYYY HH:II:SS', 'MM/DD/YYYY HH:II', 'MM/DD/YYYY', 
    // Dot-separated
    'YYYY.MM.DD HH:II:SSZ', 'YYYY.MM.DD HH:II:SS', 'YYYY.MM.DD', 
    // MySQL-ish (if we haven't already pushed them by detection)
    'YYYY-MM-DD HH:II:SSZ', 'YYYY-MM-DD HH:II:SS', 'YYYY-MM-DD HH:II', 'YYYY-MM-DD');
    // If we see clear timezone indicators, prioritize formats with Z / z
    if (hasLetterTZ) {
        const withTZ = candidates.filter(f => f.includes('Z') || f.includes('z'));
        const withoutTZ = candidates.filter(f => !f.includes('Z') && !f.includes('z'));
        const reordered = [...withTZ, ...withoutTZ];
        const fmt = tryFormats(reordered);
        if (fmt) {
            return fmt;
        }
    }
    else {
        const fmt = tryFormats(candidates);
        if (fmt) {
            return fmt;
        }
    }
    // --- Last resort: native JS parsing ---
    const jsDate = new Date(str);
    if (!isNaN(jsDate.getTime())) {
        // You can treat "native" as a special keyword meaning:
        // "use Date/Temporal to parse directly".
        return 'native';
    }
    return null;
}
