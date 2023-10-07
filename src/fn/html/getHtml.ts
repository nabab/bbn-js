import { removeHtmlComments } from '../string/removeHtmlComments.js'  ;

const getHtml = function (ele, stripComments = false) {
	let st = ele.innerHTML();
	if (stripComments) {
		st = removeHtmlComments(st);
	}

	return st.trim();
};

export { getHtml };
