import date from '../../date.js';
import isString from '../type/isString.js';
const bbn = {
    _: st => st
};
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
export default function calendar(d, wrong_result = false) {
    let r = date(d);
    if (!r.isValid) {
        return wrong_result && isString(wrong_result) ? wrong_result : '';
    }
    return r.fdate();
}
;
