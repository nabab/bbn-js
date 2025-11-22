import parse from './parse.js';
import { getCommonFormatsForLocale } from './buildLocaleFromIntl.js';

const isPureNumericDateFormat = (fmt: string): boolean => {
  // Only Y/M/D tokens and literal separators, no time or AM/PM tokens
  if (/[HhI SAz]/.test(fmt)) {
    return false;
  }
  // Must have year and month and day tokens
  if (!/[Y]/.test(fmt) || !/[M]/.test(fmt) || !/[D]/.test(fmt)) {
    return false;
  }
  return true;
}

const makeRelaxedNumericFormat = (fmt: string): string => {
  // Relax DD -> D and MM -> M, but don't touch other tokens
  return fmt.replace(/DD/g, 'D').replace(/MM/g, 'M');
}

export default function guessFormat(
  input: string,
  formats?: string | string[],
  lng?: string
): string | null {
  const str = input.trim();
  if (!str) {
    return null;
  }

  const tryFormats = (fmts: string[]): string | null => {
    for (const fmt of fmts) {
      // 1) Try strict format first
      try {
        parse(str, fmt);
        return fmt;
      } catch {
        // ignore, we'll maybe try a relaxed version
      }

      // 2) If it's a pure numeric date pattern, try a relaxed version too
      if (isPureNumericDateFormat(fmt)) {
        const relaxed = makeRelaxedNumericFormat(fmt);
        if (relaxed !== fmt) {
          try {
            parse(str, relaxed);
            return relaxed;
          } catch {
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
  const resolvedLocale =
    lng ||
    (typeof navigator !== 'undefined'
      ? navigator.language
      : Intl.DateTimeFormat().resolvedOptions().locale);

  const common = getCommonFormatsForLocale(resolvedLocale);

  const candidates: string[] = [];

  // prioritize datetime patterns first, then date, then time
  candidates.push(
    ...common.datetime.map(f => f.pattern),
    ...common.date.map(f => f.pattern),
    ...common.time.map(f => f.pattern)
  );

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
