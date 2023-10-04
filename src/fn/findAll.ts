import { search } from './search';
import { each } from './each';
import { isArray } from './isArray';

const findAll = function (arr, filter, deepProperty, res = []) {
	let idx;
	let start = 0;
	while ((idx = search(arr, filter, start)) > -1) {
		res.push(arr[idx]);
		start = idx + 1;
	}
	each(arr, (it) => {
		if (isArray(it[deepProperty])) {
			findAll(it[deepProperty], filter, deepProperty, res);
		}
	});
	return res;
};

export { findAll };
