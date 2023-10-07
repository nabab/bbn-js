/**
 * Returns a random String with random lenght,
 *
 * Generates a random string from the length of the random number,
 * taken from a range of numbers providing either only the minimum or also the maximum as arguments.
 *
 * @method   randomString
 * @global
 *
 * @example
 * ```javascript
 * //"U7xXO0Xb"
 * bbn.fn.randomString(3,10);
 * ```
 *
 * @example
 * ```javascript
 * //"H8F"
 * bbn.fn.randomString(3);
 * ```
 *
 * @memberof bbn.fn
 * @param    {Number} length
 * @param    {String} chars
 * @returns  {String}
 */
declare const randomString: (min?: number, max?: string | number, types?: string) => string;
export { randomString };
