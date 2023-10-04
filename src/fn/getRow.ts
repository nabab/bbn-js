import { search } from './search';

const getRow = function (arr: any[], prop: object | string, val: any = null, operator: string = '='): any|false
{
	var idx = search(arr, prop, val, operator);
	if (idx > -1) {
		return arr[idx];
	}

	return false;
};

export { getRow };
