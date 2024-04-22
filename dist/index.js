import axios from 'axios';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar.js';
import dayOfYear from 'dayjs/plugin/dayOfYear.js';
import duration from 'dayjs/plugin/duration.js';
import isBetween from 'dayjs/plugin/isBetween.js';
import isLeapYear from 'dayjs/plugin/isLeapYear.js';
import isoWeek from 'dayjs/plugin/isoWeek.js';
import localeData from 'dayjs/plugin/localeData.js';
import localizedFormat from 'dayjs/plugin/localizedFormat.js';
import minMax from 'dayjs/plugin/minMax.js';
import quarterOfYear from 'dayjs/plugin/quarterOfYear.js';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import timezone from 'dayjs/plugin/timezone.js';
import updateLocale from 'dayjs/plugin/updateLocale.js';
import utc from 'dayjs/plugin/utc.js';
import weekday from 'dayjs/plugin/weekday.js';
import weekOfYear from 'dayjs/plugin/weekOfYear.js';
dayjs.extend(calendar);
dayjs.extend(dayOfYear);
dayjs.extend(duration);
dayjs.extend(isBetween);
dayjs.extend(isLeapYear);
dayjs.extend(isoWeek);
dayjs.extend(localeData);
dayjs.extend(localizedFormat);
dayjs.extend(minMax);
dayjs.extend(quarterOfYear);
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(updateLocale);
dayjs.extend(utc);
dayjs.extend(weekday);
dayjs.extend(weekOfYear);
import _ from './_.js';
import $ from './$.js';
import lng from './lng.js';
import vars from './vars.js';
import env from './env.js';
import db from './db.js';
import fn from './fn.js';
var bbn = {
    version: "1.0.1",
    opt: {
        _cat: {}
    },
    app: {},
    _: _,
    $: $,
    lng: lng,
    var: vars,
    env: env,
    db: db,
    fn: fn
};
if ('undefined' !== typeof window) {
    window.axios = axios;
    window.dayjs = dayjs;
    window.bbn = bbn;
}
export { bbn as default, bbn, dayjs, axios };
