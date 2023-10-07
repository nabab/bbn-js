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
const isPromise = function (...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if ({}.toString.apply(a) !== "[object Promise]") {
            return false;
        }
    }
    return true;
};
export { isPromise };
