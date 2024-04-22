import replaceAll from './replaceAll.js';
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
export default function nl2br(st, keepNl) {
    return replaceAll("\n", "<br>" + (keepNl ? "\n" : ""), st);
}
;
