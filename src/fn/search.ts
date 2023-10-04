import { isIterable } from './isIterable';
import { compareConditions } from './compareConditions';
import { Filter, filterToConditions } from './filterToConditions';
import { isObject } from './isObject';
import { numProperties } from './numProperties';
import { isNumber } from './isNumber';

const search = function (
	arr: any[],
	prop: Filter | object | string | ((a: any, i: string | number | symbol) => boolean),
	val: any = null,
	operator: number|string = '=',
	startFrom: number = 0
) {
	if (!isIterable(arr)) {
		throw new Error(
			bbn._('The first argument for a search should be iterable') + ' ' + typeof arr + ' ' + bbn._('given')
		);
	}
	if (!arr.length) {
		return -1;
	}
	let filter: Filter|((a: any) => any)|object;
	let isFn = false;
	if (typeof prop === 'string') {
		filter = {
			conditions: [
				{
					field: prop,
					value: val,
					operator: operator || '=',
				},
			]
		};
	}
	else if (!prop) {
		isFn = true;
		filter = a => {
			return compareConditions(
				{ value: a },
				filterToConditions({
					logic: 'AND',
					conditions: [
						{
							field: 'value',
							operator: operator || '=',
							value: val,
						},
					],
				})
			);
		};
	} else {
		startFrom = typeof(operator) === 'number' ? operator : 0;
		operator = val;
		if (isObject(prop)) {
			filter = prop;
		} else if (typeof(prop) === 'function') {
			isFn = true;
			filter = prop;
		}
	}

	if (isFn || (isObject(filter) && numProperties(filter))) {
		if (isNumber(operator)) {
			startFrom = typeof(operator) === 'number' ? operator : 0;
			operator = undefined;
		}
		if (!isNumber(startFrom)) {
			startFrom = 0;
		}

		if (typeof filter === 'function') {
			for (let i = startFrom; i < arr.length; i++) {
				if (filter(arr[i])) {
					return i;
				}
			}
		} else {
			filter = filterToConditions(filter);
			for (let i = startFrom; i < arr.length; i++) {
				if (compareConditions(arr[i], filter)) {
					return i;
				}
			}
		}
	}

	return -1;
};

export { search };
