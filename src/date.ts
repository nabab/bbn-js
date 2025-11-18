import _ from './_.js';
import each from './fn/loop/each.js';
import substr from './fn/string/substr.js';
import isNumber from './fn/type/isNumber.js';
import isDate from './fn/type/isDate.js';
import isPrimitive from './fn/type/isPrimitive.js';
import extend from './fn/object/extend.js';
import getRow from './fn/object/getRow.js';

const patterns: {
  name: string;
  re: RegExp;
  map: (m: RegExpMatchArray) => {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
  };
}[] = [
  // MariaDB DATETIME "YYYY-MM-DD HH:MM:SS"
  {
    name: 'mariadb-datetime',
    re: /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2}):(\d{2})$/,
    map: m => ({
      year: +m[1],
      month: +m[2],
      day: +m[3],
      hour: +m[4],
      minute: +m[5],
      second: +m[6],
    })
  },
  // MariaDB DATETIME without seconds "YYYY-MM-DD HH:MM"
  {
    name: 'mariadb-datetime-no-sec',
    re: /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})$/,
    map: m => ({
      year: +m[1],
      month: +m[2],
      day: +m[3],
      hour: +m[4],
      minute: +m[5],
      second: 0,
    })
  },
  // MariaDB DATE "YYYY-MM-DD"
  {
    name: 'mariadb-date',
    re: /^(\d{4})-(\d{2})-(\d{2})$/,
    map: m => ({
      year: +m[1],
      month: +m[2],
      day: +m[3],
      hour: 0,
      minute: 0,
      second: 0,
    })
  },
  // ISO / JS-style "YYYY-MM-DDTHH:MM[:SS][.sss][Z or ±HH:MM]"
  {
    name: 'iso-datetime',
    re: /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?(?:\.\d+)?(?:Z|[+\-]\d{2}:?\d{2})?$/,
    map: m => ({
      year: +m[1],
      month: +m[2],
      day: +m[3],
      hour: +m[4],
      minute: +m[5],
      second: m[6] !== undefined ? +m[6] : 0,
    })
  },
  // Simple slash date "YYYY/MM/DD"
  {
    name: 'slash-date',
    re: /^(\d{2})\/(\d{2})\/(\d{4})$/,
    map: m => ({
      year: +m[3],
      month: +m[2],
      day: +m[1],
      hour: 0,
      minute: 0,
      second: 0,
    })
  },
  // Slash datetime "YYYY/MM/DD HH:MM:SS"
  {
    name: 'slash-datetime',
    re: /^(\d{2})\/(\d{2})\/(\d{4})[ T](\d{2}):(\d{2}):(\d{2})$/,
    map: m => ({
      year: +m[3],
      month: +m[2],
      day: +m[1],
      hour: +m[4],
      minute: +m[5],
      second: +m[6],
    })
  },
];

const units: [string, Intl.RelativeTimeFormatUnit, number][] = [
  ['y', "year",   365 * 24 * 60 * 60 * 1000],
  ['m', "month",  30  * 24 * 60 * 60 * 1000],
  ['w', "week",    7  * 24 * 60 * 60 * 1000],
  ['d', "day",     24 * 60 * 60 * 1000],
  ['h', "hour",    60 * 60 * 1000],
  ['i', "minute",  60 * 1000],
  ['s', "second",  1000]
];

const unitsMap: {[key: string]: string} = {
  'y': 'Year',
  'm': 'Month',
  'd': 'Date',
  'w': 'Week',
  'h': 'Hours',
  'i': 'Minutes',
  's': 'Seconds'
};

const formatsMap: {[key: string]: string} = {
  'y': 'YYYY',
  'm': 'MM',
  'd': 'DD',
  'e': 'EE',
  'w': 'WW',
  'h': 'HH',
  'i': 'II',
  's': 'SS'
};

const unitsCorrespondence: {[key: string]: string} = {
  'years': 'y',
  'year': 'y',
  'YEARS': 'y',
  'YEAR': 'y',
  'Years': 'y',
  'Year': 'y',
  'YYYY': 'y',
  'YY': 'y',
  'yyyy': 'y',
  'yy': 'y',
  'Y': 'y',
  'y': 'y',
  'months': 'm',
  'month': 'm',
  'Months': 'm',
  'Month': 'm',
  'MONTHS': 'm',
  'MONTH': 'm',
  'MMMM': 'm',
  'MMM': 'm',
  'MM': 'm',
  'M': 'm',
  'm': 'm',
  'weekday': 'e',
  'WEEKDAY': 'e',
  'ee': 'e',
  'EE': 'e',
  'e': 'e',
  'E': 'e',
  'ddd': 'e',
  'days': 'd',
  'day': 'd',
  'Days': 'd',
  'Day': 'd',
  'DAYS': 'd',
  'DAY': 'd',
  'DD': 'd',
  'D': 'd',
  'dd': 'd',
  'd': 'd',
  'hours': 'h',
  'hour': 'h',
  'Hours': 'h',
  'Hour': 'h',
  'HOURS': 'h',
  'HOUR': 'h',
  'HH': 'h',
  'hr': 'h',
  'H': 'h',
  'hh': 'h',
  'h': 'h',
  'minutes': 'i',
  'minute': 'i',
  'Minutes': 'i',
  'Minute': 'i',
  'MINUTES': 'i',
  'MINUTE': 'i',
  'II': 'i',
  'ii': 'i',
  'mn': 'i',
  'mm': 'i',
  'min': 'i',
  'n': 'i',
  'i': 'i',
  'SS': 's',
  'ss': 's',
  'seconds': 's',
  'second': 's',
  'Seconds': 's',
  'Second': 's',
  'SECONDS': 's',
  'SECOND': 's',
  'sec': 's',
  's': 's',
  'S': 's',
  'WW': 'w',
  'W': 'w',
  'w': 'w'
};

