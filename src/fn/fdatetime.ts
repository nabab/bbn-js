import { date } from './date';
import { isDate } from './isDate';
import { isString } from './isString';

const fdatetime = function (d?: Date | number | string, wrong_result?: boolean | string) {
	let r = date(d);
	if (!isDate(r)) {
		return wrong_result && isString(wrong_result) ? wrong_result : '';
	}
	if (undefined !== dayjs) {
		//return dayjs(r).format('lll');
		return dayjs(r).calendar(null, {
			sameDay: '[' + bbn._('Today') + '] HH:mm',
			nextDay: '[' + bbn._('Tomorrow') + '] HH:mm',
			nextWeek: 'ddd D HH:mm',
			lastDay: '[' + bbn._('Yesterday') + '] HH:mm',
			lastWeek: 'ddd D HH:mm',
			sameElse: 'DD/MM/YYYY HH:mm',
		});
		//return dayjs(r).format("DD/MM/YYYY HH:mm")
	}
	return r.toLocaleDateString();
};

export { fdatetime };
