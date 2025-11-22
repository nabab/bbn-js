import extend from "../../fn/object/extend.js";
import numProperties from "../../fn/object/numProperties.js";

type Style = 'full' | 'long' | 'medium' | 'short';

type CommonFormats = {
  date: Array<{
    style: Style;
    pattern: string;          // e.g. "DD/MM/YYYY"
    sample: string;           // e.g. "02/01/2000"
    options: Intl.DateTimeFormatOptions;
  }>;
  time: Array<{
    style: Style;
    pattern: string;          // e.g. "HH:II:SS", "hh:II:SSA"
    sample: string;           // e.g. "13:45:30"
    options: Intl.DateTimeFormatOptions;
  }>;
  datetime: Array<{
    dateStyle: Style;
    timeStyle: Style;
    pattern: string;          // e.g. "DD/MM/YYYY, HH:II:SS"
    sample: string;           // e.g. "02/01/2000, 13:45:30"
    options: Intl.DateTimeFormatOptions;
  }>;
};

/**
 * Build a token pattern like "DD/MM/YYYY HH:II:SS" from Intl.DateTimeFormat parts.
 */
function partsToPattern(
  parts: Intl.DateTimeFormatPart[],
  hourCycle: string | undefined
): string {
  let pattern = '';

  // If we see a dayPeriod in parts, it's definitely 12-hour clock
  const hasDayPeriod = parts.some(p => p.type === 'dayPeriod');
  const is12h = hasDayPeriod || hourCycle === 'h12' || hourCycle === 'h11';

  for (const p of parts) {
    switch (p.type) {
      case 'year':
        // Usually "2000" → "YYYY"
        pattern += 'YYYY';
        break;

      case 'month':
        if (/^\d+$/.test(p.value)) {
          // numeric month
          pattern += p.value.length === 2 ? 'MM' : 'M';
        } else {
          // textual month
          pattern += p.value.length > 3 ? 'MMMM' : 'MMM';
        }
        break;

      case 'day':
        pattern += p.value.length === 2 ? 'DD' : 'D';
        break;

      case 'weekday':
        // You can refine this if you care about full vs short
        pattern += p.value.length > 3 ? 'dddd' : 'ddd';
        break;

      case 'hour':
        if (is12h) {
          // 12-hour clock
          pattern += p.value.length === 2 ? 'hh' : 'h';
        } else {
          // 24-hour clock
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
        // AM/PM
        pattern += 'A';
        break;

      case 'timeZoneName':
        // You may want 'z' or 'Z' depending on your conventions
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
 * Get all common date/time/datetime formats for a given locale using Intl.DateTimeFormat.
 *
 * - Date formats: dateStyle only (full/long/medium/short)
 * - Time formats: timeStyle only
 * - Datetime formats: all combinations of dateStyle × timeStyle
 *
 * Returns tokens using your convention: YYYY, MM, DD, HH, II, SS, A, etc.
 */
export function getCommonFormatsForLocale(lng: string | string[]): CommonFormats {
  const dateStyles: Style[] = ['full', 'long', 'medium', 'short'];
  const timeStyles: Style[] = ['full', 'long', 'medium', 'short'];

  // A fixed sample date to generate patterns.
  // 2 Jan 2000, 13:45:30 — avoids 01/01 ambiguity and crosses 12h/24h boundaries.
  const sampleDate = new Date(Date.UTC(2000, 0, 2, 13, 45, 30));

  const date: CommonFormats['date'] = [];
  const time: CommonFormats['time'] = [];
  const datetime: CommonFormats['datetime'] = [];

  // --- Date-only formats ---
  for (const ds of dateStyles) {
    const options: Intl.DateTimeFormatOptions = { dateStyle: ds };
    const fmt = new Intl.DateTimeFormat(lng, options);
    const parts = fmt.formatToParts(sampleDate);
    const pattern = partsToPattern(parts, (fmt.resolvedOptions() as any).hourCycle);
    date.push({
      style: ds,
      pattern,
      sample: fmt.format(sampleDate),
      options
    });
  }

  // --- Time-only formats ---
  for (const ts of timeStyles) {
    const options: Intl.DateTimeFormatOptions = { timeStyle: ts };
    const fmt = new Intl.DateTimeFormat(lng, options);
    const parts = fmt.formatToParts(sampleDate);
    const pattern = partsToPattern(parts, (fmt.resolvedOptions() as any).hourCycle);
    time.push({
      style: ts,
      pattern,
      sample: fmt.format(sampleDate),
      options
    });
  }

  // --- Date + time formats (all combinations) ---
  for (const ds of dateStyles) {
    for (const ts of timeStyles) {
      const options: Intl.DateTimeFormatOptions = {
        dateStyle: ds,
        timeStyle: ts
      };
      const fmt = new Intl.DateTimeFormat(lng, options);
      const parts = fmt.formatToParts(sampleDate);
      const pattern = partsToPattern(parts, (fmt.resolvedOptions() as any).hourCycle);
      datetime.push({
        dateStyle: ds,
        timeStyle: ts,
        pattern,
        sample: fmt.format(sampleDate),
        options
      });
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

  const {date, time} = getCommonFormatsForLocale(langs);
  extend(bbn.dt.locales, {
    monthsLong,
    monthsShort,
    weekdaysLong,
    weekdaysShort,
  });
};
