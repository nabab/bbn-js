import { isFunction } from './isFunction';
import { each } from './each';
import { filter } from './filter';

const sum = function (
	arr: object[],
	numberProp: string | ((a: any) => any),
	prop: object | string,
	val?: any,
	operator?: string
): number
{
	let r = 0;
	each(filter(arr, prop, val, operator), (a) => {
		let tmp = typeof numberProp === 'function' ? numberProp(a) : a[numberProp];
		if (tmp) {
			r += parseFloat(tmp) || 0;
		}
	});
	return r;
};

export { sum };
