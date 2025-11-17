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
export default function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
;
