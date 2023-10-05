import { isString } from '../type/isString';

const escapeTicks = function (str) {
	if (!isString(str)) {
		return str;
	}
	return str.replace(/`/g, '\\`');
};

export { escapeTicks };
