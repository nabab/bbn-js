import { isObject } from '../type/isObject.js';
/**
 * Returns a new object made of the properties from all the given objects.
 *
 * Compared to bbn.fn.extend this still treats the arguments from left to right
 * but without overwriting existing properties, and returning a new object.
 *
 * @method   extendOut
 * @global
 * @example
 * ```javascript
 * //{field1: 1, field2: 2, field3: 3, items: {item: 0, item1: 1, item2: 2}, field4: 4}
 * bbn.fn.extendOut({field1: 1, field2: 2, field3: 3, items: {item: 0}}, {field4: 4, items: {item1: 1, item2: 2}});
 * ```
 * @memberof bbn.fn
 * @returns  {Object}
 */
var extendOut = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var r = null;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (!isObject(a)) {
            throw new Error("Each argument for extendOut must be an object, " + typeof a + " given");
        }
        if (r === null) {
            r = a;
        }
        else {
            for (var n in a) {
                if (isObject(r[n], a[n])) {
                    extendOut(r[n], a[n]);
                }
                else if (r[n] === undefined) {
                    r[n] = a[n];
                }
            }
        }
    }
    return r;
};
export { extendOut };
