import { date } from './date.js';
import { isDate } from '../type/isDate.js';
import { isString } from '../type/isString.js';
/**
 * @method   ftime
 * @todo     Add method description for ftime
 * @global
 * @memberof bbn.fn
 * @returns  {*}
 */
var ftime = function (d, wrong_result) {
    var r = date(d);
    if (!isDate(r)) {
        return wrong_result && isString(wrong_result) ? wrong_result : '';
    }
    if (undefined !== dayjs) {
        return dayjs(r).calendar();
    }
    return r.toLocaleDateString();
};
export { ftime };
