import removeHtmlComments from '../string/removeHtmlComments.js';
export default function getHtml(ele, stripComments = false) {
    let st = ele.innerHTML();
    if (stripComments) {
        st = removeHtmlComments(st);
    }
    return st.trim();
}
;
