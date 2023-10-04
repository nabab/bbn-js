import { isArray } from './isArray';
import { isObject } from './isObject';
import { extend } from './extend';

const clone = function (obj) {
	if (isArray(obj)) {
		return obj.slice().map((a) => {
			return typeof a === 'object' ? clone(a) : a;
		});
	}

	if (isObject(obj)) {
		const o = Object.create(Object.getPrototypeOf(obj));
		return extend(true, o, obj);
	}

	return obj;
};

export { clone };
