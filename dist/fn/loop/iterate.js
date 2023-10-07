import { removePrivateProp } from '../object/removePrivateProp';
/**
 * Executes the provided function on each property of the given object.
 *
 * @method   iterate
 * @global
 * @example
 * ```javascript
 * //["value1", 2]
 * let arr = [];
 * bbn.fn.iterate({field1: "value1", field2: 2}, (val, idx) => {
 *   arr.push(value);
 * });
 * ```
 * @memberof bbn.fn
 * @param    {(Object|Number)} obj       The object to loop on
 * @param    {Function}        fn        The function, gets the array's element and the index as arguments
 * @param    {Boolean}         noPrivate If set to true the _private_ properties won't be included
 * @param    {Boolean}         reverse   If set to true the order of the keys will be reversed
 * @returns  {Object}
 */
const iterate = function (obj, fn, noPrivate = false, reverse = false) {
    if (obj !== null && typeof obj === "object") {
        let iter = Object.keys(noPrivate ? removePrivateProp(obj) : obj);
        if (reverse) {
            iter.reverse();
        }
        for (let prop of iter) {
            if (fn(obj[prop], prop) === false) {
                break;
            }
        }
    }
    return obj;
};
export { iterate };
