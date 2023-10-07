import { replaceAll } from './replaceAll.js';
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
var br2nl = function (st) {
    return replaceAll("<br />", "\n", replaceAll("<br/>", "\n", replaceAll("<br>", "\n", st)));
};
export { br2nl };
