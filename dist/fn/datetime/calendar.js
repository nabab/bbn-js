import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear.js';
import dayjs_plugin_calendar from 'dayjs/plugin/calendar.js';
import fdate from './fdate.js';
import date from './date.js';
import isDate from '../type/isDate.js';
import isString from '../type/isString.js';
var bbn = {
    _: function (st) { return st; }
};
dayjs.extend(dayjs_plugin_calendar);
dayjs.extend(isLeapYear);
/**
 * Returns a date relative to the current day.
 *
 * @method   calendar
 * @global
 *
 * @example
 * ``` javascript
 * //"2020-04-16 16:15:23"
 * let date = new Date();
 * bbn.fn.dateSQL(date,false);
 * ```
 *
 * @memberof bbn.fn
 * @param    {Date|String} d
 * @param    {String | Boolean} wrong_result Whether or not include the time in the date
 * @returns  {String}
 */
export default function calendar(d, wrong_result) {
    if (wrong_result === void 0) { wrong_result = false; }
    if (undefined === dayjs) {
        return fdate(d, wrong_result);
    }
    var r = date(d);
    if (!isDate(r)) {
        return wrong_result && isString(wrong_result) ? wrong_result : '';
    }
    return dayjs(r).calendar(null, {
        sameDay: '[' + bbn._('Today') + ']',
        nextDay: '[' + bbn._('Tomorrow') + ']',
        nextWeek: 'ddd D',
        lastDay: '[' + bbn._('Yesterday') + ']',
        lastWeek: 'ddd D',
        sameElse: 'L',
    });
}
;
