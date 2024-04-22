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
 * @param    {String} props
 * @returns  {*}      The property's value or undefined
 */
export default function getProperty(obj) {
    var props = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        props[_i - 1] = arguments[_i];
    }
    if (typeof obj === 'object') {
        var arr = [];
        if (props.length === 1 && typeof props[0] === 'string') {
            arr.push.apply(arr, props[0].split('.'));
        }
        return arr.reduce(function (o, i) {
            if (o) {
                return o[i];
            }
            return undefined;
        }, obj);
    }
}
;
