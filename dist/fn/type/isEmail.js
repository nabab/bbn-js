import isString from './isString.js';
/**
 * Intended to check if the argument provided is an e-mail address written correctly
 *
 * @method   isEmail
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.isEmail('test@testorg');
 * //false
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.isEmail('test@test.org');
 * //true
 * ```
 * @memberof bbn.fn
 * @param    {String} st
 * @returns  {Boolean}
 */
export default function isEmail() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var st = args_1[_a];
        if (!isString(st)) {
            return false;
        }
        if (!regex.test(st)) {
            return false;
        }
    }
    return true;
}
;
