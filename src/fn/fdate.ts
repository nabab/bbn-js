import { fdatetime } from './fdatetime';
import { date } from './date';
import { isDate } from './isDate';
import { isString } from './isString';

const fdate = function (d: Date|number|string, wrong_result?: boolean|string) {
	// Retro compatibility
	if (wrong_result === true) {
		return fdatetime(d);
	}
	let r = date(d);
	if (!isDate(r)) {
		return wrong_result && isString(wrong_result) ? wrong_result : '';
	}
	if (undefined !== dayjs) {
		return dayjs(r).format('L');
	}
	return r.toLocaleDateString();
};

export { fdate };
