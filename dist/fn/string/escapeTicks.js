import { isString } from '../type/isString.js';
var escapeTicks = function (str) {
    if (!isString(str)) {
        return str;
    }
    return str.replace(/`/g, '\\`');
};
export { escapeTicks };
