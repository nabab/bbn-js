import { date } from './date';
import { isDate } from './isDate';
import { isString } from './isString';
dayjs.extend(window['dayjs_plugin_calendar']);

const ftime = function (d, wrong_result) {
	let r = date(d);
	if (!isDate(r)) {
		return wrong_result && isString(wrong_result) ? wrong_result : '';
	}
	if (undefined !== dayjs) {
		return dayjs(r).calendar();
	}
	return r.toLocaleDateString();
};

export { ftime };
