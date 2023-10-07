/**
 * Replaces the html <br> tag with new line characters '\ n' if present in the string.
 *
 * @method   br2nl
 * @global
 *
 * @example
 * ```javascript
 * //"hello
 * //world!"
 * bbn.fn.br2nl('hello <br> world!')
 * ```
 *
 * @memberof bbn.fn
 * @param    string st
 * @returns  {String}
 */
declare const br2nl: (st: any) => string;
export { br2nl };
