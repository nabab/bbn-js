import { _compareValues } from './_compareValues.js';
/**
 * Sorts an array of objects based on the given property.
 *
 * The resulting array is the same object, the order is based on _compareValues function.
 *
 * @method   order
 * @global
 * @example
 * ```javascript
 * bbn.fn.order([
 *   {movie: "Brazil", year: 1985},
 *   {movie: "Donnie Darko", year: 2001},
 *   {movie: "Barry Lindon", year: 1976}
 * ], 'year', 'DESC')
 * // [
 * //   {movie: "Donnie Darko", year: 2001},
 * //   {movie: "Brazil", year: 1985},
 * //   {movie: "Barry Lindon", year: 1976}
 * // ]
 * ```
 * @memberof bbn.fn
 * @param    {Array}  arr       The array to order
 * @param    {String} prop      The property on which the order is based
 * @param    {String} [dir=asc] The direction of the order (desc or asc by default)
 * @returns  {Array}
 */
var order = function (arr, prop, dir) {
    if (dir === void 0) { dir = 'asc'; }
    if (arr) {
        return arr.sort(function (a, b) {
            return _compareValues(a, b, prop, dir);
        });
    }
    return arr;
};
export { order };
