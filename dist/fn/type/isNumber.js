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
export default function isNumber(...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if (["boolean", "object", "symbol"].includes(typeof a) ||
            a === "" ||
            isNaN(a)) {
            return false;
        }
    }
    return true;
}
;
