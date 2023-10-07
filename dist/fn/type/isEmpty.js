import { isArray } from './isArray.js';
import { numProperties } from '../object/numProperties.js';
/**
 * Checks if the argument is empty or not.
 * @method   isEmpty
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.isEmpty({});
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isEmpty({test : 1});
 * //false
 * ```
 * @example
 * ```javascript
 * bbn.fn.isEmpty([]);
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isEmpty(['test']);
 * //false
 * ```
 * @example
 * ```javascript
 * bbn.fn.isEmpty('');
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isEmpty('test');
 * //false
 * ```
 * @memberof bbn.fn
 * @param    {*} obj
 * @returns  {Boolean}
 */
var isEmpty = function (obj) {
    if (!obj) {
        return true;
    }
    if (isArray(obj)) {
        return obj.length ? false : true;
    }
    if (typeof obj === "object") {
        if (numProperties(obj)) {
            return false;
        }
        return true;
    }
    return false;
};
export { isEmpty };