const buildLocaleFromIntl = () => {
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

  return {
    monthsLong,
    monthsShort,
    weekdaysLong,
    weekdaysShort,
  };
};

const locales: any = {};


class bbnDateDuration {
  #durationMs: number = 0;
  #unit: string = '';

  constructor(len: number, unit: string, fromMs: boolean = false) {
    const realUnit = unitsCorrespondence[unit] || unit;
    if (!realUnit) {
      throw new Error('Invalid unit for duration: ' + unit);
    }

    this.#unit = realUnit;

    const row = getRow(units, d => d[0] === realUnit);
    if (!row) {
      throw new Error('Invalid unit for duration: ' + realUnit);
    }

    const msPerUnit = row[2];
    this.#durationMs = fromMs ? len : len * msPerUnit;
  }

  #getUnitRowByName(name: string) {
    const row = getRow(units, d => d[1] === name);
    if (!row) {
      throw new Error('Unit name not found: ' + name);
    }
    return row;
  }

  /**
   * Internal helper for remaining or total whole units.
   */
  #getUnitValue(
    name: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second',
    remaining: boolean
  ): number {
    const index = units.findIndex(([, n]) => n === name);
    if (index === -1) {
      throw new Error('Unit not found: ' + name);
    }

    const unitMs = units[index][2];

    // Total units
    if (!remaining) {
      return Math.floor(this.#durationMs / unitMs);
    }

    // Remaining units
    let remainingMs = this.#durationMs;

    for (let i = 0; i < index; i++) {
      const [, , msHigher] = units[i];
      const amount = Math.floor(remainingMs / msHigher);
      remainingMs -= amount * msHigher;
    }

    return Math.floor(remainingMs / unitMs);
  }

  // -----------------------
  //     Public getters
  // -----------------------

  years(remaining = false)   { return this.#getUnitValue('year', remaining); }
  months(remaining = false)  { return this.#getUnitValue('month', remaining); }
  weeks(remaining = false)    { return this.#getUnitValue('week', remaining); }
  days(remaining = false)    { return this.#getUnitValue('day', remaining); }
  hours(remaining = false)   { return this.#getUnitValue('hour', remaining); }
  minutes(remaining = false) { return this.#getUnitValue('minute', remaining); }
  seconds(remaining = false) { return this.#getUnitValue('second', remaining); }

  // -----------------------
  //      Day.js style
  //   "asX" conversions
  // -----------------------

  toJSON() {
    return {
      years: this.years(true),
      months: this.months(true),
      days: this.days(true),
      hours: this.hours(true),
      minutes: this.minutes(true),
      seconds: this.seconds(true),
      milliseconds: this.toMilliseconds()
    };
  }
  /**
   * Returns the full duration expressed as X (float), like Day.js.
   */
  asYears() {
    const [, , ms] = this.#getUnitRowByName('year');
    return this.#durationMs / ms;
  }

  asMonths() {
    const [, , ms] = this.#getUnitRowByName('month');
    return this.#durationMs / ms;
  }

  asWeeks() {
    const [, , ms] = this.#getUnitRowByName('week');
    return this.#durationMs / ms;
  }

  asDays() {
    const [, , ms] = this.#getUnitRowByName('day');
    return this.#durationMs / ms;
  }

  asHours() {
    const [, , ms] = this.#getUnitRowByName('hour');
    return this.#durationMs / ms;
  }

  asMinutes() {
    const [, , ms] = this.#getUnitRowByName('minute');
    return this.#durationMs / ms;
  }

  asSeconds() {
    const [, , ms] = this.#getUnitRowByName('second');
    return this.#durationMs / ms;
  }

  /**
   * Add any unit (or instance default).
   */
  add(value: number, unit?: string): bbnDateDuration {
    const targetUnit = unit
      ? (unitsCorrespondence[unit] || unit)
      : this.#unit;

    const row = getRow(units, d => d[0] === targetUnit);
    if (!row) {
      throw new Error('Invalid unit for duration: ' + (unit ?? targetUnit));
    }

    return new bbnDateDuration(this.#durationMs + value * row[2], this.#unit, true);
  }

  subtract(value: number, unit?: string): bbnDateDuration {
    return this.add(-value, unit);
  }

  toMilliseconds() {
    return this.#durationMs;
  }
}

class bbnDateTool {
  #value: Date | undefined;
  #isDuration: boolean = false;

  /**
   * Parses a date string strictly according to a format.
   *
   * Supported tokens:
   *   Years:   YYYY, YY, Y
   *   Months:  MMMM, MMM, MM, M, m
   *   Days:    DD, D, d
   *   Weekday: dddd, ddd, EE  (validation only)
   *   Hours:   HH, H, h
   *   Minutes: II, I, i
   *   Seconds: SS, S, s
   *   Milli:   ms
   *   Weeks:   WWWW, WWW, WW, W (parsed but not used to build the Date)
   *
   * @throws Error if parsing fails or the date is invalid.
   */
  static parse(
    input: string,
    format: string,
    locale?: {
      monthsLong?: string[];
      monthsShort?: string[];
      weekdaysLong?: string[];
      weekdaysShort?: string[];
    }
  ): Date {
    if (!('monthsLong' in locales)) {
      extend(locales, buildLocaleFromIntl());
    }
    const loc = {
      monthsLong: locale?.monthsLong ?? locales.monthsLong,
      monthsShort: locale?.monthsShort ?? locales.monthsShort,
      weekdaysLong: locale?.weekdaysLong ?? locales.weekdaysLong,
      weekdaysShort: locale?.weekdaysShort ?? locales.weekdaysShort
    };

    type Ctx = {
      year: number;
      month: number;  // 1-12
      day: number;    // 1-31
      hour: number;
      minute: number;
      second: number;
      ms: number;
      weekday?: number; // 0-6 or 1-7, only to validate
      week?: number;    // parsed, unused for now
    };

    const ctx: Ctx = {
      year: 1970,
      month: 1,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0,
      ms: 0
    };

    const escapeRegex = (s: string) =>
      s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    type TokenSpec = {
      token: string;
      regex: string; // without capturing group wrapper
      apply?: (value: string) => void;
    };

    const tokenSpecs: TokenSpec[] = [
      // Years
      {
        token: 'YYYY',
        regex: '\\d{4}',
        apply: v => { ctx.year = parseInt(v, 10); }
      },
      {
        token: 'YY',
        regex: '\\d{2}',
        apply: v => {
          const n = parseInt(v, 10);
          ctx.year = n >= 70 ? 1900 + n : 2000 + n;
        }
      },
      {
        token: 'Y',
        regex: '[+-]?\\d{1,6}',
        apply: v => { ctx.year = parseInt(v, 10); }
      },

      // Months
      {
        token: 'MMMM',
        regex: '[^\\d\\s]+',
        apply: v => {
          const idx = loc.monthsLong
            .findIndex(m => m.toLowerCase() === v.toLowerCase());
          if (idx === -1) {
            throw new Error('Invalid month name: ' + v);
          }
          ctx.month = idx + 1;
        }
      },
      {
        token: 'MMM',
        regex: '[^\\d\\s]+',
        apply: v => {
          const idx = loc.monthsShort
            .findIndex(m => m.toLowerCase() === v.toLowerCase());
          if (idx === -1) {
            throw new Error('Invalid short month name: ' + v);
          }
          ctx.month = idx + 1;
        }
      },
      {
        token: 'MM',
        regex: '\\d{2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 1 || n > 12) {
            throw new Error('Invalid month: ' + n);
          }
          ctx.month = n;
        }
      },
      {
        token: 'M',
        regex: '\\d{1,2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 1 || n > 12) {
            throw new Error('Invalid month: ' + n);
          }
          ctx.month = n;
        }
      },
      {
        token: 'm', // PHP-like month
        regex: '\\d{2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 1 || n > 12) {
            throw new Error('Invalid month: ' + n);
          }
          ctx.month = n;
        }
      },

      // Day of month
      {
        token: 'DD',
        regex: '\\d{2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 1 || n > 31) {
            throw new Error('Invalid day of month: ' + n);
          }
          ctx.day = n;
        }
      },
      {
        token: 'D',
        regex: '\\d{1,2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 1 || n > 31) {
            throw new Error('Invalid day of month: ' + n);
          }
          ctx.day = n;
        }
      },
      {
        token: 'd', // PHP-like day-of-month
        regex: '\\d{2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 1 || n > 31) {
            throw new Error('Invalid day of month: ' + n);
          }
          ctx.day = n;
        }
      },

      // Weekday (only validated)
      {
        token: 'dddd',
        regex: '[^\\d\\s]+',
        apply: v => {
          const idx = loc.weekdaysLong
            .findIndex(w => w.toLowerCase() === v.toLowerCase());
          if (idx === -1) {
            throw new Error('Invalid weekday name: ' + v);
          }
          ctx.weekday = idx; // 0-6, Sunday-based
        }
      },
      {
        token: 'ddd',
        regex: '[^\\d\\s]+',
        apply: v => {
          const idx = loc.weekdaysShort
            .findIndex(w => w.toLowerCase() === v.toLowerCase());
          if (idx === -1) {
            throw new Error('Invalid short weekday name: ' + v);
          }
          ctx.weekday = idx; // 0-6
        }
      },
      {
        token: 'EE',
        regex: '\\d{1}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 0 || n > 7) {
            throw new Error('Invalid weekday number: ' + n);
          }
          ctx.weekday = n;
        }
      },

      // Hours
      {
        token: 'HH',
        regex: '\\d{2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 0 || n > 23) {
            throw new Error('Invalid hour: ' + n);
          }
          ctx.hour = n;
        }
      },
      {
        token: 'H',
        regex: '\\d{1,2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 0 || n > 23) {
            throw new Error('Invalid hour: ' + n);
          }
          ctx.hour = n;
        }
      },
      {
        token: 'h', // PHP-like 24h alias here
        regex: '\\d{2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 0 || n > 23) {
            throw new Error('Invalid hour: ' + n);
          }
          ctx.hour = n;
        }
      },

      // Minutes
      {
        token: 'II',
        regex: '\\d{2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 0 || n > 59) {
            throw new Error('Invalid minute: ' + n);
          }
          ctx.minute = n;
        }
      },
      {
        token: 'I',
        regex: '\\d{1,2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 0 || n > 59) {
            throw new Error('Invalid minute: ' + n);
          }
          ctx.minute = n;
        }
      },
      {
        token: 'i', // PHP-like minutes
        regex: '\\d{2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 0 || n > 59) {
            throw new Error('Invalid minute: ' + n);
          }
          ctx.minute = n;
        }
      },

      // Seconds
      {
        token: 'SS',
        regex: '\\d{2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 0 || n > 59) {
            throw new Error('Invalid second: ' + n);
          }
          ctx.second = n;
        }
      },
      {
        token: 'S',
        regex: '\\d{1,2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 0 || n > 59) {
            throw new Error('Invalid second: ' + n);
          }
          ctx.second = n;
        }
      },
      {
        token: 's', // PHP-like seconds
        regex: '\\d{2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 0 || n > 59) {
            throw new Error('Invalid second: ' + n);
          }
          ctx.second = n;
        }
      },

      // Milliseconds
      {
        token: 'ms',
        regex: '\\d{1,3}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 0 || n > 999) {
            throw new Error('Invalid millisecond: ' + n);
          }
          ctx.ms = n;
        }
      },

      // Weeks (parsed, but not used to construct the Date yet)
      {
        token: 'WWWW',
        regex: '\\d{1,2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 1 || n > 53) {
            throw new Error('Invalid week number: ' + n);
          }
          ctx.week = n;
        }
      },
      {
        token: 'WWW',
        regex: '\\d{1,2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 1 || n > 53) {
            throw new Error('Invalid week number: ' + n);
          }
          ctx.week = n;
        }
      },
      {
        token: 'WW',
        regex: '\\d{1,2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 1 || n > 53) {
            throw new Error('Invalid week number: ' + n);
          }
          ctx.week = n;
        }
      },
      {
        token: 'W',
        regex: '\\d{1,2}',
        apply: v => {
          const n = parseInt(v, 10);
          if (n < 1 || n > 53) {
            throw new Error('Invalid week number: ' + n);
          }
          ctx.week = n;
        }
      }
    ];

    // Sort tokens by length (desc) so we match 'YYYY' before 'YY', 'ms' before 'm'/'s', etc.
    const tokensByLength = [...tokenSpecs].sort(
      (a, b) => b.token.length - a.token.length
    );

    let pattern = '';
    const applyFns: ((value: string) => void)[] = [];
    let i = 0;

    while (i < format.length) {
      let matchedToken: TokenSpec | null = null;

      for (const spec of tokensByLength) {
        if (format.startsWith(spec.token, i)) {
          matchedToken = spec;
          break;
        }
      }

      if (matchedToken) {
        pattern += `(${matchedToken.regex})`;
        if (matchedToken.apply) {
          applyFns.push(matchedToken.apply);
        } else {
          // Still consume the capturing group, but ignore value
          applyFns.push(() => {});
        }
        i += matchedToken.token.length;
      } else {
        // Literal character
        pattern += escapeRegex(format[i]);
        i += 1;
      }
    }

    const fullRegex = new RegExp('^' + pattern + '$');
    const match = fullRegex.exec(input);

    if (!match) {
      throw new Error(`Date string "${input}" does not match format "${format}"`);
    }

    // Apply captured groups
    for (let idx = 1; idx < match.length; idx++) {
      const value = match[idx];
      const apply = applyFns[idx - 1];
      if (value != null && apply) {
        apply(value);
      }
    }

    // Build Date (local time)
    const date = new Date(
      ctx.year,
      ctx.month - 1,
      ctx.day,
      ctx.hour,
      ctx.minute,
      ctx.second,
      ctx.ms
    );

    // Strict validation: ensure Date didn't overflow (e.g. 31 Feb)
    if (
      date.getFullYear() !== ctx.year ||
      date.getMonth() !== ctx.month - 1 ||
      date.getDate() !== ctx.day ||
      date.getHours() !== ctx.hour ||
      date.getMinutes() !== ctx.minute ||
      date.getSeconds() !== ctx.second ||
      date.getMilliseconds() !== ctx.ms
    ) {
      throw new Error('Invalid date produced from components');
    }

    // Optional: validate weekday if provided
    if (typeof ctx.weekday !== 'undefined') {
      const jsWeekday = date.getDay(); // 0 (Sunday) - 6 (Saturday)
      if (ctx.weekday === 0 || ctx.weekday === 7) {
        // If you decide EE is 0–6 or 1–7, adjust here as needed.
        // Not enforcing a strict rule beyond basic numeric check above.
      }
      // You could enforce consistency between ctx.weekday and jsWeekday here if you want.
    }

    return date;
  }


  constructor(value: any, inputFormat: null|String = null) {
    let t = typeof value;
    if (!value) {
      this.#value = new Date();
    }
    else if (inputFormat && bbn.fn.isString(value)) {
      try {
        this.#value = bbnDateTool.parse(value, inputFormat as string);
      }
      catch (e) {
        throw new Error('Error parsing date with format "' + inputFormat + '": ' + (e as Error).message);
      }
    }
    else {
      if (t === 'number' || (isNumber(value) && value !== '')) {
        if ((value < 5000) && isNumber(inputFormat)) {
          value = Array.from(arguments);
        }                
        else if (value < 10000000000) {
          value = value * 1000;
        }

        if (!Array.isArray(value)) {
          this.#value = new Date(value);
        }
      }

      if (t === 'string') {
        for (const p of patterns) {
          const m = value.match(p.re);
          if (m) {
            const { year, month, day, hour, minute, second } = p.map(m);
            this.#value = new Date(year, month - 1, day, hour, minute, second, 0);
          }
        }
        if (!this.#value) {
          throw new Error('Invalid date string format: ' + value);
        }
      }
      else if (isDate(value)) {
        this.#value = value;
      }
      else if (Array.isArray(value)) {
        this.#value = new (Date as any)(...value);
      }
    }

    if (this.#value === undefined) {
      const obj = {};
      return new Proxy(this, {
        get: (target, prop) => {
          return undefined;
        }
      });
    }
  }

  parse(input: string, format: string): bbnDateTool {
    const d = bbnDateTool.parse(input, format);
    return new bbnDateTool(d);
  }

  matchFormat(value, format: string): boolean {
    try {
      bbnDateTool.parse(value, format);
      return true;
    }
    catch {
      return false;
    }
  }

  toString(): string {
    return this.#value ? this.format() : '';
  }

  year(v?: number): number | bbnDateTool {
    if (0 in arguments) {
      const d = this.copy();
      d.setFullYear(v);
      return new bbnDateTool(d);
    }
    return this.#value!.getFullYear();
  }

  month(v?: number): number | bbnDateTool {
    if (0 in arguments) {
      const d = this.copy();
      d.setMonth(v-1);
      return new bbnDateTool(d);
    }
    return this.#value!.getMonth() + 1;
  }

  day(v?: number): number | bbnDateTool {
    if (0 in arguments) {
      const d = this.copy();
      d.setDate(v);
      return new bbnDateTool(d);
    }
    return this.#value!.getDate();
  }

  hour(v?: number): number | bbnDateTool {
    if (0 in arguments) {
      const d = this.copy();
      d.setHours(v);
      return new bbnDateTool(d);
    }
    return this.#value!.getHours();
  }

  minute(v?: number): number | bbnDateTool {
    if (0 in arguments) {
      const d = this.copy();
      d.setMinutes(v);
      return new bbnDateTool(d);
    }
    return this.#value!.getMinutes();
  }

  second(v?: number): number | bbnDateTool {
    if (0 in arguments) {
      const d = this.copy();
      d.setSeconds(v);
      return new bbnDateTool(d);
    }
    return this.#value!.getSeconds();
  }

  weekday(v?: number, past: boolean = false): number | bbnDateTool{
    if (0 in arguments) {
      return this.setWeekday(v, past);
    }
    
    return this.#value!.getDay();
  }

  /**
   * Returns the ISO-8601 week number of this date.
   * Week starts on Monday, and week 1 is the week with Jan 4.
   *
   * @returns {number} ISO week number (1–53)
   */
  week(): number {
    // Copy date in UTC to avoid timezone issues
    const d = new Date(Date.UTC(this.year() as number, this.month() as number - 1, this.day() as number));

    // Set to nearest Thursday (ISO anchor)
    // (Thursday = day 4, because Sunday=0, Monday=1,...)
    const dayNum = d.getUTCDay() || 7;   // make Sunday = 7

    // Move date to Thursday of this week
    d.setUTCDate(d.getUTCDate() + (4 - dayNum));

    // First week of the year is the week with Jan 4 in it
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));

    // Calculate full weeks between the dates
    const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
    return weekNo;
  }

  get tst(): number {
    return Math.ceil(this.#value!.getTime()/1000);
  }

  get mtst(): number {
    return this.#value!.getTime();
  }
  
  get YYYY(): string {
    return this.year().toString();
  }

  get YY(): string {
    return substr(this.year().toString(), 2, 2);
  }

  get MMMM(): string {
    const opt: Intl.DateTimeFormatOptions = {
      month: 'long',
    };
    const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
    return d.format(this.#value);
  }

  get MMM(): string {
    const opt: Intl.DateTimeFormatOptions = {
      month: 'short',
    };
    const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
    return d.format(this.#value);
  }

  get MM(): string {
    const m = parseInt(this.month().toString());
    return m < 10 ? '0' + m.toString() : m.toString();
  }

  get M(): string {
    return this.month().toString();
  }

  get EE(): string {
    return this.weekday().toString();
  }

  get DD(): string {
    const d = parseInt(this.day().toString());
    return d < 10 ? '0' + d.toString() : d.toString();
  }

  get d(): string {
    return this.day().toString();
  }

  get dddd(): string {
    const opt: Intl.DateTimeFormatOptions = {
      weekday: 'long'
    };
    const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
    return d.format(this.#value);
  }

  get ddd(): string {
    const opt: Intl.DateTimeFormatOptions = {
      weekday: 'short'
    };
    const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
    return d.format(this.#value);
  }

  get D(): string {
    return this.day().toString();
  }

  get HH(): string {
    const h = parseInt(this.hour().toString());
    return h < 10 ? '0' + h.toString() : h.toString();
  }
  
  get H(): string {
    return this.hour().toString();
  }
  
  get II(): string {
    const i = parseInt(this.minute().toString());
    return i < 10 ? '0' + i.toString() : i.toString();
  }

  get I(): string {
    return this.minute().toString();
  }

  get SS(): string {
    const s = parseInt(this.second().toString());
    return s < 10 ? '0' + s.toString() : s.toString();
  }

  get S(): string {
    return this.second().toString();
  }

  get WW(): string {
    const y = parseInt(this.year().toString());
    const firstDayOfYear = new Date(y, 0, 1);
    const pastDaysOfYear = (this.#value!.getTime() - firstDayOfYear.getTime()) / 86400000;
    return String(Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)).padStart(2, '0');
  }

  get isValid(): boolean {
    return this.#value !== undefined;
  }

  inLeapYear(): boolean {
    if (this.isValid) {
      const year = this.#value.getFullYear();
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    return false;
  }
  
  daysInMonth(): number {
    if (this.isValid) {
      switch (this.#value.getMonth()) {
        case 1:
          if (this.#value.getFullYear() % 4 === 0) {
            return 29;
          }
          else {
            return 28;
          }
        case 0:
        case 3:
        case 5:
        case 8:
        case 10:
          return 30;
        default:
          return 31;
      }
    }
  }

  valueOf(): number {
    return this.mtst;
  }

  add(value: number, unit: string = 'd'): bbnDateTool | null {
    const date = this.#value ? new Date(this.#value.getTime()) : new Date();
    if (unitsCorrespondence[unit]) {
      const realUnit = unitsCorrespondence[unit];
      const suffix = realUnit === 'y' ? 'FullYear' : unitsMap[realUnit];
      const getter = 'get' + suffix;
      const setter = 'set' + suffix;
      date[setter](date[getter]() + value);
      return new bbnDateTool(date);
    }

    return null;
  }

  subtract(value: number, unit?: string): bbnDateTool {
    return this.add(-value, unit);
  }

  dateFromFormat(value: string, unit: string|null): Date {
    const d = new Date();
    return d;
  }

  date(): string {
    return this.format('Y-m-d');
  }

  datetime(): string {
    return this.format('Y-m-d H:i:s');
  }

  time(): string {
    return this.format('H:i:s');
  }

  fdate(long: boolean = false, withTime: boolean = false, weekday: boolean = false): string {
    if (!this.#value) {
      return '';
    }

    const opt: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: long ? 'long' : 'short',
      day: 'numeric',
      ...(weekday ? { weekday: 'long' } : {}),
      ...(withTime ? { hour: '2-digit', minute: '2-digit'} : {})  
    };
    const d = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
    return d.format(this.#value);
  }

  ftime(withSeconds: boolean = false): string {
    if (!this.#value) {
      return '';
    }

    const opt: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
    };
    if (withSeconds) {
      opt.second = '2-digit';
    }
    const t = new Intl.DateTimeFormat([bbn.env.lang, ...navigator.languages], opt);
    return t.format(this.#value);
  }

  format(format: string = 'YYYY-MM-DD HH:II:SS'): string {
    let str: string = '';
    if (format) {
      const reg = new RegExp('(\[|\]|' + Object.keys(unitsCorrespondence).join('|') + ')', 'g');
      let opened = 0;
      const parts = format.split(reg);
      each(parts, (part: string) => {
        if (part === '[') {
          opened++;
          return;
        }
        else if (part === ']') {
          opened--;
          return;
        }
        
        if (opened > 0) {
          str += part;
          return;
        }

        if (part in unitsCorrespondence) {
          if (part in this && isPrimitive(this[part as keyof bbnDateTool])) {
            str += this[part as keyof bbnDateTool];
          }
          else {
            const suffix = formatsMap[unitsCorrespondence[part]];
            str += this[suffix];
          }
        }
        else {
          str += part;
        }
      });
    }
    return str;
  }

  unix(ms: boolean | number = false): number | bbnDateTool {
    if (typeof ms === 'number') {
      const date = this.copy();
      date.setTime(ms * 1000);
      return new bbnDateTool(date);
    }

    if (this.#value) {
      if (ms) {
        return this.#value.getTime();
      }
      else {
        return Math.floor(this.#value.getTime() / 1000);
      }
    }

    return 0;
  }

  sql(noTime: boolean = false): string {
    if (!this.#value) {
      return '';
    }

    return noTime
      ? this.format('YYYY-MM-DD')
      : this.format('YYYY-MM-DD HH:II:SS');
  }

  /**
   * Compare this date to another date with a given precision.
   * @returns -1 if this < other, 0 if equal, 1 if this > other
   */
  compare(date: any, unit: string = ''): -1 | 0 | 1 {
    const d = date instanceof bbnDateTool ? date : new bbnDateTool(date);
    const realUnit = unitsCorrespondence[unit] || null;

    // If no unit or unknown unit, fall back to timestamp comparison
    if (!realUnit) {
      if (this.mtst < d.mtst) {
        return -1;
      }
      if (this.mtst > d.mtst) {
        return 1;
      }

      return 0;
    }

    const order: Array<'y' | 'm' | 'd' | 'h' | 'i' | 's'> = ['y', 'm', 'd', 'h', 'i', 's'];
    // Compare step by step until the requested precision
    for (const u of order) {
      const key = getRow(units, un => un[0] === u)?.[1];
      const a = this[key]() as number;
      const b = d[key]() as number;

      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }

      // Stop when we've reached the desired unit
      if (u === realUnit) {
        break;
      }
    }

    return 0;
  }

  isBefore(date: any, unit: string = ''): Boolean {
    return this.compare(date, unit) === -1;
  }

  isAfter(date: any, unit: string = 'day'): Boolean {
    return this.compare(date, unit) === 1;
  }

  isSame(date: any, unit: string = 'day'): Boolean {
    return this.compare(date, unit) === 0;
  }

  isAfterOrSame(date: any, unit: string = ''): Boolean {
    return [0, 1].includes(this.compare(date, unit));
  }

  isBeforeOrSame(date: any, unit: string = ''): Boolean {
    return [-1, 0].includes(this.compare(date, unit));
  }

  fromNow(unit: string = '') {
    const date = new Date();
    const chosenUnit = unitsCorrespondence[unit] || this.guessUnit(this.diff(date));
    const diff = this.diff(date, chosenUnit);
    const rtf = new Intl.RelativeTimeFormat([bbn.env.lang, ...navigator.languages], { numeric: "auto" });
    // FORCED UNIT MODE
    const match = getRow(units, d => d[0] === chosenUnit);
    if (!match) {
      throw new Error('Invalid unit for fromDate: ' + unit);
    }

    return rtf.format(diff, match[1]);
  }

  fromDate(date: any, unit: string = '') {
    const chosenUnit = unitsCorrespondence[unit] || this.guessUnit(this.diff(date));
    const diff: number = this.diff(date, chosenUnit);
    return diff > 0 ? _('%d %s before', diff, unit) : (diff < 0 ? _('%d %s after', -diff, unit) : _("The same %s", unit));
  }

  guessUnit(valueInMs: number): string | null {
    const absDiff: number = Math.abs(valueInMs);
    for (const [shortUnit, rtfUnit, ms] of units) {
      if ((absDiff >= ms) || (rtfUnit === "second")) {
        return shortUnit;
      }
    }
  }
    

  diff(date: any, unit: string = '', abs: boolean = false): number {
    const target = (date instanceof bbnDateTool) ? date.mtst : new Date(date).getTime();
    const now = this.mtst;
    let diff = now - target;
    if (abs) {
      diff = Math.abs(diff);
    }
    if (!unit) {
      return diff;
    }

    const realUnit = unitsCorrespondence[unit];
    const match = getRow(units, d => d[0] === realUnit);
    if (!match) {
      throw new Error('Invalid unit for diff: ' + unit);
    }

    const [u, rtfUnit, ms] = match;
    return Math.round(diff / ms);
  }

  calendar(format: string): string {
    let str: string = '';
    if (format) {
    }

    return str;
  }

  getWeekday(n: 0 | 1 | 2 | 3 | 4 | 5 | 6, mode: string = 'long', locale?: string): any {
    if (!mode) {
      const letter = this.getWeekday(n, 'narrow', locale);
      const abbr = this.getWeekday(n, 'short', locale);
      const full = this.getWeekday(n, 'long', locale);
      return {
        letter,
        abbr,
        full,
        long: full,
        short: abbr,
        narrow: letter
      };
    }

    let m: 'long' | 'short' | 'narrow';
    if (mode === 'letter') {
      m = 'narrow';
    }
    else if (mode === 'abbr') {
      m = 'short';
    }
    else if (mode === 'full') {
      m = 'long';
    }
    else if (!['long', 'short', 'narrow'].includes(mode)) {
      throw new Error('Invalid mode for getWeekDay: ' + mode + '. Allowed values are "long", "short", "narrow", "letter", "abbr", "full".');
    }
    else {
      m = mode as 'long' | 'short' | 'narrow';
    }

    // Create a date with the right weekday
    // 2023-01-01 was a Sunday → base for offset
    const base = new Date(2023, 0, 1 + n);    
    return base.toLocaleDateString([locale || bbn.env.lang, ...navigator.languages], { weekday: m });
  }

  getWeekdayIndex(name: string, locale?: string): number {
    const loc = locale || bbn.env.lang;
    const input = name.trim().toLowerCase();
    // Build a localized map only once per locale (optional optimization)
    const langs = [loc, ...navigator.languages];
    for (let i = 0; i < langs.length; i++) {
      if (!langs[i]) {
        continue;
      }
      
      const formatter = new Intl.DateTimeFormat(langs[i], { weekday: "long" });
      // Generate localized weekday names for Sun → Sat
      for (let i = 0; i < 7; i++) {
        // 2023-01-01 was Sunday
        const date = new Date(2023, 0, 1 + i);
        const localized = formatter.format(date).toLowerCase();

        if (localized === input) {
          return i; // JS weekday number
        }
      }
    }

    throw new Error(`Unknown weekday name '${name}' for locale '${loc}'`);
  }


  /**
   * Returns a NEW date that is the next (or previous if past=true)
   * occurrence of the given weekday, starting from this.#value.
   *
   * @param {number|string} weekday - Weekday index (0=Sunday…6=Saturday)
   *                                 or a localized weekday name.
   * @param {boolean} past - If true → return previous occurrence instead of next.
   * @param {string} [locale] - Optional locale for weekday names.
   */
  setWeekday(weekday: number | string, past = false, locale?: string): bbnDateTool {
    let targetDay: number;

    if (typeof weekday === "string") {
      // Use your previously defined reverse method:
      weekday = this.getWeekdayIndex(weekday, locale);
    }
    // --- Normalize weekday ---
    if (typeof weekday === "number") {
      if (weekday < 0 || weekday > 6) {
        throw new RangeError("weekday number must be between 0 and 6");
      }
      targetDay = weekday;
    }
    else {
      throw new TypeError("weekday must be a number (0–6) or a string");
    }

    const currentDay = this.weekday() as number; // JS weekday (0–6)
    let diff;

    if (!past) {
      // ---------- NEXT occurrence ----------
      diff = (targetDay - currentDay + 7) % 7;
      if (diff === 0) {
        diff = 7; // next week if same day
      }
    } else {
      // ---------- PREVIOUS occurrence ----------
      diff = (currentDay - targetDay + 7) % 7;
      if (diff === 0) {
        diff = 7; // previous week if same day
      }
      diff = -diff;
    }

    const d = this.copy();
    d.setDate(d.getDate() + diff);
    return new bbnDateTool(d);
  }

  copy(): Date {
    return new Date(this.#value!.getTime());
  }

  clone(): bbnDateTool {
    return new bbnDateTool(this.#value ? new Date(this.#value.getTime()) : undefined);
  }

  /**
   * Returns a NEW bbnDateTool at the start of the given unit.
   * Units: year, month, week, day, hour, minute, second
   */
  startOf(unit = "d"): bbnDateTool {
    const u = unitsCorrespondence[unit];
    if (!u) {
      throw new Error('Invalid unit for startOf: ' + unit);
    }

    let d: Date;
    switch (u) {
      case "y":
        d = new Date(this.year() as number, 0, 1, 0, 0, 0, 0);
        break;

      case "m":
        d = new Date(this.year() as number, this.month() as number - 1, 1, 0, 0, 0, 0);
        break;

      case "w": {
        // Week starting Monday:
        // JS getDay(): 0 (Sun) .. 6 (Sat)
        const current = new Date(this.year() as number, this.month() as number - 1, this.day() as number, this.hour() as number, this.minute() as number, this.second() as number, 0);
        const wd = current.getDay();         // 0..6
        const diffToMonday = (wd + 6) % 7;   // 0 for Monday, 6 for Sunday
        d = new Date(
          current.getFullYear(),
          current.getMonth(),
          current.getDate() - diffToMonday,
          0, 0, 0, 0
        );
        break;
      }

      case "d":
        d = new Date(this.year() as number, this.month() as number - 1, this.day() as number, 0, 0, 0, 0);
        break;

      case "h":
        d = new Date(this.year() as number, this.month() as number - 1, this.day() as number, this.hour() as number, 0, 0, 0);
        break;

      case "i":
        d = new Date(this.year() as number, this.month() as number - 1, this.day() as number, this.hour() as number, this.minute() as number, 0, 0);
        break;

      case "s":
        d = new Date(this.year() as number, this.month() as number - 1, this.day() as number, this.hour() as number, this.minute() as number, this.second() as number, 0);
        break;

      default:
        throw new Error('Invalid unit for startOf: ' + unit);
    }

    return new bbnDateTool(d);
  }

  /**
   * Returns a NEW bbnDateTool at the end of the given unit.
   * Units: year, month, week, day, hour, minute, second
   */
  endOf(unit = "d"): bbnDateTool {
    const u = unitsCorrespondence[unit];
    if (!u) {
      throw new Error('Invalid unit for endOf: ' + unit);
    }

    let d: Date;
    switch (u) {
      case "y":
        // Dec 31, 23:59:59.999
        d = new Date(this.year() as number, 11, 31, 23, 59, 59, 999);
        break;

      case "m":
        // Day 0 of next month = last day of this month
        d = new Date(this.year() as number, this.month() as number, 0, 23, 59, 59, 999);
        break;

      case "w": {
        // End of week (starting Monday) = startOf('week') + 6 days, at 23, 59, 59, 999
        const start = this.startOf("w");
        const base = new Date(start.year() as number, start.month() as number - 1, start.day() as number, 23, 59, 59, 999);
        base.setDate(base.getDate() + 6);
        d = base;
        break;
      }

      case "day":
        d = new Date(this.year() as number, this.month() as number - 1, this.day() as number, 23, 59, 59, 999);
        break;

      case "hour":
        d = new Date(this.year() as number, this.month() as number - 1, this.day() as number, this.hour() as number, 59, 59, 999);
        break;

      case "minute":
        d = new Date(this.year() as number, this.month() as number - 1, this.day() as number, this.hour() as number, this.minute() as number, 59, 999);
        break;

      case "second":
        d = new Date(this.year() as number, this.month() as number - 1, this.day() as number, this.hour() as number, this.minute() as number, this.second() as number, 999);
        break;

      default:
        d = new Date(this.mtst);
    }

    return new bbnDateTool(d);
  }

  duration(num: number, unit: string = 's'): any {
    return new bbnDateDuration(num, unit);
  }

}

function generatorFunction(value: any, inputFormat: null|String = null) {
  if (value instanceof bbnDateTool) {
    return value;
  }

  return new bbnDateTool(value, inputFormat);
}

export default generatorFunction;

