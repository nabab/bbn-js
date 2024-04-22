import isNumber from '../type/isNumber.js';
import isString from '../type/isString.js';
export default function formatSize(st, noValid) {
    if (isNumber(st)) {
        return st + 'px';
    }
    if (isString(st)) {
        return st;
    }
    return noValid ? false : 'auto';
}
;
