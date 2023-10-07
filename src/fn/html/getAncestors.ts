import { isString } from "../type/isString.js";

const getAncestors = function (ele, selector = null)
{
	let r = [];
	if (typeof ele === 'string') {
		ele = document.querySelector(ele);
	}

  if (ele instanceof HTMLElement) {
		if (ele.parentElement) {
			if (typeof selector === 'string') {
				while ((ele = ele.parentElement.closest(selector))) {
					r.push(ele);
				}
			} else {
				if (selector === true) {
					r.push(ele);
				}
				while ((ele = ele.parentElement)) {
					r.push(ele);
				}
			}
		}
	}
	return r;
};

export { getAncestors };
