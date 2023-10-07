import { isString } from './isString.js';
/**
 * Intended to check if the argument provided is a color.
 *
 * It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.
 *
 * @method   isColor
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.isColor("#FF0000")
 * //true
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.isColor("rgb 255, 0, 0");
 * //true
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.isColor("red");
 * //true
 * ```
 * @memberof bbn.fn
 * @param    {String} st
 * @returns  {Boolean}
 */
var isColor = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    var reg = new RegExp("^(#[a-f0-9]{6}|#[a-f0-9]{3}|rgb *( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *)|rgba *( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *)|black|green|silver|gray|olive|white|yellow|maroon|navy|red|blue|purple|teal|fuchsia|aqua)$", "i");
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var st = args_1[_a];
        if (!isString(st)) {
            return false;
        }
        if (!reg.test(st)) {
            return false;
        }
    }
    return true;
};
export { isColor };
