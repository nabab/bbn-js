import extend from "../../fn/object/extend.js";
import numProperties from "../../fn/object/numProperties.js";

type CommonFormats = {
  date: Array<{
    pattern: string;
    sample: string;
    options: Intl.DateTimeFormatOptions;
  }>;
  time: Array<{
    pattern: string;
    sample: string;
    options: Intl.DateTimeFormatOptions;
  }>;
  datetime: Array<{
    pattern: string;
    sample: string;
    options: Intl.DateTimeFormatOptions;
  }>;
};

/**
 * Build a token pattern (YYYY, MM, DD, dddd, HH, II, SS, A, z) from Intl parts.
 * Uses Intl options to distinguish MMM vs MMMM, ddd vs dddd, etc.
 */
function partsToPattern(
  parts: any[],
  hourCycle: string | undefined,
  opts: Intl.DateTimeFormatOptions
): string {
  let pattern = '';

  const hasDayPeriod = parts.some(p => p.type === 'dayPeriod');
  const is12h = hasDayPeriod || hourCycle === 'h12' || hourCycle === 'h11';

  const hasWeekday = !!opts.weekday;
  const hasTextMonth =
    opts.month === 'short' || opts.month === 'long';

  // when we *request* year/month/day in "numeric" (not 2-digit, not short),
  // and all three are present, then we want D/M/YYYY in our mask,
  // in the locale's order, even if the sample shows "02" / "01".
  const requestedPureNumericYMD =
    opts.year === 'numeric' &&
    opts.month === 'numeric' &&
    opts.day === 'numeric' &&
    !hasWeekday &&
    !hasTextMonth;

  for (const p of parts) {
    switch (p.type) {
      case 'year': {
        // If you want YY vs YYYY disambiguation you can still
        // look at opts.year here; I’ll keep it simple:
        // numeric → YYYY, '2-digit' → YY
        if (opts.year === '2-digit') {
          pattern += 'YY';
        } else {
          pattern += 'YYYY';
        }
        break;
      }

      case 'month': {
        // Textual month first
        if (opts.month === 'short') {
          pattern += 'MMM';
          break;
        }
        if (opts.month === 'long') {
          pattern += 'MMMM';
          break;
        }

        // 👉 Pure numeric Y-M-D requested: always M
        if (requestedPureNumericYMD) {
          pattern += 'M';
          break;
        }

        // Other numeric month cases (year-month, month-day, or 2-digit)
        if (/^\d+$/.test(p.value)) {
          pattern += p.value.length === 2 ? 'MM' : 'M';
        } else {
          // should not happen, but be defensive
          pattern += p.value.length > 3 ? 'MMMM' : 'MMM';
        }
        break;
      }

      case 'day': {
        // 👉 Pure numeric Y-M-D requested: always D
        if (requestedPureNumericYMD) {
          pattern += 'D';
          break;
        }

        pattern += p.value.length === 2 ? 'DD' : 'D';
        break;
      }

      case 'weekday': {
        if (opts.weekday === 'short' || opts.weekday === 'narrow') {
          pattern += 'ddd';
        } else if (opts.weekday === 'long') {
          pattern += 'dddd';
        } else {
          pattern += p.value.length > 3 ? 'dddd' : 'ddd';
        }
        break;
      }

      case 'hour': {
        if (is12h) {
          pattern += p.value.length === 2 ? 'hh' : 'h';
        } else {
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
        if (!p.value) break;

        // Only wrap *text* literals in [ ... ], not separators like /, -, spaces, etc.
        const hasLetter = /[A-Za-zÀ-ÖØ-öø-ÿ]/.test(p.value);
        if (hasLetter) {
          const v = p.value.replace(/]/g, '\\]');
          pattern += `[${v}]`;
        } else {
          pattern += p.value;
        }
        break;
      }

      default:
        pattern += p.value;
        break;
    }
  }

  return pattern;
};


/**
 * Get a curated set of *common* date, time and datetime formats
 * for the given locale, without exploding into thousands of combos.
 *
 * Rules:
 *  - Date: only sensible combos (Y-M-D ± weekday, Y-M, M-D).
 *  - Time: hour / hour:minute / hour:minute:second (+ optional TZ).
 *  - Datetime: only full dates (Y-M-D ± weekday) combined with time.
 */
