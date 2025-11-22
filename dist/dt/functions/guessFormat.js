import parse from './parse.js';
import { getCommonFormatsForLocale } from './buildLocaleFromIntl.js';
export default function guessFormat(input, formats, lng) {
    const str = input.trim();
    if (!str) {
        return null;
    }
    // helper: try a list of formats with your parse()
    const tryFormats = (fmts) => {
        for (const fmt of fmts) {
            try {
                parse(str, fmt); // will throw if not matching
                return fmt;
            }
            catch (_a) {
                // ignore and continue
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
