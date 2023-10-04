import { isArray } from './isArray';
import { numProperties } from './numProperties';

const isEmpty = function (obj): boolean
{
	if (!obj) {
		return true;
	}
	if (isArray(obj)) {
		return obj.length ? false : true;
	}
	if (typeof obj === 'object') {
		if (numProperties(obj)) {
			return false;
		}
		return true;
	}
	return false;
};

export { isEmpty };
