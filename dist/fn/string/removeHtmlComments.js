import { isString } from "../type/isString.js";
const removeHtmlComments = function (str) {
    if (!isString(str)) {
        return str;
    }
    return str.replace(/<!--[\s\S]*?-->/g, '');
};
export { removeHtmlComments };
