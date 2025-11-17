import replaceAll from './replaceAll.js';
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
export default function br2nl(st) {
    return replaceAll("<br />", "\n", replaceAll("<br/>", "\n", replaceAll("<br>", "\n", st)));
}
;
