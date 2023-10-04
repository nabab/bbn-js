import { _compareValues } from './_compareValues';

const order = function (arr, prop, dir = 'asc') {
	if (arr) {
		return arr.sort(function (a, b) {
			return _compareValues(a, b, prop, dir);
		});
	}
	return arr;
};

export { order };
