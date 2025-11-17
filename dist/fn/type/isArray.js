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
export default function isArray(...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if (!Array.isArray(a)) {
            return false;
        }
    }
    return true;
}
;
