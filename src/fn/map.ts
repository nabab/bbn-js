import { isArray } from './isArray';

const map = function (arr, fn, deepProp, level = 0) {
	return arr.map((a, i) => {
		a = fn(a, i, level);
		if (deepProp && a[deepProp] && isArray(a[deepProp])) {
			a[deepProp] = map(a[deepProp], fn, deepProp, level + 1);
		}
		return a;
	});
};

export { map };
