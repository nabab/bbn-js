import isNull from './isNull.js';
/**
 * Returns true if the given argument is not null or type object or array.
 * @method   isValue
 * @deprecated
 * @see bbn.fn.isPrimitive
 * @example
 * ```javascript
 * bbn.fn.isValue('myString');
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isValue(6);
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isValue([80,10,22]);
 * //false
 * ```
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isValue() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (typeof a === "object" && !isNull(a)) {
            return false;
        }
    }
    return true;
}
;
