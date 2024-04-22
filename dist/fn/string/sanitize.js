import removeAccents from './removeAccents.js';
import trim from './trim.js';
/**
 * Removes all unacceptable characters in a DOM node.
 *
 * @method   sanitize
 * @global
 *
 * @example
 * ```javascript
 * //"this_is_a_test"
 * bbn.fn.sanitize("this&is_$a^test");
 * ```
 *
 * @memberof bbn.fn
 * @returns  {String} str
 */
export default function sanitize(str, separator) {
    if (separator === void 0) { separator = "_"; }
    var escaped = ["[", "]", "{", "}", "(", ")", "-", "+", "*", "/"];
    var exp = "[";
    for (var i = 0; i < separator.length; i++) {
        if (escaped.includes(separator[i])) {
            exp += "\\";
        }
        exp += separator[i];
    }
    exp += "]+";
    var re = new RegExp(exp, "g");
    var res = removeAccents(str)
        .replace(/[^a-z0-9]/gi, separator)
        .replace(re, separator);
    return trim(res, separator);
}
;
