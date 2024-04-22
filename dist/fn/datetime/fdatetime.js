import date from './date.js';
import isDate from '../type/isDate.js';
import isString from '../type/isString.js';
/**
 * @method   fdatetime
 * @todo     Add method description for fdatetime
 * @global
 * @memberof bbn.fn
 * @returns  {*}
 */
export default function fdatetime(d, wrong_result) {
    if (wrong_result === void 0) { wrong_result = false; }
    var r = date(d);
    if (!isDate(r)) {
        return wrong_result && isString(wrong_result) ? wrong_result : '';
    }
    if (undefined !== dayjs) {
        //return dayjs(r).format('lll');
        return dayjs(r).calendar(null, {
            sameDay: '[' + bbn._('Today') + '] HH:mm',
            nextDay: '[' + bbn._('Tomorrow') + '] HH:mm',
            nextWeek: 'ddd D HH:mm',
            lastDay: '[' + bbn._('Yesterday') + '] HH:mm',
            lastWeek: 'ddd D HH:mm',
            sameElse: 'DD/MM/YYYY HH:mm',
        });
        //return dayjs(r).format("DD/MM/YYYY HH:mm")
    }
    return r.toLocaleDateString();
}
;
