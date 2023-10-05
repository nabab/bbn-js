/**
 * Returns a random integer.
 *
 * Generates and returns a random number in a range of numbers defined
 * by passed arguments a minimum and a maximum.
 *
 * @method   randomInt
 * @global
 *
 * @example
 * ```javascript
 * //56
 * bbn.fn.randomInt(1,100);
 * ```
 *
 * @memberof bbn.fn
 * @param    {Number} min
 * @param    {Number} max
 * @returns  {Number}
 */
const randomInt = function (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { randomInt };
