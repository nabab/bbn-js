import { isString } from '../type/isString.js';
var escapeSquotes = function (str) {
    if (!isString(str)) {
        return str;
    }
    return str.replace(/'/g, "\\'");
};
export { escapeSquotes };
