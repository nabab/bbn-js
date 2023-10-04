import { isArray } from './isArray';
import { isObject } from './isObject';
import { numProperties } from './numProperties';

const removeEmpty = function (arr: any[]): any[]
{
	var tmp = [];
	if (isArray(arr)) {
		for (let i = 0; i < arr.length; i++) {
			let ok = false;
			if (arr[i]) {
				if (isArray(arr[i])) {
					if (arr[i].length) {
						ok = true;
					}
				} else if (isObject(arr[i])) {
					if (numProperties(arr[i])) {
						ok = true;
					}
				} else {
					ok = true;
				}
			}
			if (ok) {
				tmp.push(arr[i]);
			}
		}
	}
	return tmp;
};

export { removeEmpty };
