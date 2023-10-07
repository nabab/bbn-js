import { date } from './date';
import { isDate } from '../type/isDate';
import { isString } from '../type/isString';
/**
 * @method   ftime
 * @todo     Add method description for ftime
 * @global
 * @memberof bbn.fn
 * @returns  {*}
 */
const ftime = function (d, wrong_result) {
    let r = date(d);
    if (!isDate(r)) {
        return wrong_result && isString(wrong_result) ? wrong_result : '';
    }
    if (undefined !== dayjs) {
        return dayjs(r).calendar();
    }
    return r.toLocaleDateString();
};
export { ftime };
