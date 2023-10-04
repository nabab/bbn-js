import { isNumber } from './isNumber';
import { substr } from './substr';

const isValidDimension = function (st) {
	if (typeof st === 'string' && (st.length > 0) && ((st.indexOf('calc') === 0) || isNumber(substr(st, 0, 1)))) {
		let el = document.createElement('div');
		el.style.width = st;
		let res = !!el.style.width.length;
		el.remove();
		return res;
	}
	return false;
};

export { isValidDimension };
