/**
 * Sorts an array of objects based on a set of properties.
 *
 * The resulting array is the same object, the order is based on _compareValues function
 * applied for each given properties in orders argument.
 *
 * @method   multiorder
 * @global
 * @example
 * ```javascript
 * let ar = [
 *   {movie: "Brazil", year: 1985},
 *   {movie: "Donnie Darko", year: 2001},
 *   {movie: "Out of Africa", year: 1985},
 *   {movie: "Ran", year: 1985},
 *   {movie: "Back to the future", year: 1985},
 *   {movie: "Barry Lindon", year: 1976}
 * ];
 * bbn.fn.multiorder(ar, [
 *   {field: "year", dir: "desc"},
 *   {field: "movie", dir: "asc"}
 * ]);
 * // [
 * //   {movie: "Donnie Darko", year: 2001},
 * //   {movie: "Back to the future", year: 1985},
 * //   {movie: "Brazil", year: 1985},
 * //   {movie: "Out of Africa", year: 1985},
 * //   {movie: "Ran", year: 1985},
 * //   {movie: "Barry Lindon", year: 1976}
 * // ]
 * bbn.fn.multiorder(ar, {year: "desc", movie: "asc"});
 * // Same result with object shortcut
 * ```
 * @memberof bbn.fn
 * @param    {Array}        arr    The array to order
 * @param    {Array|Object} orders The properties and directions (asc, desc) to order by
 * @returns  {Array}        The same array (arr), ordered differently
 */
export default function multiorder(arr: object[], orders: any): object[];
