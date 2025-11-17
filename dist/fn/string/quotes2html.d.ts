/**
 * Replace quotes in ASCII code
 *
 * @method   quotes2html
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.quotes2html("hello 'world'!", 's');
 * // hello &#39;world&#39;!
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.quotes2html('hello "world\'s"!', 'd');
 * // hello &quot;world'sd&quot;!
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.quotes2html('hello "world\'s"!');
 * // hello &quot;world&#39;sd&quot;!
 * ```
 *
 * @memberof bbn.fn
 * @param    {String} st
 * @returns  {String}
 */
export default function quotes2html(st: string, type?: string): string;
