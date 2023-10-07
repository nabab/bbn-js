/**
 * Returns the value of the given property from the given object.
 *
 * Looks for the given property in the given object, accepting dot (.) separator
 * for deep property access, and returns its value if found and undefined otherwise.
 *
 * @method   getProperty
 * @global
 * @example
 * ```javascript
 * bbn.fn.getProperty({a: 1, b: 2}, 'b');
 * // 2
 * ```
 * @example
 * ```javascript
 * bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.o.a');
 * // 33
 * ```
 * @example
 * ```javascript
 * bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.h.a');
 * // undefined
 * ```
 * @memberof bbn.fn
 * @param    {Object} obj
 * @param    {String} prop
 * @returns  {*}      The property's value or undefined
 */
var getProperty = function (obj, prop) {
    if (typeof obj === 'object' && typeof prop === 'string') {
        return prop.split('.').reduce(function (o, i) {
            if (o) {
                return o[i];
            }
            return undefined;
        }, obj);
    }
};
export { getProperty };
