import { isObject } from './isObject';
import { iterate } from './iterate';

const addStyle = function (ele, o) {
	if (isObject(o)) {
		iterate(o, (v, k) => {
			ele.style[k] = v;
		});
	}
};

export { addStyle };
