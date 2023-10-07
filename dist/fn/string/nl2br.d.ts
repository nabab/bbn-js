/**
 * Replaces all new line characters '\ n' with html tag '<br>'.
 *
 * @method   nl2br
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.nl2br('hello \n world!');
 * //"hello <br> world!"
 * ```
 * @memberof bbn.fn
 * @param    {String} st
 * @returns  {String}
 */
declare const nl2br: (st: any, keepNl: any) => string;
export { nl2br };
