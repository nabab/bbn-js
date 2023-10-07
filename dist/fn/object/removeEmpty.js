import { isArray } from '../type/isArray.js';
import { isObject } from '../type/isObject.js';
import { numProperties } from './numProperties.js';
/**
 * Returns a new array, having removed all elements deemed empty from the given array.
 *
 * Removes all the elements which are empty, i.e. false, 0, null, '', NaN, or undefined.
 *
 * @method   removeEmpty
 * @global
 * @example
 * ```javascript
 * bbn.fn.removeEmpty([{prop1: 10, prop2: 20}, '', {}, null, 1, undefined, 0, false, 25]);
 * // [{prop1: 10, prop2: 20}, 1, 25]
 * ```
 * @memberof bbn.fn
 * @param    {Array} arr
 * @returns  {Array}
 */
var removeEmpty = function (arr) {
    var tmp = [];
    if (isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
            var ok = false;
            if (arr[i]) {
                if (isArray(arr[i])) {
                    if (arr[i].length) {
                        ok = true;
                    }
                }
                else if (isObject(arr[i])) {
                    if (numProperties(arr[i])) {
                        ok = true;
                    }
                }
                else {
                    ok = true;
                }
            }
            if (ok) {
                tmp.push(arr[i]);
            }
        }
    }
    return tmp;
};
export { removeEmpty };
