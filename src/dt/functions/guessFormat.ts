import parse from './parse.js';
import { getCommonFormatsForLocale, buildLocaleFromIntl } from './buildLocaleFromIntl.js';

// Common MySQL & native JS string formats – tried first in guessFormat
const MYSQL_AND_NATIVE_FORMATS: string[] = [
  // --- MySQL / MariaDB classic ---
  // Date
  'YYYY-MM-DD',
  // Date + time
  'YYYY-MM-DD HH:II:SS.ms',
  'YYYY-MM-DD HH:II:SS',
  'YYYY-MM-DD HH:II',
  // Time only
  'HH:II:SS',
  'HH:II',

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
  'ddd MMM DD YYYY HH:II:SS'
];

export default function guessFormat(
  input: string,
  formats?: string | string[],
  lng?: string | string[]
): string | null {
  const str = input.trim();
  if (!str) {
    return null;
  }

  buildLocaleFromIntl();
  const tryFormats = (fmts: string[]): string | null => {
    for (const fmt of fmts) {
      // 1) Try strict format first
      try {
        parse(str, fmt);
        return fmt;
      } catch {
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

  // autodetect via Intl-derived formats
  const common = getCommonFormatsForLocale(lng);

  // Avoid trivial duplicates
  const seen = new Set<string>();

  const mysqlNativeCandidates = MYSQL_AND_NATIVE_FORMATS.filter(fmt => {
    if (seen.has(fmt)) return false;
    seen.add(fmt);
    return true;
  });

  const localeCandidates = [
    ...common.datetime.map(f => f.pattern),
    ...common.date.map(f => f.pattern),
    ...common.time.map(f => f.pattern)
  ].filter(fmt => {
    if (seen.has(fmt)) return false;
    seen.add(fmt);
    return true;
  });

  // MySQL & native JS patterns are checked FIRST
  const candidates: string[] = [
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
