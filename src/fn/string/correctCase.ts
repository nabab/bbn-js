/**
 * Converts the first character of the string to uppercase.
 *
 * @method   correctCase
 * @global
 *
 * @example
 * ```javascript
 * //"This is a test"
 * bbn.fn.correctCase("this is a test");
 * ```
 *
 * @memberof bbn.fn
 * @param    {STring} str
 * @returns  {String}
 */
const correctCase = function (str) {
  return str.replace(/[A-z]{1}/, (c) => c.toUpperCase());
};

export { correctCase };
