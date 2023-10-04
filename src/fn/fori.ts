import { isArray } from './isArray';
import { isNumber } from './isNumber';

const fori = function (arr: any[], fn: (a: any, i: number) => any, max:number = arr.length - 1, min:number = 0) {
	if (isArray(arr)) {
		let realMax = arr.length - 1;
		if (!isNumber(max) || !((0 < max) && (max <= realMax))) {
			max = realMax;
		}

    if (!isNumber(min) || !((0 <= min) && (min < realMax)) || (min > max)) {
			min = 0;
		}

    for (let i = min; i <= max; i++) {
			if (fn(arr[i], i) === false) {
				return;
			}
		}
	}
};

export { fori };
