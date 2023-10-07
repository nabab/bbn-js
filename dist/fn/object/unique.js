/**
 * Removes duplicate values from an array.
 *
 * Takes an input array and returns a new array without duplicate values.
 *
 * @method   unique
 * @global
 * @example
 * ```javascript
 * bbn.fn.unique(["a", "b", "a", "b", "a", "b", "c", "c", "d"]);
 * // ["a", "b", "c", "d"]
 * ```
 * @memberof bbn.fn
 * @param    {Array} arr
 * @returns  {Array}
 */
var unique = function (arr) {
    return arr.filter(function (el, index, ar) {
        return index === ar.indexOf(el);
    });
};
export { unique };
