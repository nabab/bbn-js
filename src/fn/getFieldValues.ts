import { checkType } from './checkType';
import { filter } from './filter';
import { each } from './each';

const getFieldValues = function (arr: object[], field: string, prop, val, operator) {
	checkType(field, 'string');
	if (prop) {
		arr = filter(arr, prop, val, operator);
	}

	let res = [];
	each(arr, (a) => (res.indexOf(a[field]) === -1 ? res.push(a[field]) : null));
	return res;
};

export { getFieldValues };
