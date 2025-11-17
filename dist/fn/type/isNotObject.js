import isNull from './isNull.js';
/**
 * Returns true if the given argument is not null or type object or array.
 * @method   isNotObject
 * @see bbn.fn.isPrimitive
 * @example
 * ```javascript
 * bbn.fn.isNotObject('myString');
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isNotObject(6);
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isNotObject([80,10,22]);
 * //false
 * ```
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isNotObject(...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if (typeof a === "object" && !isNull(a)) {
            return false;
        }
    }
    return true;
}
;
