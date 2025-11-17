import isArray from '../type/isArray.js';
import isObject from '../type/isObject.js';
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
 * @param    {Array!Object} st
 * @param    {String} [clsName]
 * @returns  {String}
 */
export default function data2Html(data, clsName = '') {
    const isAssoc = !isArray(data);
    let st = '<ul class="bbn-bottom-xspadding ' + (clsName || 'bbn-ul') + '">';
    for (let n in data) {
        st += '<li>';
        if (isAssoc) {
            st += '<em>' + n + '</em>: ';
        }
        if (data[n] && (isArray(data[n]) || isObject(data[n]))) {
            st += data2Html(data[n], clsName);
        }
        else {
            st += data[n] === null ? '<em>null</em>' : (data[n].toString ? data[n].toString() : data[n]);
        }
        st += '</li>';
    }
    st += '</ul><div class="bbn-bottom-xspadding ' + (clsName || 'bbn-div') + '"></div>';
    return st;
}
;
