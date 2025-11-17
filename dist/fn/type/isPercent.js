/**
 * Returns true if the given argument is a percentage.
 * @method   isPercent
 * @global
 * @example
 * ```javascript
 * bbn.fn.isPercent('5%');
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isPercent(...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if (typeof a !== "string" || !a.match(/^\d+(?:\.\d+)?%$/)) {
            return false;
        }
    }
    return true;
}
;
