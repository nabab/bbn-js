import isString from '../type/isString.js';
export default function escapeTicks(str) {
    if (!isString(str)) {
        return str;
    }
    return str.replace(/`/g, '\\`');
}
;
