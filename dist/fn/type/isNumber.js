/**
 * Returns true if the given argument is a number
 * @method   isNumber
 * @global
 * @example
 * ```javascript
 * bbn.fn.isNumber(5);
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isNumber(0.5);
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isNumber = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (["boolean", "object", "symbol"].includes(typeof a) ||
            a === "" ||
            isNaN(a)) {
            return false;
        }
    }
    return true;
};
export { isNumber };
