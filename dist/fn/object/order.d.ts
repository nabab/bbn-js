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
declare const order: (arr: any, prop: any, dir?: string) => any;
export { order };
