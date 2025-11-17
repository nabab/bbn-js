import isString from '../type/isString.js';
export default function escapeSquotes(str) {
    if (!isString(str)) {
        return str;
    }
    return str.replace(/'/g, "\\'");
}
;
