/**
 * Removes all unacceptable characters in a DOM node.
 *
 * @method   sanitize
 * @global
 *
 * @example
 * ```javascript
 * //"this_is_a_test"
 * bbn.fn.sanitize("this&is_$a^test");
 * ```
 *
 * @memberof bbn.fn
 * @returns  {String} str
 */
declare const sanitize: (str: any, separator?: string) => any;
export { sanitize };
