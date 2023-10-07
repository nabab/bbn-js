/**
 * Returns a string escaped.
 *
 * To escape the string by reducing the ambiguity between quotation marks and other characters used.
 *
 * @method   escapeRegExp
 * @global
 *
 * @example
 * ```javascript
 * //"this\/is\/a\/test\/string"
 * bbn.fn.escapeRegExp("this/is/a/test/string");
 * ```
 * @memberof bbn.fn
 * @param    {String} str
 * @returns  {String} string with escape
 */
declare const escapeRegExp: (str: any) => any;
export { escapeRegExp };
