/**
 * Returns true if the given argument is a percentage.
 * @method   isPercent
 * @global
 * @example
 * ```javascript
 * bbn.fn.isPercent('5%');
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isPercent = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (typeof a !== "string" || !a.match(/^\d+(?:\.\d+)?%$/)) {
            return false;
        }
    }
    return true;
};
export { isPercent };
