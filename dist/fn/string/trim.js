import { substr } from './substr.js';
var trim = function (str, hair) {
    if (hair === void 0) { hair = ' '; }
    if (hair === ' ') {
        return str.trim();
    }
    if (!hair) {
        return str;
    }
    if (hair === str) {
        return '';
    }
    while (str.indexOf(hair) === 0) {
        str = substr(str, hair.length);
    }
    while (str.lastIndexOf(hair) === str.length - hair.length) {
        str = substr(str, 0, str.length - hair.length);
    }
    return str;
};
export { trim };
