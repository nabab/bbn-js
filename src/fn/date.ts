import { isNumber } from './isNumber';
import { substr } from './substr';
import { isDate } from './isDate';

const date = function (v) {
	let d = false,
		t = typeof v;
	if (v === undefined) {
		return new Date();
	}
	if (t === 'number' || (isNumber(v) && v !== '')) {
		if (v < 10000000000) {
			v = v * 1000;
		}
		return new Date(v);
	}
	if (t === 'string') {
		if (v.length === 10) {
			return new Date(parseInt(substr(v, 0, 4)), parseInt(substr(v, 5, 2)) - 1, parseInt(substr(v, 8, 2)), 12);
		} else if (v.length === 19) {
			return new Date(
				parseInt(substr(v, 0, 4)),
				parseInt(substr(v, 5, 2)) - 1,
				parseInt(substr(v, 8, 2)),
				parseInt(substr(v, 11, 2)),
				parseInt(substr(v, 14, 2)),
				parseInt(substr(v, 17, 2))
			);
		}
	} else if (isDate(v)) {
		return v;
	}
	return d;
};

export { date };