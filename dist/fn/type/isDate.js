/**
 * Returns true if the given argument is a date object.
 * @method   isDate
 * @global
 * @example
 * ```javascript
 * let date = new Date();
 * bbn.fn.isDate(date);
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isDate('16/04/2020');
 * //false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isDate = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if ({}.toString.apply(a) !== "[object Date]") {
            return false;
        }
    }
    return true;
};
export { isDate };
