import { isNumber } from './isNumber';
import { isString } from './isString';

const formatSize = function (st, noValid) {
	if (isNumber(st)) {
		return st + 'px';
	}
	if (isString(st)) {
		return st;
	}
	return noValid ? false : 'auto';
};

export { formatSize };
