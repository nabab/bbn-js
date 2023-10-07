import { isNumber } from '../type/isNumber.js';
import { isString } from '../type/isString.js';
var formatSize = function (st, noValid) {
    if (isNumber(st)) {
        return st + 'px';
    }
    if (isString(st)) {
        return st;
    }
    return noValid ? false : 'auto';
};
export { formatSize };
