import { date } from './date';

const dateSQL = function (v, dayOnly) {
	let value = date(v);
	if (value) {
		return dayjs(value).format('YYYY-MM-DD' + (dayOnly ? '' : ' HH:mm:ss'));
	}
};

export { dateSQL };
