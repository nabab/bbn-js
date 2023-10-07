/**
 * Returns true if the given argument is a boolean
 * @method   isBoolean
 * @global
 * @example
 * ```javascript
 * const sb = true;
 * bbn.fn.isBoolean(sb); // true
 * const sb = 1;
 * bbn.fn.isBoolean(sb); // false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isBoolean = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (![true, false].includes(a)) {
            return false;
        }
    }
    return true;
};
export { isBoolean };
