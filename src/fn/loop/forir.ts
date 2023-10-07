import { isArray } from '../type/isArray' ;
import { isNumber } from '../type/isNumber' ;

/**
 * Executes the provided function on each element of the given array, going backward.
 *
 * A maximum and a minimum value can be provided, within the boundaries of the
 * array's indexes. Returning false will stop the loop.
 *
 * @method   forir
 * @global
 * @example
 * ```javascript
 * let res = 0;
 * bbn.fn.forir([4, 5, 5, 10, 1, 2], d => {
 *   res += d;
 * }, 4, 2);
 * // res = 16
 * ```
 * @example
 * ```javascript
 * let res = 0;
 * bbn.fn.forir([4, 5, 5, 10, 1, 2], d => {
 *   if (res >= 20) {
 *     return false;
 *   }
 *   res += d;
 * });
 * // res = 23
 * ```
 * @memberof bbn.fn
 * @param    {Array}     arr The array to loop on
 * @param    {Function}  fn  The function, gets the array's element and the index as arguments
 * @param    {Number}    max The index to which the loop will stop
 * @param    {Number}    min The index at which the loop will start
 * @returns  {undefined}
 */
const forir = function (
  arr,
  fn,
  max = arr.length - 1,
  min = 0
) {
  if (isArray(arr)) {
    let realMax = arr.length - 1;
    if (!isNumber(max) || !(0 < max && max <= realMax)) {
      max = realMax;
    }

    if (!isNumber(min) || !(0 <= min && min < realMax) || min > max) {
      min = 0;
    }

    for (let i = max; i >= min; i--) {
      if (fn(arr[i], i) === false) {
        return;
      }
    }
  }
};

export { forir };
