import { isString } from '../type/isString.js';
var escapeDquotes = function (str) {
    if (!isString(str)) {
        return str;
    }
    return str.replace(/"/g, '\\"');
};
export { escapeDquotes };
