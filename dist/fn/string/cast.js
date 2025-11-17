/**
 * Returns a string from whatever value.
 *
 * @method   cast
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
export default function cast(st) {
    var _a;
    if (!st) {
        return '';
    }
    if (typeof st === 'object') {
        if (bbn.fn.isArray(st)) {
            return 'Array (' + st.length + ')';
        }
        return ((_a = st.constructor) === null || _a === void 0 ? void 0 : _a.name) || '{}';
    }
    if (st.toString) {
        return st.toString();
    }
    return typeof st === 'string' ? st : '';
}
;
