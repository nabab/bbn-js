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
const isDate = function (...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if ({}.toString.apply(a) !== "[object Date]") {
            return false;
        }
    }
    return true;
};
export { isDate };
