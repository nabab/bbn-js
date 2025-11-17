/**
 * Returns the string passed as an argument in camelize mode for css.
 *
 * @method   camelToCss
 * @global
 *
 * @example
 * ```javascript
 * //"this-is-a-test"
 * bbn.fn.camelToCss("thisIsATest");
 * ```
 *
 * @memberof bbn.fn
 * @param   {String} str
 * @returns {String}
 */
export default function camelToCss(str) {
    return str
        .replace(/([A-Z])/g, function (st) {
        return "-" + st.toLowerCase();
    })
        .replace("/^./", function (st) {
        return st.toLowerCase();
    });
}
;
