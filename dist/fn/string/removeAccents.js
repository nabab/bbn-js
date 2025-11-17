import isString from '../type/isString.js';
import log from '../browser/log.js';
/**
 * Returns the string passed as an argument without accents.
 *
 * @method   removeAccents
 * @global
 *
 * @example
 * ```javascript
 * //"eeou"
 * bbn.fn.removeAccents("èéòù");
 * ```
 * @memberof bbn.fn
 * @param    {String} st
 * @returns  {String}
 */
export default function removeAccents(st) {
    if (!isString(st)) {
        if (st.toString) {
            st = st.toString();
        }
        else {
            log(st);
            throw new Error(bbn._("removeAccent expects a string"));
        }
    }
    return st.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
;
