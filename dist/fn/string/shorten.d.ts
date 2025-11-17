/**
 * Shortens the given string after *len* characters.
 *
 * Provides an abbreviation to the string passed as the first argument,
 * deciding through the second argument the number of characters to keep and the remainder replaced
 * by what is passed as the third argument and if not given a defalut it is: '...'
 *
 * @method   shorten
 * @global
 *
 * @example
 * ```javascript
 * //"test***"
 * bbn.fn.shorten('testing', 4, '***');
 * ```
 *  @example
 * ```javascript
 * //"test..."
 * bbn.fn.shorten('testing', 4);
 * ```
 * @memberof bbn.fn
 * @param    {String} st
 * @param    {Number} len
 * @returns  {String}
 */
export default function shorten(st: string, len?: number, adj?: string): string;
