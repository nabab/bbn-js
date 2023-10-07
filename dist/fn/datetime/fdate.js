import { fdatetime } from './fdatetime.js';
import { date } from './date.js';
import { isDate } from '../type/isDate.js';
import { isString } from '../type/isString.js';
/**
 * @method   fdate
 * @todo     Add method description for fdate
 * @global
 * @memberof bbn.fn
 * @param    {String|Date} d
 * @param    {String}      wrong_result
 * @returns
 */
var fdate = function (d, wrong_result) {
    if (wrong_result === void 0) { wrong_result = false; }
    // Retro compatibility
    if (wrong_result === true) {
        return fdatetime(d);
    }
    var r = date(d);
    if (!isDate(r)) {
        return wrong_result && isString(wrong_result) ? wrong_result : '';
    }
    if (undefined !== dayjs) {
        return dayjs(r).format('L');
    }
    return r.toLocaleDateString();
};
export { fdate };
