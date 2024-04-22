/**
 * Returns true if the given argument is a promise.
 * @global
 * @example
 * ```javascript
 * bbn.fn.isPromise(bbn.fn.post('myUrl'));
 * // true
 * bbn.fn.isPromise(setTimeout(() => {}))
 * // false
 * bbn.fn.isPromise(myVueObject.$nextTick());
 * // true
 * ```
 * @method   isFunction
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isPromise() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if ({}.toString.apply(a) !== "[object Promise]") {
            return false;
        }
    }
    return true;
}
;
