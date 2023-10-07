import { each } from '../loop/each.js';
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
var setProperty = function (obj, prop, value, force) {
    if (typeof obj === 'object' && typeof prop === 'string') {
        var o_1 = obj;
        var bits_1 = prop.split('.');
        each(bits_1, function (v, i) {
            if (!o_1) {
                if (!force) {
                    throw new Error(bbn._('The object is invalid'));
                }
                o_1 = {};
            }
            if (bits_1.length - 1 === i) {
                o_1[v] = value;
            }
            else {
                o_1 = o_1[v];
            }
        });
    }
};
export { setProperty };
