import { replaceAll } from './replaceAll.js';
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
var quotes2html = function (st, type) {
    if (!type || type.toLowerCase().indexOf("s") === 0) {
        st = replaceAll("'", "&#39;", st);
    }
    if (!type || type.toLowerCase().indexOf("d") === 0) {
        st = replaceAll('"', "&quot;", st);
    }
    return st;
};
export { quotes2html };
