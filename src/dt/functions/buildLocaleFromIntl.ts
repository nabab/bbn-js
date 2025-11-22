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
 */
function partsToPattern(
  parts: Intl.DateTimeFormatPart[],
  hourCycle?: string
): string {
  let pattern = '';

  const hasDayPeriod = parts.some(p => p.type === 'dayPeriod');
  const is12h = hasDayPeriod || hourCycle === 'h12' || hourCycle === 'h11';

  for (const p of parts) {
    switch (p.type) {
      case 'year':
        pattern += 'YYYY';
        break;

      case 'month':
        if (/^\d+$/.test(p.value)) {
          pattern += p.value.length === 2 ? 'MM' : 'M';
        } else {
          pattern += p.value.length > 3 ? 'MMMM' : 'MMM';
        }
        break;

      case 'day':
        pattern += p.value.length === 2 ? 'DD' : 'D';
        break;

      case 'weekday':
        pattern += p.value.length > 3 ? 'dddd' : 'ddd';
        break;

      case 'hour':
        if (is12h) {
          pattern += p.value.length === 2 ? 'hh' : 'h';
        } else {
          pattern += p.value.length === 2 ? 'HH' : 'H';
        }
        break;

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

      case 'literal':
      default:
        pattern += p.value;
        break;
    }
  }

  return pattern;
}

/**
 * Enumerate common date, time and datetime formats for a locale, by iterating
 * over combinations of:
 *   - weekday / year / month / day
 *   - hour / minute / second / timeZoneName
 *
 * No dateStyle/timeStyle is used, so we can safely combine date + time.
 */
export function getCommonFormatsForLocale(lng: string | string[]): CommonFormats {
  // Fixed sample: 2 Jan 2000, 13:45:30 UTC
  const sample = new Date(Date.UTC(2000, 0, 2, 13, 45, 30));

  const date: CommonFormats['date'] = [];
  const time: CommonFormats['time'] = [];
  const datetime: CommonFormats['datetime'] = [];

  const seenDatePatterns = new Set<string>();
  const seenTimePatterns = new Set<string>();
  const seenDateTimePatterns = new Set<string>();

  // ---- 1) DATE formats: combinations of weekday/year/month/day ----

  const weekdayOptions: Array<undefined | 'short' | 'long'> = [
    undefined,
    'short',
    'long'
  ];
  const yearOptions: Array<undefined | 'numeric' | '2-digit'> = [
    undefined,
    'numeric',
    '2-digit'
  ];
  const monthOptions: Array<undefined | 'numeric' | '2-digit' | 'short' | 'long'> =
    [undefined, 'numeric', '2-digit', 'short', 'long'];
  const dayOptions: Array<undefined | 'numeric' | '2-digit'> = [
    undefined,
    'numeric',
    '2-digit'
  ];

  type DateOpts = Pick<
    Intl.DateTimeFormatOptions,
    'weekday' | 'year' | 'month' | 'day'
  >;
  const dateOptionsList: DateOpts[] = [];

  for (const weekday of weekdayOptions) {
    for (const year of yearOptions) {
      for (const month of monthOptions) {
        for (const day of dayOptions) {
          // Skip combos with no actual date fields
          if (!year && !month && !day) {
            continue;
          }

          const options: DateOpts = {};
          if (weekday) options.weekday = weekday;
          if (year) options.year = year;
          if (month) options.month = month;
          if (day) options.day = day;

          const fmt = new Intl.DateTimeFormat(lng, options);
          const parts = fmt.formatToParts(sample);
          const resolved: any = fmt.resolvedOptions();
          const pattern = partsToPattern(parts, resolved.hourCycle);

          if (!seenDatePatterns.has(pattern)) {
            seenDatePatterns.add(pattern);
            dateOptionsList.push(options);
            date.push({
              pattern,
              sample: fmt.format(sample),
              options
            });
          }
        }
      }
    }
  }

  // ---- 2) TIME formats: combinations of hour/minute/second/timeZoneName ----

  type TimeOpts = Pick<
    Intl.DateTimeFormatOptions,
    'hour' | 'minute' | 'second' | 'timeZoneName'
  >;

  const hourOptions: Array<'numeric' | '2-digit'> = ['numeric', '2-digit'];
  const minuteOptions: Array<undefined | 'numeric' | '2-digit'> = [
    undefined,
    'numeric',
    '2-digit'
  ];
  const secondOptions: Array<undefined | 'numeric' | '2-digit'> = [
    undefined,
    'numeric',
    '2-digit'
  ];
  const tzNameOptions: Array<undefined | 'short' | 'long'> = [
    undefined,
    'short',
    'long'
  ];

  const timeOptionsList: TimeOpts[] = [];

  for (const hour of hourOptions) {
    for (const minute of minuteOptions) {
      for (const second of secondOptions) {
        for (const tzName of tzNameOptions) {
          // Need at least hour to be a "time"
          if (!hour) {
            continue;
          }

          const options: TimeOpts = { hour };
          if (minute) options.minute = minute;
          if (second) options.second = second;
          if (tzName) options.timeZoneName = tzName;

          const fmt = new Intl.DateTimeFormat(lng, options);
          const parts = fmt.formatToParts(sample);
          const resolved: any = fmt.resolvedOptions();
          const pattern = partsToPattern(parts, resolved.hourCycle);

          if (!seenTimePatterns.has(pattern)) {
            seenTimePatterns.add(pattern);
            timeOptionsList.push(options);
            time.push({
              pattern,
              sample: fmt.format(sample),
              options
            });
          }
        }
      }
    }
  }

  // ---- 3) DATETIME formats: each dateOption × each timeOption ----

  for (const dateOpts of dateOptionsList) {
    for (const timeOpts of timeOptionsList) {
      const options: Intl.DateTimeFormatOptions = {
        ...dateOpts,
        ...timeOpts
      };

      const fmt = new Intl.DateTimeFormat(lng, options);
      const parts = fmt.formatToParts(sample);
      const resolved: any = fmt.resolvedOptions();
      const pattern = partsToPattern(parts, resolved.hourCycle);

      if (!seenDateTimePatterns.has(pattern)) {
        seenDateTimePatterns.add(pattern);
        datetime.push({
          pattern,
          sample: fmt.format(sample),
          options
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
  const fmtMonthLong  = new Intl.DateTimeFormat(langs, { month: 'long' });
  const fmtMonthShort = new Intl.DateTimeFormat(langs, { month: 'short' });
  const fmtWeekLong   = new Intl.DateTimeFormat(langs, { weekday: 'long' });
  const fmtWeekShort  = new Intl.DateTimeFormat(langs, { weekday: 'short' });

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
  extend(bbn.dt.locales, {
    monthsLong,
    monthsShort,
    weekdaysLong,
    weekdaysShort,
    date,
    time,
    datetime
  });
};
