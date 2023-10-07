import { isString } from '../type/isString.js';
import { isInt } from '../type/isInt.js';
import { log } from '../browser/log.js';
/**
 * Basic substring function accepting both positive and negative values.
 *
 * @method   substr
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.substr(bbn.fn, 'Hello', -3, -1);
 * // "ll"
 * bbn.fn.substr(bbn.fn, 'Hello', -3);
 * // "llo"
 * bbn.fn.substr(bbn.fn, 'Hello', 0, 1);
 * // "H"
 * ```
 * @memberof bbn.fn
 * @param    {String} str
 * @param    {Number} from
 * @param    {Number} length
 * @returns  {String} Result substring
 */
var substr = function (str, from, length) {
    if (!isString(str) || !isInt(from)) {
        log(arguments);
        throw new Error(bbn._("The substr function should be applied to a string and at least a `from` argument should be given"));
    }
    if (from < 0) {
        from = str.length + from;
    }
    if (!isInt(length)) {
        return str.substring(from);
    }
    return str.substring(from, (length < 0 ? str.length : from) + length);
};
export { substr };
