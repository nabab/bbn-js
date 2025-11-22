import parse from './parse.js';
import { getCommonFormatsForLocale } from './buildLocaleFromIntl.js';
const isPureNumericDateFormat = (fmt) => {
    // Only Y/M/D tokens and literal separators, no time or AM/PM tokens
    if (/[HhI SAz]/.test(fmt)) {
        return false;
    }
    // Must have year and month and day tokens
    if (!/[Y]/.test(fmt) || !/[M]/.test(fmt) || !/[D]/.test(fmt)) {
        return false;
    }
    return true;
};
const makeRelaxedNumericFormat = (fmt) => {
    // Relax DD -> D and MM -> M, but don't touch other tokens
    return fmt.replace(/DD/g, 'D').replace(/MM/g, 'M');
};
/**
 * If the format is a pure numeric date like D/M/YYYY or DD/MM/YYYY,
 * and the input clearly uses 2-digit day and 2-digit month (22/11/2022),
 * upgrade to DD/MM/YYYY.
 */
const normalizeNumericDM = (fmt, input) => {
    // Only touch "pure numeric date" patterns: D/M/YYYY, DD-MM-YY, etc.
    // No time tokens, no text months, no weekdays.
    if (/[HhI SAzM]{2,}|[A-Za-z]/.test(fmt.replace(/[DMY]/g, ''))) {
        // If there are other letters than D/M/Y (like MMM, ddd), don't touch.
        // (We only want simple numeric dates)
        return fmt;
    }
    // Quick check: must contain D and M and Y
    if (!fmt.includes('D') || !fmt.includes('M') || !fmt.includes('Y')) {
        return fmt;
    }
    // Extract numeric chunks from the input: ["22", "11", "2022"] for "22/11/2022"
    const nums = input.split(/\D+/).filter(Boolean);
    if (nums.length < 3) {
        return fmt;
    }
    const [dayStr, monthStr] = nums;
    // Only upgrade if both day and month are exactly 2-digit
    if (dayStr.length === 2 && monthStr.length === 2) {
        // Upgrade first D-group to DD and first M-group to MM
        let out = fmt;
        out = out.replace(/D+/, 'DD');
        out = out.replace(/M+/, 'MM');
        return out;
    }
    return fmt;
};
export default function guessFormat(input, formats, lng) {
    const str = input.trim();
    if (!str) {
        return null;
    }
    const tryFormats = (fmts) => {
        for (const fmt of fmts) {
            // 1) Try strict format first
            try {
                parse(str, fmt);
                return normalizeNumericDM(fmt, str);
            }
            catch (_a) {
                // ignore, we'll maybe try a relaxed version
            }
            // 2) If it's a pure numeric date pattern, try a relaxed version too
            if (isPureNumericDateFormat(fmt)) {
                const relaxed = makeRelaxedNumericFormat(fmt);
                if (relaxed !== fmt) {
                    try {
                        parse(str, relaxed);
                        return relaxed;
                    }
                    catch (_b) {
                        // still nothing, move on
                    }
                }
            }
        }
        return null;
    };
    // if user provided formats, restrict to those
    if (formats) {
        const list = Array.isArray(formats) ? formats : [formats];
        return tryFormats(list);
    }
    // autodetect via Intl-derived formats
    const resolvedLocale = lng ||
        (typeof navigator !== 'undefined'
            ? navigator.language
            : Intl.DateTimeFormat().resolvedOptions().locale);
    const common = getCommonFormatsForLocale(resolvedLocale);
    const candidates = [];
    // prioritize datetime patterns first, then date, then time
    candidates.push(...common.datetime.map(f => f.pattern), ...common.date.map(f => f.pattern), ...common.time.map(f => f.pattern));
    const fmt = tryFormats(candidates);
    if (fmt) {
        return fmt;
    }
    // last resort: if you *really* want a "native" fallback, do it here
    // const d = new Date(str);
    // if (!Number.isNaN(d.getTime())) {
    //   return 'native';
    // }
    return null;
}
