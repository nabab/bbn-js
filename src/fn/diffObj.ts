import { isDate } from './isDate';
import { createObject } from './createObject';
import { isFunction } from './isFunction';
import { isValue } from './isValue';
import { isDom } from './isDom';
import { error } from './error';
import { numProperties } from './numProperties';

let diffObjProcessed = [];

const diffObj = function (obj1: object, obj2: object, unchanged: boolean = false, notRoot: boolean = false) {
	if (!notRoot) {
		diffObjProcessed = [];
	}

	let VALUE_CREATED = 'created',
		VALUE_UPDATED = 'updated',
		VALUE_DELETED = 'deleted',
		VALUE_UNCHANGED = 'unchanged',
		_compareValues = function (value1, value2) {
			if (value1 === value2) {
				return VALUE_UNCHANGED;
			}
			if (isDate(value1) && isDate(value2) && value1.getTime() === value2.getTime()) {
				return VALUE_UNCHANGED;
			}
			if ('undefined' == typeof value1) {
				return VALUE_CREATED;
			}
			if ('undefined' == typeof value2) {
				return VALUE_DELETED;
			}
			return VALUE_UPDATED;
		};
	if (notRoot === undefined) {
		notRoot = false;
	}

	let diff = createObject();
	if (!isFunction(obj1) && !isFunction(obj2)) {
		if (isValue(obj1) || isValue(obj2)) {
			let res = _compareValues(obj1, obj2);
			if (unchanged || res !== VALUE_UNCHANGED) {
				let ret = createObject();
				Object.defineProperty(ret, 'type', {
					value: res,
					enumerable: false,
				});
				Object.defineProperty(ret, 'data', {
					value: obj1 === undefined ? obj2 : obj1,
					enumerable: false,
				});
				Object.defineProperty(ret, '_bbnDiffObjProof', {
					value: true,
					enumerable: false,
				});
				if (obj1 !== undefined) {
					Object.defineProperty(ret, 'newData', {
						value: obj2,
						enumerable: false,
					});
				}

				return ret;
			}

			return false;
		}

		if (isDom(obj1) || isDom(obj2)) {
			return false;
		}

		if (diffObjProcessed.includes(obj1) || diffObjProcessed.includes(obj2)) {
			//error(bbn._("Can't compare objects because they contain circular references"));
			return false;
		}

		diffObjProcessed.push(obj1, obj2);

		for (let key in obj1) {
			if (isFunction(obj1[key])) {
				continue;
			}

			let value2 = undefined;
			if ('undefined' != typeof obj2[key]) {
				value2 = obj2[key];
			}
			let res = diffObj(obj1[key], value2, unchanged, true);
			if (res) {
				diff[key] = res;
			}
		}
		for (let key in obj2) {
			if (isFunction(obj2[key]) || 'undefined' != typeof obj1[key]) {
				continue;
			}
			let res = diffObj(undefined, obj2[key], unchanged, true);
			if (res) {
				diff[key] = res;
			}
		}
	}

	return !notRoot || unchanged || numProperties(diff) ? diff : false;
};

export { diffObj };
