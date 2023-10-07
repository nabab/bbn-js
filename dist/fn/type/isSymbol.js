/**
 * Returns true if the given argument is a symbol;
 * @method   isSymbol
 * @global
 * @example
 * ```javascript
 * const sb = Symbol();
 * bbn.fn.isSymbol(sb);
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isSymbol = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if ({}.toString.apply(a) !== "[object Symbol]") {
            return false;
        }
    }
    return true;
};
export { isSymbol };
