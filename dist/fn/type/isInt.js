/**
 * Returns true if the given argument is an integer
 * @method   isInt
 * @global
 * @example
 * ```javascript
 * bbn.fn.isInt(5);
 * // true
 * bbn.fn.isInt(0.5);
 * // false
 * bbn.fn.isInt("hello");
 * // false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
const isInt = function (...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if (!Number.isInteger(a)) {
            return false;
        }
    }
    return true;
};
export { isInt };
