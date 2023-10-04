import { filter } from './filter';

const count = function (arr: any[], prop: object | string, val: any = null, operator: string = '=') {
	return filter(arr, prop, val, operator).length || 0;
};

export { count };
