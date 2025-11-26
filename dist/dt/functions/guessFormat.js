import parse from './parse.js';
import buildLocaleFromIntl from './buildLocaleFromIntl.js';
// Common MySQL & native JS string formats – tried first in guessFormat
const MYSQL_AND_NATIVE_FORMATS = [
    // --- MySQL / MariaDB classic ---
    // Date
    // Date + time
    'YYYY-MM-DD HH:II:SS.ms',
    'YYYY-MM-DD HH:II:SS',
    'YYYY-MM-DD HH:II:SS[ GMT]Z',
    'YYYY-MM-DD HH:II',
    // Time only
    // --- ISO 8601 / JS toISOString() ---
    // 2025-11-22T14:30:00.123Z
    'YYYY-MM-DDTHH:II:SS.msZ',
    // 2025-11-22T14:30:00Z
    'YYYY-MM-DDTHH:II:SSZ',
    // 2025-11-22T14:30:00
    'YYYY-MM-DDTHH:II:SS',
    // 2025-11-22T14:30
    'YYYY-MM-DDTHH:II',
    // --- JS toUTCString() ---
    // Tue, 29 Oct 2024 14:30:00 GMT
    'ddd[, ]DD MMM YYYY HH:II:SS[ GMT]',
    // --- JS toString() (without the parenthesized TZ name) ---
    // Tue Oct 29 2024 14:30:00 GMT+0200
    'ddd MMM DD YYYY HH:II:SS[ GMT]Z',
    // Tue Oct 29 2024 14:30:00
    'ddd MMM DD YYYY HH:II:SS',
    'D MMM',
    'D MMMM',
    'D/M',
    'YYYY-MM-DD',
    'YYYY-MM',
    'HH:II:SS',
    'HH:II',
];
export default function guessFormat(input, formats, lng) {
    const str = input.trim();
    if (!str) {
        return null;
    }
    buildLocaleFromIntl();
    const tryFormats = (fmts) => {
        for (const fmt of fmts) {
            // 1) Try strict format first
            try {
                parse(str, fmt);
                return fmt;
            }
            catch (_a) {
                // ignore, we'll maybe try a relaxed version
            }
        }
        return null;
    };
    // if user provided formats, restrict to those
    if (formats) {
        const list = Array.isArray(formats) ? formats : [formats];
        return tryFormats(list);
    }
    // Avoid trivial duplicates
    const seen = new Set();
    const mysqlNativeCandidates = MYSQL_AND_NATIVE_FORMATS.filter(fmt => {
        if (seen.has(fmt))
            return false;
        seen.add(fmt);
        return true;
    });
    const localeCandidates = [
        ...bbn.dt.locales.datetime.map(f => f.pattern),
        ...bbn.dt.locales.date.map(f => f.pattern),
        ...bbn.dt.locales.time.map(f => f.pattern)
    ].filter(fmt => {
        if (seen.has(fmt))
            return false;
        seen.add(fmt);
        return true;
    });
    // MySQL & native JS patterns are checked FIRST
    const candidates = [
        ...mysqlNativeCandidates,
        ...localeCandidates
    ];
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