const getCommonFormatsForLocale = (lng?: string | string[]): CommonFormats => {
  if (!lng) {
    lng = [bbn.env.lang, ...navigator.languages];
  }

  const sample = new Date(Date.UTC(2000, 0, 2, 13, 45, 30));

  const date: CommonFormats['date'] = [];
  const time: CommonFormats['time'] = [];
  const datetime: CommonFormats['datetime'] = [];

  const seenDatePatterns = new Set<string>();
  const seenTimePatterns = new Set<string>();
  const seenDateTimePatterns = new Set<string>();

  // ---- 1) DATE: curated list of useful patterns ----
  // Includes your important one: { day: "numeric", month: "short", year: "numeric" }
  const dateOptionsList: Intl.DateTimeFormatOptions[] = [
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

  const fullDateOptions: Intl.DateTimeFormatOptions[] = []; // Y+M+D (± weekday)

  for (const opts of dateOptionsList) {
    const fmt = new Intl.DateTimeFormat(lng, opts);
    const parts = fmt.formatToParts(sample);
    const resolved = fmt.resolvedOptions() as Intl.ResolvedDateTimeFormatOptions & {
      hourCycle?: string;
    };
    const pattern = partsToPattern(parts, resolved.hourCycle, opts);
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
  const timeOptionsList: Intl.DateTimeFormatOptions[] = [
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
    const resolved = fmt.resolvedOptions() as Intl.ResolvedDateTimeFormatOptions & {
      hourCycle?: string;
    };
    const pattern = partsToPattern(parts, resolved.hourCycle, opts);

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
      const opts: Intl.DateTimeFormatOptions = { ...dOpts, ...tOpts };
      const fmt = new Intl.DateTimeFormat(lng, opts);
      const parts = fmt.formatToParts(sample);
      const resolved = fmt.resolvedOptions() as Intl.ResolvedDateTimeFormatOptions & {
        hourCycle?: string;
      };
      const pattern = partsToPattern(parts, resolved.hourCycle, opts);

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


const buildLocaleFromIntl = () => {

  if (Object.keys(bbn.dt.locales).length) {
    return;
  }

  const langs = [bbn.env.lang, ...navigator.languages];
  const fmtMonthLong  = new Intl.DateTimeFormat(langs, { month: 'long' });
  const fmtMonthShort = new Intl.DateTimeFormat(langs, { month: 'short' });
  const fmtWeekLong   = new Intl.DateTimeFormat(langs, { weekday: 'long' });
  const fmtWeekShort  = new Intl.DateTimeFormat(langs, { weekday: 'short' });
  const fmtShort = new Intl.DateTimeFormat(langs, {dateStyle: 'short', timeStyle: 'short'});
  const fmtLong = new Intl.DateTimeFormat(langs, {dateStyle: 'long', timeStyle: 'long'});
  const fmtNum = new Intl.DateTimeFormat(langs, {year: 'numeric', month: 'numeric', day: 'numeric'});
  const rtf = new Intl.RelativeTimeFormat(langs, { numeric: 'auto' });
  const locale = new Intl.Locale(langs[0]);


  // Create 12 dates for months (2020 chosen arbitrarily)
  const monthsLong  = [];
  const monthsShort = [];
  for (let m = 0; m < 12; m++) {
    const d = new Date(2020, m, 1);
    monthsLong.push(fmtMonthLong.format(d));
    monthsShort.push(fmtMonthShort.format(d));
  }

  // Create 7 dates for weekdays (starting from Sunday 2020-02-02 which *is* Sunday)
  // 2020-02-02 is Sunday → guarantees stable weekday list
  const baseSunday = new Date(2020, 1, 2); // YYYY, MM (0-based), DD

  const weekdaysLong  = [];
  const weekdaysShort = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date(baseSunday.getTime() + i * 86400000);
    weekdaysLong.push(fmtWeekLong.format(d));
    weekdaysShort.push(fmtWeekShort.format(d));
  }

  const {date, time, datetime} = getCommonFormatsForLocale(langs);
  const weekInfo = (locale as any).getWeekInfo ? (locale as any).getWeekInfo() : {firstDayOfWeek: 1};
  extend(bbn.dt.locales, {
    formatters: {
      short: fmtShort,
      long: fmtLong,
      numeric: fmtNum,
      relative: rtf
    },
    firstDayOfWeek: weekInfo.firstDay,
    monthsLong,
    monthsShort,
    weekdaysLong,
    weekdaysShort,
    locale,
    date,
    time,
    datetime
  });
};

export default buildLocaleFromIntl;
