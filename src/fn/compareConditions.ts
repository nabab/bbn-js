import { isArray } from './isArray';
import { each } from './each';
import { compare } from './compare';
import { getProperty } from './getProperty';

const compareConditions = function (data, filter) {
	if (!filter.conditions || !filter.logic || !isArray(filter.conditions)) {
		throw new Error(
			'Error in compareConditions: the filter should an abject with conditions and logic properties and conditions should be an array of objects'
		);
	}

	let ok = filter.logic === 'AND' ? true : false;
	each(filter.conditions, (a) => {
		let comparator;
		if (a.conditions && isArray(a.conditions)) {
			comparator = compareConditions(data, a);
		} else {
			comparator = compare(getProperty(data, a.field), a.value, a.operator);
			if (comparator) {
				let bits = a.field.split('.');
				let prop = bits.pop();
				if (bits.length) {
					each(bits, (b) => (data = data[b]));
				}
				// Case where both are undefined: value and prop which doesn't exist; they are not the same!
				if (getProperty(data, prop) === undefined && a.value !== undefined) {
					comparator = false;
				}
			}
		}
		if (comparator) {
			if (filter.logic === 'OR') {
				ok = true;
				return false;
			}
		} else if (filter.logic === 'AND') {
			ok = false;
			return false;
		}
	});
	return ok;
};

export { compareConditions };
