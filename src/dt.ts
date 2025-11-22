import { Temporal } from 'temporal-polyfill';
import _ from './_.js';
import each from './fn/loop/each.js';
import substr from './fn/string/substr.js';
import isNumber from './fn/type/isNumber.js';
import isDate from './fn/type/isDate.js';
import isPrimitive from './fn/type/isPrimitive.js';
import extend from './fn/object/extend.js';
import getRow from './fn/object/getRow.js';

import parse from './dt/functions/parse.js';

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
  'months': 'm',
  'month': 'm',
  'Months': 'm',
  'Month': 'm',
  'MONTHS': 'm',
  'MONTH': 'm',
  'MMMM': 'm',
  'MMM': 'm',
  'MM': 'm',
  'weekday': 'e',
  'WEEKDAY': 'e',
  'ee': 'e',
  'EE': 'e',
  'ddd': 'e',
  'days': 'd',
  'day': 'd',
  'Days': 'd',
  'Day': 'd',
  'DAYS': 'd',
  'DAY': 'd',
  'DD': 'd',
  'dd': 'd',
  'hours': 'h',
  'hour': 'h',
  'Hours': 'h',
  'Hour': 'h',
  'HOURS': 'h',
  'HOUR': 'h',
  'HH': 'h',
  'hr': 'h',
  'hh': 'h',
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
  'SS': 's',
  'ss': 's',
  'seconds': 's',
  'second': 's',
  'Seconds': 's',
  'Second': 's',
  'SECONDS': 's',
  'SECOND': 's',
  'sec': 's',
  'WW': 'w',
  'Y': 'y',
  'y': 'y',
  'M': 'm',
  'm': 'm',
  'e': 'e',
  'E': 'e',
  'D': 'd',
  'd': 'd',
  'H': 'h',
  'h': 'h',
  'n': 'i',
  'i': 'i',
  's': 's',
  'S': 's',
  'W': 'w',
  'w': 'w'
};



const dt = (value: any, inputFormat: null|String = null) => {
};

dt.parse = parse;
dt.time = () => {};
dt.date = () => {};
dt.dateTime = () => {};
dt.duration = () => {};
dt.zoned = () => {};
dt.monthDay = () => {};
dt.yearMonth = () => {};


export default dt;

