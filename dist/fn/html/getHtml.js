import { removeHtmlComments } from '../string/removeHtmlComments.js';
var getHtml = function (ele, stripComments) {
    if (stripComments === void 0) { stripComments = false; }
    var st = ele.innerHTML();
    if (stripComments) {
        st = removeHtmlComments(st);
    }
    return st.trim();
};
export { getHtml };
