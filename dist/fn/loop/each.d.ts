/**
 * Executes the provided function on each element of the given array.
 *
 * Returning false will stop the loop.
 *
 * @method   each
 * @global
 * @example
 * ```javascript
 * let res = 0;
 * bbn.fn.each([4, 5, 5, 10, 1, 2], d => {
 *   res += d;
 * });
 * // res = 27
 * ```
 * @example
 * ```javascript
 * let res = 0;
 * bbn.fn.each([4, 5, 5, 10, 1, 2], d => {
 *   if (res >= 20) {
 *     return false;
 *   }
 *   res += d;
 * });
 * // res = 24
 * ```
 * @memberof bbn.fn
 * @param    {*}     arr The array to loop on
 * @param    {Function}  fn  The function, gets the array's element and the index as arguments
 * @returns  {[Array, Object, void]}
 */
export default function each(arr: any, fn: any): any;
