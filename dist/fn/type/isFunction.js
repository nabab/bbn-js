/**
 * Returns true if the given argument is a function.
 * @global
 * @example
 * ```javascript
 * bbn.fn.isFunction(() => {
 *  alert('Hello world');
 * });
 * //true
 * ```
 * @method   isFunction
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isFunction() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var obj = args_1[_a];
        if (!(obj && obj.constructor && obj.call && obj.apply)) {
            return false;
        }
    }
    return true;
}
;
