/**
 * Moves an element to a different position within the given array.
 *
 * The same array is returned, with its elements reordered according to the executed movement.
 *
 * @method   move
 * @global
 * @todo     Finish doc
 * @example
 * ```javascript
 * bbbn.fn.move([
 *   {movie: "Brazil", year: 1985},
 *   {movie: "Donnie Darko", year: 2001},
 *   {movie: "Out of Africa", year: 1985}
 * ], 1, 2);
 * // [
 * //   {movie: "Brazil", year: 1985},
 * //   {movie: "Out of Africa", year: 1985},
 * //   {movie: "Donnie Darko", year: 2001}
 * // ]
 * ```
 *  @example
 * ```javascript
 * bbn.fn.move([1, 2, 3, 4], 3, 0);
 * // [4, 1, 2, 3]
 * ```
 * @memberof bbn.fn
 * @param    {Array}  arr       The array
 * @param    {Number} fromIndex The index of the element to move
 * @param    {Number} toIndex   The future index of the element
 * @returns  {Array}  The same array, with elements repositionned.
 */
export default function move(arr: any[], fromIndex: number, toIndex: number): any[];
