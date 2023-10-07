import { isString } from "../type/isString.js";
const escapeSquotes = function (str) {
    if (!isString(str)) {
        return str;
    }
    return str.replace(/'/g, "\\'");
};
export { escapeSquotes };
