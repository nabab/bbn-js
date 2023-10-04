import { search } from './search';
import { each } from './each';
import { isArray } from './isArray';

const deepPath = function (arr: any[], filter: object, deepProperty: string, res: any[] = []) {
	let idx;
	let start = 0;
	if ((idx = search(arr, filter, start)) > -1) {
		res.push(idx);
		return res;
	}
	each(arr, (it, i) => {
		if (isArray(it[deepProperty])) {
			let r = res.slice();
			r.push(i);
			let tmp = deepPath(it[deepProperty], filter, deepProperty, r);
			if (tmp !== false) {
				return tmp;
			}
		}
	});
	return false;
};

export { deepPath };
