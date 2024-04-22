import isObject from '../type/isObject.js';
import iterate from '../loop/iterate.js';
/**
 * @ignore
 * @method   addStyle
 * @todo     Add method description for addStyle
 * @global
 * @memberof bbn.fn
 * @param    {HTMLElement} ele
 * @param    {Object}      o
 * @returns  {*}
 */
export default function addStyle(ele, o) {
    if (isObject(o)) {
        iterate(o, function (v, k) {
            ele.style[k] = v;
        });
    }
}
;
