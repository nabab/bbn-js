import { isArray } from './isArray';
import { isNumber } from './isNumber';

const forir = function (arr: any[], fn: (a: any, b: number) => any, max: number = arr.length - 1, min: number = 0) {
	if (isArray(arr)) {
		let realMax = arr.length - 1;
		if (!isNumber(max) || !((0 < max) && (max <= realMax))) {
			max = realMax;
		}

    if (!isNumber(min) || !((0 <= min) && (min < realMax)) || (min > max)) {
			min = 0;
		}

    for (let i = max; i >= min; i--) {
			if (fn(arr[i], i) === false) {
				return;
			}
		}
	}
};

export { forir };
