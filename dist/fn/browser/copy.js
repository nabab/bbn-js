import { isObject } from '../type/isObject.js';
import { isFunction } from '../type/isFunction.js';
/**
 * Copies to the clipboard the value of the given string.
 * @method   copy
 * @global
 * ``` javascript
 * let myVal = 'the value you want to copy to clipbord';
 * bbn.fn.copy(myVal);
 *
 * ```
 * @memberof bbn.fn
 * @param {String} st The string to copy.
 * @returns
 */
var copy = function (st) {
    return new Promise(function (resolve) {
        var _a;
        if (st) {
            if (navigator && navigator.clipboard) {
                if (st instanceof Blob) {
                    navigator.clipboard.write([new ClipboardItem((_a = {}, _a[st.type.toString()] = st, _a))]).then(function () {
                        resolve(true);
                    });
                }
                else if (isObject(st) && isFunction(st.toBlob)) {
                    st.toBlob(function (blob) {
                        var _a;
                        navigator.clipboard.write([new ClipboardItem((_a = {}, _a[blob.type.toString()] = blob, _a))]).then(function () {
                            resolve(true);
                        });
                    });
                }
                else {
                    navigator.clipboard.writeText(st);
                    resolve(true);
                }
                return;
            }
            var input = document.createElement('textarea');
            input.style.opacity = '0';
            input.value = st;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            resolve(true);
        }
        resolve(false);
    });
};
export { copy };
