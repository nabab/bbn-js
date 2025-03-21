import isNumber from '../type/isNumber.js';
import isString from '../type/isString.js';
import each from '../loop/each.js';
export default function fphone(st) {
    var _a;
    if (isNumber(st)) {
        st = st.toString();
    }
    if (isString(st)) {
        var phoneCodes = ((_a = bbn.var) === null || _a === void 0 ? void 0 : _a.phoneCodes) || [];
        var res = '';
        var prefix_1 = '';
        var mask_1 = '';
        if (phoneCodes.length) {
            // Get phone prefix and mask
            each(phoneCodes, function (c) {
                if (st.startsWith(c.prefix) && (c.prefix.length > prefix_1.length)) {
                    prefix_1 = c.prefix;
                    mask_1 = c.mask || '';
                }
            });
        }
        if (!mask_1.length) {
            if (st.startsWith('+')) {
                if (!prefix_1.length) {
                    prefix_1 = st.substr(0, 3);
                }
                var tmpSt = st.slice(prefix_1.length);
                for (var i = 0; i < tmpSt.length; i++) {
                    if (((i + 1) <= tmpSt.length) && ((i % 2) === 0)) {
                        mask_1 += '0' + (tmpSt[i + 1] ? '0' : '') + ' ';
                    }
                }
                mask_1 = mask_1.trim();
            }
        }
        if (mask_1.length) {
            if (prefix_1.length) {
                res = prefix_1 + ' ';
                st = st.slice(prefix_1.length);
            }
            var i_1 = 0;
            res += mask_1.replace(/[0-9]/g, function () {
                return st[i_1++] || '';
            });
            return res;
        }
    }
    return st;
}
;
