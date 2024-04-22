import getProperty from './getProperty.js';
import isString from '../type/isString.js';
import removeAccents from '../string/removeAccents.js';
import isDate from '../type/isDate.js';
/**
  * Compares the given property in the given objects and returns -1, 1, or 0 depending on their difference.
  *
  * This is only used as a sorting function by bbn.fn.order and bbn.fn.multiorder.
  *
  * @method   _compareValues
  * @global
  * @example
  * ```javascript
  * // Same value
  * bbn.fn._compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'value');
  * // 0
  * ```
  * @example
  * ```javascript
  * // First value smaller than second
  * bbn.fn._compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'year');
  * // -1
  * ```
  * @example
  * ```javascript
  * // First value greater than second
  * bbn.fn._compareValues({year: 2017, value: 2}, {year: 2016, value: 2}, 'year');
  * // 1
  * ```
  * @example
  * ```javascript
  * // First value is undefined
  * bbn.fn._compareValues({year: 2017}, {year: 2016, value: 2}, 'value');
  * // 1
  * ```
  * @memberof bbn.fn
  * @param    {Object} a    First object for comparison
  * @param    {Object} b    Second object for comparison
  * @param    {String} prop Property to compare
  * @param    {String} [dir=asc]  Direction of comparison (desc or asc by default)
  * @returns  {Number} Always either -1, 1, or 0
  */
export default function _compareValues(a, b, prop, dir) {
    if (dir === void 0) { dir = "asc"; }
    var va = getProperty(a, prop), vb = getProperty(b, prop), ta = (typeof va).toLowerCase(), tb = (typeof vb).toLowerCase();
    if (dir !== "asc" && isString(dir) && dir.toLowerCase() === "desc") {
        dir = "desc";
    }
    if (ta !== tb) {
        va = ta;
        vb = tb;
    }
    else {
        switch (ta) {
            case "string":
                va = removeAccents(va).toLowerCase();
                vb = removeAccents(vb).toLowerCase();
                break;
            case "boolean":
                va = va ? 1 : 0;
                vb = vb ? 1 : 0;
                break;
            case "object":
                if (isDate(va)) {
                    va = va.getTime();
                    vb = isDate(vb) ? vb.getTime() : 0;
                }
                break;
        }
    }
    if (va < vb) {
        return dir === "desc" ? 1 : -1;
    }
    if (va > vb) {
        return dir === "desc" ? -1 : 1;
    }
    return 0;
}
;
