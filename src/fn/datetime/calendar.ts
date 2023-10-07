import { fdate } from './fdate';
import { date } from './date';
import { isDate } from '../type/isDate';
import { isString } from '../type/isString';

dayjs.extend(window['dayjs_plugin_calendar']);

const calendar = function (d, wrong_result = false) {
	if (undefined === dayjs) {
		return fdate(d, wrong_result);
	}
	let r = date(d);
	if (!isDate(r)) {
		return wrong_result && isString(wrong_result) ? wrong_result : '';
	}

	return dayjs(r).calendar(null, {
		sameDay: '[' + bbn._('Today') + ']',
		nextDay: '[' + bbn._('Tomorrow') + ']',
		nextWeek: 'ddd D',
		lastDay: '[' + bbn._('Yesterday') + ']',
		lastWeek: 'ddd D',
		sameElse: 'L',
	});
};

export { calendar };
