import { isNumber } from './isNumber';
import { isIterable } from './isIterable';
import { iterate } from './iterate';

const each = function (arr, fn) {
	if (isNumber(arr) && arr > 0) {
		for (let i = 0; i < arr; i++) {
			if (fn(i, i) === false) {
				return;
			}
		}

		return;
	}

	if (isIterable(arr)) {
		for (let i = 0; i < arr.length; i++) {
			if (fn(arr[i], i) === false) {
				return;
			}
		}
		return arr;
	}

	return iterate(arr, fn);
};

export { each };
