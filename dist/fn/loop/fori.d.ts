/**
 * Executes the provided function on each element of the given array.
 *
 * A minimum and a maximum value can be provided, within the boundaries of the
 * array's indexes. Returning false will stop the loop.
 *
 * @method   fori
 * @global
 * @example
 * ```javascript
 * let res = 0;
 * bbn.fn.fori([4, 5, 5, 10, 1, 2], d => {
 *   res += d;
 * }, 3);
 * // res = 24
 * ```
 * @example
 * ```javascript
 * let res = 0;
 * bbn.fn.fori([4, 5, 5, 10, 1, 2], d => {
 *   if (res >= 20) {
 *     return false;
 *   }
 *   res += d;
 * }, 4, 1);
 * // res = 20
 * ```
 * @memberof bbn.fn
 * @param    {Array}     arr The array to loop on
 * @param    {Function}  fn  The function, gets the array's element and the index as arguments
 * @param    {Number}    max The index to which the loop will stop
 * @param    {Number}    min The index at which the loop will start
 * @returns  {undefined}
 */
declare const fori: (arr: any, fn: any, max?: number, min?: number) => void;
export { fori };
