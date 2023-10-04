import { isObject } from './isObject';
import { isArray } from './isArray';
import { iterate } from './iterate';

interface Condition {
	field: string;
	operator?: string;
	value?: any;
}
interface Filter {
	conditions?: Condition[];
	logic?: string;
}

const filterToConditions = function (filter: any, operator: string = '='): Filter
{
	if (!isObject(filter)) {
		throw new Error('Error in filterToCondition: filter must be an object');
	}

	if (!filter.conditions || !isArray(filter.conditions)) {
		let tmp = [];
		iterate(filter, (a, n) => {
			if (isObject(a) && typeof a.conditions === 'object') {
				tmp.push(filterToConditions(a));
			} else {
				tmp.push({
					field: n,
					operator: operator,
					value: a,
				});
			}
		});
		filter = {
			conditions: tmp,
		};
	}
	if (!filter.logic) {
		filter.logic = 'AND';
	}
	return filter;
};

export { Filter, filterToConditions };
