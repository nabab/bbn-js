/**
 * Returns the string passed as an argument in camelize mode.
 *
 * A string can be separated for example by a underscore, a dash or space;
 * so the camelize function will automatically convert them to a single string.
 *
 * @method   camelize
 * @global
 *
 * @example
 * ```javascript
 * //"thisIsATest"
 * bbn.fn.camelize("this_is-a test");
 * ```
 * @memberof bbn.fn
 * @param    {String} str
 * @returns  {String}
 */
var camelize = function (str) {
    return str.replace(/^([A-Z])|[\s-](\w)/g, function (match, p1, p2, offset) {
        if (p2) {
            return p2.toUpperCase();
        }
        return p1.toLowerCase();
    });
};
export { camelize };
