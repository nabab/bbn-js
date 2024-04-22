import date from './date.js';
import dayjs from 'dayjs';
/**
 * Returns a date with SQL format.
 *
 * @method   dateSQL
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
 * @param    {Date|String} v
 * @param    {Boolean}     dayOnly Whether or not include the time in the date
 * @returns  {String}
 */
export default function dateSQL(v, dayOnly) {
    var value = date(v);
    if (value) {
        return dayjs(value).format('YYYY-MM-DD' + (dayOnly ? '' : ' HH:mm:ss'));
    }
}
;
