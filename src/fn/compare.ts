import { isEmpty } from './isEmpty';
import { removeAccents } from './removeAccents';
import { isNull } from './isNull';
import { isObject } from './isObject';
import { isSame } from './isSame';

const compare = function (v1, v2, operator) {
	switch (operator) {
		case '===':
		case '=':
		case 'equal':
		case 'eq':
		case 'is':
			return v1 === v2;
		case '!==':
		case 'notequal':
		case 'neq':
		case 'isnot':
			return v1 !== v2;
		case '!=':
		case 'different':
			return v1 != v2;
		case 'contains':
		case 'contain':
		case 'icontains':
		case 'icontain':
			if (isEmpty(v1) || isEmpty(v2)) {
				return false;
			}
			return removeAccents(v1).toLowerCase().indexOf(removeAccents(v2).toLowerCase()) !== -1;
		case 'doesnotcontain':
		case 'donotcontain':
			if (isNull(v1) || isNull(v2)) {
				return true;
			}
			return removeAccents(v1.toLowerCase()).indexOf(removeAccents(v2.toLowerCase())) === -1;
		case 'starts':
		case 'start':
			if (isNull(v1) || isNull(v2)) {
				return false;
			}
			if (typeof v1 !== 'string') {
				v1 = v1.toString() || '';
			}
			if (typeof v2 !== 'string') {
				v2 = v2.toString() || '';
			}
			return v1.indexOf(v2) === 0;
		case 'startswith':
		case 'startsi':
		case 'starti':
		case 'istarts':
		case 'istart':
			if (isNull(v1) || isNull(v2)) {
				return false;
			}
			return removeAccents(v1).toLowerCase().indexOf(removeAccents(v2).toLowerCase()) === 0;
		case 'endswith':
		case 'endsi':
		case 'endi':
		case 'iends':
		case 'iend':
			if (isNull(v1) || isNull(v2)) {
				return false;
			}
			return v1.lastIndexOf(v2) === v1.length - v2.length;
		case 'like':
			if (isNull(v1) || isNull(v2)) {
				return false;
			}
			return removeAccents(v1).toLowerCase() === removeAccents(v2).toLowerCase();
		case 'gt':
		case '>':
			return v1 > v2;
		case 'gte':
		case '>=':
			return v1 >= v2;
		case 'lt':
		case '<':
			return v1 < v2;
		case 'lte':
		case '<=':
			return v1 <= v2;
		case 'isnull':
			return v1 === null;
		case 'isnotnull':
			return v1 !== null;
		case 'isempty':
			return v1 === '';
		case 'isnotempty':
			return v1 !== '';
		case '==':
			if (isObject(v1, v2)) {
				return isSame(v1, v2);
			}
		default:
			return v1 == v2;
	}
};

export { compare };
