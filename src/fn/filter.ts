import { isArray } from './isArray';
import { each } from './each';
import { Filter, filterToConditions } from './filterToConditions';
import { compareConditions } from './compareConditions';

const filter = function (
	arr: any[],
	prop: Filter | object | string | ((a: any, i: string | number | symbol) => boolean),
	val: any = null,
	operator: string = '='
): any[] {
	if (!isArray(arr)) {
		bbn.fn.log("NOT ARRAY", arr);
		throw new Error('Error in filter: The first argument must be an array');
	}
	let cfg: Filter = {};
	const res: any[] = [];
	const isFn: boolean = typeof(prop) === 'function';
	if (!prop || !arr.length) {
		return arr;
	}

	if (arr.length) {
		if (typeof prop === 'object') {
			operator = val;
			cfg = prop;
		} else if (typeof prop === 'string') {
			cfg[prop] = val;
		} else if (!isFn) {
			throw new Error('Search function error: The prop argument should be a string or an object');
		}
		if (typeof(prop) === 'function') {
			each(arr, (a, i) => {
				if (prop(a, i)) {
					res.push(a);
				}
			});
		} else {
			cfg = filterToConditions(cfg, operator);
			if (cfg.conditions && cfg.logic) {
				each(arr, (a) => {
					if (compareConditions(a, cfg)) {
						res.push(a);
					}
				});
			}
		}
		return res;
	}
};

export { filter };
