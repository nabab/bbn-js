import { Temporal } from 'temporal-polyfill';
import bbnDtDateTime from './dt/classes/dateTime.js';
import bbnDtDate from './dt/classes/date.js';
import bbnDtTime from './dt/classes/zoned.js';
import bbnDtYearMonth from './dt/classes/yearMonth.js';
import bbnDtMonthDay from './dt/classes/monthDay.js';
import bbnDtZoned from './dt/classes/zoned.js';
import bbnDtDuration from './dt/classes/duration.js';
import _ from './_.js';
import parse from './dt/functions/parse.js';
import guessFormat from './dt/functions/guessFormat.js';
const patterns = [
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
];
const units = [
    ['y', "year", 365 * 24 * 60 * 60 * 1000],
    ['m', "month", 30 * 24 * 60 * 60 * 1000],
    ['w', "week", 7 * 24 * 60 * 60 * 1000],
    ['d', "day", 24 * 60 * 60 * 1000],
    ['h', "hour", 60 * 60 * 1000],
    ['i', "minute", 60 * 1000],
    ['s', "second", 1000]
];
const unitsMap = {
    'y': 'Year',
    'm': 'Month',
    'd': 'Date',
    'w': 'Week',
    'h': 'Hours',
    'i': 'Minutes',
    's': 'Seconds'
};
const formatsMap = {
    'y': 'YYYY',
    'm': 'MM',
    'd': 'DD',
    'e': 'EE',
    'w': 'WW',
    'h': 'HH',
    'i': 'II',
    's': 'SS'
};
const unitsCorrespondence = {
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
const dt = (value, inputFormat = null, cls = 'auto') => {
    if (!value) {
        return new bbnDtDateTime();
    }
    if (typeof value === 'string') {
        if (inputFormat) {
            let parsed;
            try {
                parsed = parse(value, inputFormat, cls, true);
                return parsed;
            }
            catch (e) { }
        }
        else {
            const format = guessFormat(value);
            if (format) {
                return parse(value, format, cls);
            }
            else {
                throw new Error(_('Could not guess the date format for value: %s', value));
            }
        }
    }
    if (typeof value === 'number') {
        return new bbnDtDateTime(value);
    }
    else if (value.__isBbnDt) {
        return value;
    }
    else if (value instanceof Date) {
        const d = value;
        return new bbnDtDateTime(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
    }
    else if (value instanceof Temporal.PlainDateTime) {
        return new bbnDtDateTime(value);
    }
    else if (value instanceof Temporal.PlainDate) {
        return new bbnDtDate(value);
    }
    else if (value instanceof Temporal.PlainTime) {
        return new bbnDtTime(value);
    }
    else if (value instanceof Temporal.PlainYearMonth) {
        return new bbnDtYearMonth(value);
    }
    else if (value instanceof Temporal.PlainMonthDay) {
        return new bbnDtMonthDay(value);
    }
    else if (value instanceof Temporal.ZonedDateTime) {
        return new bbnDtZoned(value);
    }
    else if (value instanceof Temporal.Duration) {
        return new bbnDtDuration(value);
    }
    else {
        bbn.fn.log(value);
        throw new Error(_('Invalid date value'));
    }
    //throw new Error(_('Invalid date value: %s', value));
};
dt.locales = Object.create(null);
dt.parse = parse;
dt.guessFormat = guessFormat;
dt.time = () => { };
dt.date = () => { };
dt.dateTime = () => { };
dt.duration = (amount, unit) => {
    if (amount instanceof Temporal.Duration) {
        return new bbnDtDuration(amount);
    }
    return bbnDtDuration.fromUnit(amount, unit);
};
dt.zoned = () => { };
dt.monthDay = () => { };
dt.yearMonth = () => { };
export default dt;
