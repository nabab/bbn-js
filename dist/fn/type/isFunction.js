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
const isFunction = function (...args) {
    if (!args.length)
        return false;
    for (let obj of args) {
        if (!(obj && obj.constructor && obj.call && obj.apply)) {
            return false;
        }
    }
    return true;
};
export { isFunction };
