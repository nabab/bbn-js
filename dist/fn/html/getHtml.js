import removeHtmlComments from '../string/removeHtmlComments.js';
export default function getHtml(ele, stripComments) {
    if (stripComments === void 0) { stripComments = false; }
    var st = ele.innerHTML();
    if (stripComments) {
        st = removeHtmlComments(st);
    }
    return st.trim();
}
;
