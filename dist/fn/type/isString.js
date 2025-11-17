/**
 * Returns true if the given argument is a string;
 * @method   isString
 * @global
 * @example
 * ```javascript
 * bbn.fn.isString('bbn');
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isString(...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if ({}.toString.apply(a) !== "[object String]") {
            return false;
        }
    }
    return true;
}
;
