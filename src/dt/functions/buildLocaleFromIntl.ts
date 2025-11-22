import extend from "../../fn/object/extend.js";
import numProperties from "../../fn/object/numProperties.js";

type Style = 'full' | 'long' | 'medium' | 'short';

type CommonFormats = {
  date: Array<{ style: Style; pattern: string; sample: string; options: Intl.DateTimeFormatOptions; }>;
  time: Array<{ style: Style; pattern: string; sample: string; options: Intl.DateTimeFormatOptions; }>;
  datetime: Array<{ dateStyle: Style; timeStyle: Style; pattern: string; sample: string; options: Intl.DateTimeFormatOptions; }>;
  dateWithWeekday: Array<{ style: Style; weekday: "long" | "short"; pattern: string; sample: string; options: Intl.DateTimeFormatOptions; }>;
  datetimeWithWeekday: Array<{ dateStyle: Style; timeStyle: Style; weekday: "long" | "short"; pattern: string; sample: string; options: Intl.DateTimeFormatOptions; }>;
};

function partsToPattern(
  parts: Intl.DateTimeFormatPart[],
  hourCycle: string | undefined
): string {
  let pattern = '';

  const hasDayPeriod = parts.some(p => p.type === 'dayPeriod');
  const is12h = hasDayPeriod || hourCycle === 'h12' || hourCycle === 'h11';

  for (const p of parts) {
    switch (p.type) {
      case 'year': pattern += 'YYYY'; break;
      case 'month':
        if (/^\d+$/.test(p.value)) pattern += p.value.length === 2 ? 'MM' : 'M';
        else pattern += p.value.length > 3 ? 'MMMM' : 'MMM';
        break;
      case 'day': pattern += p.value.length === 2 ? 'DD' : 'D'; break;
      case 'weekday': pattern += p.value.length > 3 ? 'dddd' : 'ddd'; break;
      case 'hour': pattern += is12h ? (p.value.length === 2 ? 'hh' : 'h') : (p.value.length === 2 ? 'HH' : 'H'); break;
      case 'minute': pattern += 'II'; break;
      case 'second': pattern += 'SS'; break;
      case 'dayPeriod': pattern += 'A'; break;
      case 'timeZoneName': pattern += 'z'; break;
      case 'literal': pattern += p.value; break;
      default: pattern += p.value; break;
    }
  }
  return pattern;
}

/**
 * Returns all common date/time/datetime formats + weekday formats for a given locale.
 */
function getCommonFormatsForLocale(lng: string | string[]): CommonFormats {
  const dateStyles: Style[] = ['full', 'long', 'medium', 'short'];
  const timeStyles: Style[] = ['full', 'long', 'medium', 'short'];

  const sample = new Date(Date.UTC(2000, 0, 2, 13, 45, 30));

  const result: CommonFormats = {
    date: [],
    time: [],
    datetime: [],
    dateWithWeekday: [],
    datetimeWithWeekday: []
  };

  // --- Date only ---
  for (const ds of dateStyles) {
    const options = { dateStyle: ds } as Intl.DateTimeFormatOptions;
    const fmt = new Intl.DateTimeFormat(lng, options);
    const parts = fmt.formatToParts(sample);
    result.date.push({
      style: ds,
      pattern: partsToPattern(parts, (fmt.resolvedOptions() as any).hourCycle),
      sample: fmt.format(sample),
      options
    });
  }

  // --- Time only ---
  for (const ts of timeStyles) {
    const options = { timeStyle: ts } as Intl.DateTimeFormatOptions;
    const fmt = new Intl.DateTimeFormat(lng, options);
    const parts = fmt.formatToParts(sample);
    result.time.push({
      style: ts,
      pattern: partsToPattern(parts, (fmt.resolvedOptions() as any).hourCycle),
      sample: fmt.format(sample),
      options
    });
  }

  // --- Date + Time ---
  for (const ds of dateStyles) {
    for (const ts of timeStyles) {
      const options = { dateStyle: ds, timeStyle: ts } as Intl.DateTimeFormatOptions;
      const fmt = new Intl.DateTimeFormat(lng, options);
      const parts = fmt.formatToParts(sample);
      result.datetime.push({
        dateStyle: ds,
        timeStyle: ts,
        pattern: partsToPattern(parts, (fmt.resolvedOptions() as any).hourCycle),
        sample: fmt.format(sample),
        options
      });
    }
  }

  // --- Date with Weekday (long + short) ---
  for (const ds of dateStyles) {
    for (const w of ["long", "short"] as const) {
      const options = { dateStyle: ds, weekday: w } as Intl.DateTimeFormatOptions;
      const fmt = new Intl.DateTimeFormat(lng, options);
      const parts = fmt.formatToParts(sample);
      result.dateWithWeekday.push({
        style: ds,
        weekday: w,
        pattern: partsToPattern(parts, (fmt.resolvedOptions() as any).hourCycle),
        sample: fmt.format(sample),
        options
      });
    }
  }

  // --- Date + Time + Weekday ---
  for (const ds of dateStyles) {
    for (const ts of timeStyles) {
      for (const w of ["long", "short"] as const) {
        const options = { dateStyle: ds, timeStyle: ts, weekday: w } as Intl.DateTimeFormatOptions;
        const fmt = new Intl.DateTimeFormat(lng, options);
        const parts = fmt.formatToParts(sample);
        result.datetimeWithWeekday.push({
          dateStyle: ds,
          timeStyle: ts,
          weekday: w,
          pattern: partsToPattern(parts, (fmt.resolvedOptions() as any).hourCycle),
          sample: fmt.format(sample),
          options
        });
      }
    }
  }

  return result;
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
