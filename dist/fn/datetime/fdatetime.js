import date from '../../date.js';
import isString from '../type/isString.js';
/**
 * @method   fdatetime
 * @todo     Add method description for fdatetime
 * @global
 * @memberof bbn.fn
 * @returns  {*}
 */
export default function fdatetime(d, wrong_result = false) {
    let r = date(d);
    if (!r.isValid) {
        return wrong_result && isString(wrong_result) ? wrong_result : '';
    }
    return r.fdate(false, true);
}
;
