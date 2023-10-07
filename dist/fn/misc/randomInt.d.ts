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
declare const randomInt: (min: number, max: number) => number;
export { randomInt };
