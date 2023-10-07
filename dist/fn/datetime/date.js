import { isNumber } from '../type/isNumber.js';
import { substr } from '../string/substr.js';
import { isDate } from '../type/isDate.js';
/**
 * Returns a date object from the given argument.
 *
 * @method   date
 * @global
 *
 * @example
 * ``` javascript
 * //Mon Feb 11 2019 12:00:00 GMT+0100 (Central European Standard Time)
 * bbn.fn.date('2019/02/11')
 * ```
 *
 * @memberof bbn.fn
 * @param    {String|Number} v
 * @returns  {date}
 */
var date = function (v) {
    var d = false, t = typeof v;
    if (v === undefined) {
        return new Date();
    }
    if (t === 'number' || (isNumber(v) && v !== '')) {
        if (v < 10000000000) {
            v = v * 1000;
        }
        return new Date(v);
    }
    if (t === 'string') {
        if (v.length === 10) {
            return new Date(parseInt(substr(v, 0, 4)), parseInt(substr(v, 5, 2)) - 1, parseInt(substr(v, 8, 2)), 12);
        }
        else if (v.length === 19) {
            return new Date(parseInt(substr(v, 0, 4)), parseInt(substr(v, 5, 2)) - 1, parseInt(substr(v, 8, 2)), parseInt(substr(v, 11, 2)), parseInt(substr(v, 14, 2)), parseInt(substr(v, 17, 2)));
        }
    }
    else if (isDate(v)) {
        return v;
    }
    return d;
};
export { date };
