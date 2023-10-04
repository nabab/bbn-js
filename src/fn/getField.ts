import { getRow } from './getRow';

const getField = function (
	arr: any[],
	field: string,
	prop: object | string = '',
	val: any = null,
	operator: string = '='
) {
	let r: object;
	if (field && (r = getRow(arr, prop, val, operator))) {
		return r[field];
	}

	return undefined;
};

export { getField };
