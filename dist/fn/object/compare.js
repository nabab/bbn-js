import { isEmpty } from '../type/isEmpty.js';
import { removeAccents } from '../string/removeAccents.js';
import { isNull } from '../type/isNull.js';
import { isObject } from '../type/isObject.js';
import { isSame } from '../type/isSame.js';
/**
 * Performs a comparison between two values based on the given operator and returns a boolean.
 *
 * It is internally used by all the filtering functions; the available operators are:
 * - _===_, _=_, _equal_, _eq_, _is_, which stand for __===__
 * - _!==_, _notequal_, _neq_, _isnot_, which stand for __!==__
 * - _!=_, _different_, which stand for __!=__
 * - _contains_, _contain_, _icontains_, _icontain_
 * - _starts_, _start_
 * - _startswith_, _startsi_, _starti_, _istarts_, _istart_
 * - _endswith_, _endsi_, _endi_, _iends_, _iend_
 * - _like_
 * - _gt_, _>_, which stand for __>__
 * - _lt_, _<_, which stand for __<__
 * - _gte_, _>=_, which stand for __>=__
 * - _lte_, _<=_, which stand for __<=__
 * - _isnull_, which stands for __=== null__
 * - _isnotnull_, which stands for __!== null__
 * - _isempty_, which stands for __=== ''__
 * - _isnotempty_, which stands for __!== ''__
 *
 * The defaut operator (if none is given) is __==__ .
 *
 * @method   compare
 * @global
 * @example
 * ```javascript
 * bbn.fn.compare('foo', 'bar', 'eq');
 * // false
 * ```
 * @example
 * ```javascript
 * bbn.fn.compare('foo', 'bar', 'neq');
 * // true
 * ```
 * @example
 * ```javascript
 * bbn.fn.compare(3, 1, '>');
 * // true
 * ```
 * @example
 * ```javascript
 * bbn.fn.compare("JavaScript", "script", 'contain');
 * // true
 * ```
 * @memberof bbn.fn
 * @param    {String|Number} v1
 * @param    {String|Number} v2
 * @param    {String}        operator
 * @returns  {Boolean}       True if the values' comparison complies with the operator, false otherwise
 */
var compare = function (v1, v2, operator) {
    switch (operator) {
        case '===':
        case '=':
        case 'equal':
        case 'eq':
        case 'is':
            return v1 === v2;
        case '!==':
        case 'notequal':
        case 'neq':
        case 'isnot':
            return v1 !== v2;
        case '!=':
        case 'different':
            return v1 != v2;
        case 'contains':
        case 'contain':
        case 'icontains':
        case 'icontain':
            if (isEmpty(v1) || isEmpty(v2)) {
                return false;
            }
            return removeAccents(v1).toLowerCase().indexOf(removeAccents(v2).toLowerCase()) !== -1;
        case 'doesnotcontain':
        case 'donotcontain':
            if (isNull(v1) || isNull(v2)) {
                return true;
            }
            return removeAccents(v1.toLowerCase()).indexOf(removeAccents(v2.toLowerCase())) === -1;
        case 'starts':
        case 'start':
            if (isNull(v1) || isNull(v2)) {
                return false;
            }
            if (typeof v1 !== 'string') {
                v1 = v1.toString() || '';
            }
            if (typeof v2 !== 'string') {
                v2 = v2.toString() || '';
            }
            return v1.indexOf(v2) === 0;
        case 'startswith':
        case 'startsi':
        case 'starti':
        case 'istarts':
        case 'istart':
            if (isNull(v1) || isNull(v2)) {
                return false;
            }
            return removeAccents(v1).toLowerCase().indexOf(removeAccents(v2).toLowerCase()) === 0;
        case 'endswith':
        case 'endsi':
        case 'endi':
        case 'iends':
        case 'iend':
            if (isNull(v1) || isNull(v2)) {
                return false;
            }
            return v1.lastIndexOf(v2) === v1.length - v2.length;
        case 'like':
            if (isNull(v1) || isNull(v2)) {
                return false;
            }
            return removeAccents(v1).toLowerCase() === removeAccents(v2).toLowerCase();
        case 'gt':
        case '>':
            return v1 > v2;
        case 'gte':
        case '>=':
            return v1 >= v2;
        case 'lt':
        case '<':
            return v1 < v2;
        case 'lte':
        case '<=':
            return v1 <= v2;
        case 'isnull':
            return v1 === null;
        case 'isnotnull':
            return v1 !== null;
        case 'isempty':
            return v1 === '';
        case 'isnotempty':
            return v1 !== '';
        case '==':
            if (isObject(v1, v2)) {
                return isSame(v1, v2);
            }
        default:
            return v1 == v2;
    }
};
export { compare };
