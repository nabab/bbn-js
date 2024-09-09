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
    if (st.toString) {
        return st.toString();
    }
    if (typeof st === 'object') {
        return ((_a = st.constructor) === null || _a === void 0 ? void 0 : _a.name) || '{}';
    }
    return typeof st === 'string' ? st : '';
}
;
