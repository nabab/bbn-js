import { isString } from './isString.js';
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
var isValidName = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length) {
        return false;
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (!isString(arg) || !/^[$A-Z_][0-9A-Z_$]*$/i.test(arg)) {
            return false;
        }
    }
    return true;
};
export { isValidName };
