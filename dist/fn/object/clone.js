import isArray from '../type/isArray.js';
import isObject from '../type/isObject.js';
import extend from './extend.js';
/**
 * Creates and returns a perfect clone - but different - from the given object.
 *
 * @method   clone
 * @global
 * @example
 * ```javascript
 * let obj = {name: "Thomas"};
 * let objCopy = bbn.fn.clone(obj);
 * obj.name = "Julie";
 * // obj:     {name: "Julie"}
 * // objCopy: {name: "Thomas"}
 * ```
 * @memberof bbn.fn
 * @param    {Object} obj The source object
 * @returns  {Object} A new object
 */
export default function clone(obj) {
    if (isArray(obj)) {
        return obj.slice().map(function (a) {
            return typeof a === "object" ? clone(a) : a;
        });
    }
    if (isObject(obj)) {
        var o = Object.create(Object.getPrototypeOf(obj));
        return extend(true, o, obj);
    }
    return obj;
}
;
