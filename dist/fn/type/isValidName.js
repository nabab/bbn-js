import { isString } from "./isString.js";
/**
 * Returns true if the given value is a valid name for a function without checking in reserved words, false otherwise
 * @method   isValidName
 * @global
 * @example
 * ```javascript
 * bbn.fn.isValidName('$myFunc_tion')
 * // true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isValidName('7Y')
 * // false
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.isValidName('function')
 * // true
 * ```
 *
 * @memberof bbn.fn
 * @param    {String} st
 * @returns {Boolean}
 */
const isValidName = function (...args) {
    if (!args.length) {
        return false;
    }
    for (let arg of args) {
        if (!isString(arg) || !/^[$A-Z_][0-9A-Z_$]*$/i.test(arg)) {
            return false;
        }
    }
    return true;
};
export { isValidName };
