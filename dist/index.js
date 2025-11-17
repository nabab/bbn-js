import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar.js';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
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
dayjs.extend(customParseFormat);
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
import com from './com.js';
import db from './db.js';
import fn from './fn.js';
import date from './date.js';
const bbn = {
    version: "1.0.1",
    opt: {
        _cat: {}
    },
    app: {},
    _,
    $,
    lng,
    var: vars,
    date,
    com,
    env,
    db,
    fn,
    info: [
        {
            value: 'ajax',
            label: 'Loading and streaming',
            description: 'Functions related to Ajax requests',
            icon: 'nf nf-fa-rocket',
        }, {
            value: 'browser',
            label: 'Browser-only',
            description: 'Functions that can only be run in the browser',
            icon: 'nf nf-fa-desktop',
        }, {
            value: 'convert',
            label: 'Conversion',
            description: 'Functions related to data conversion',
            icon: 'nf nf-fa-exchange',
        }, {
            value: 'datetime',
            label: 'Date and time',
            description: 'Functions related to dates and times',
            icon: 'nf nf-fa-calendar',
        }, {
            value: 'form',
            label: 'Form manipulation',
            description: 'Functions related to form manipulation and validation',
            icon: 'nf nf-fa-edit',
        }, {
            value: 'html',
            label: 'HTML manipulation',
            description: 'Functions related to HTML manipulation and DOM interaction',
            icon: 'nf nf-fa-html5',
        }, {
            value: 'loop',
            label: 'Looping',
            description: 'Functions related to looping through arrays and objects',
            icon: 'nf nf-fa-repeat',
        }, {
            value: 'misc',
            label: 'Miscellaneous',
            description: 'Miscellaneous functions that do not fit into other categories',
            icon: 'nf nf-fa-cubes',
        }, {
            value: 'object',
            label: 'Object manipulation',
            description: 'Functions related to object manipulation and inspection',
            icon: 'nf nf-fa-object_group',
        }, {
            value: 'phone',
            label: 'Phone and contact',
            description: 'Functions related to phone numbers and contact information',
            icon: 'nf nf-fa-phone',
        }, {
            value: 'string',
            label: 'String manipulation',
            description: 'Functions related to string manipulation and formatting',
            icon: 'nf nf-fa-text_height'
        }, {
            value: 'style',
            label: 'Styling and layout',
            description: 'Functions related to styling and layout management',
            icon: 'nf nf-fa-paint_brush',
        }, {
            value: 'type',
            label: 'Type checking',
            description: 'Functions related to type checking and validation',
            icon: 'nf nf-fa-check_square',
        }
    ]
};
if ('undefined' !== typeof window) {
    window.dayjs = dayjs;
    window.bbn = bbn;
}
export { bbn as default, bbn, dayjs };
