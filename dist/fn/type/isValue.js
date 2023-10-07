import { isNull } from './isNull';
/**
 * Returns true if the given argument is not null or type object or array.
 * @method   isValue
 * @deprecated
 * @see bbn.fn.isPrimitive
 * @example
 * ```javascript
 * bbn.fn.isValue('myString');
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isValue(6);
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isValue([80,10,22]);
 * //false
 * ```
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
const isValue = function (...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if (typeof a === "object" && !isNull(a)) {
            return false;
        }
    }
    return true;
};
export { isValue };
