import isString from '../type/isString.js';
export default function escapeDquotes(str) {
    if (!isString(str)) {
        return str;
    }
    return str.replace(/"/g, '\\"');
}
;
