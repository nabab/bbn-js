/**
 * Returns true if the given argument is an integer
 * @method   isInt
 * @global
 * @example
 * ```javascript
 * bbn.fn.isInt(5);
 * // true
 * bbn.fn.isInt(0.5);
 * // false
 * bbn.fn.isInt("hello");
 * // false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isInt = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (!Number.isInteger(a)) {
            return false;
        }
    }
    return true;
};
export { isInt };
