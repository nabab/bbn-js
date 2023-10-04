import { date } from './date';

const daysInMonth = function (v) {
	let d = date(v);
	if (d) {
		return dayjs(d).daysInMonth();
	}
	return false;
};

export { daysInMonth };
