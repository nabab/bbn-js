/**
 * Returns true if the given argument is array.
 * @method   isArray
 * @global
 * @example
 * ```javascript
 * bbn.fn.isArray([5,2,6]);
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (!Array.isArray(a)) {
            return false;
        }
    }
    return true;
}
;
