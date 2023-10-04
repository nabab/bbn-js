import { isString } from './isString';
import { isInt } from './isInt';
import { log } from './log';

const substr = function (str: string, from: number, length?: number) {
	if (!isString(str) || !isInt(from)) {
		log(arguments);
		throw new Error(
			bbn._('The substr function should be applied to a string and at least a `from` argument should be given')
		);
	}

	if (from < 0) {
		from = str.length + from;
	}

	if (!isInt(length)) {
		return str.substring(from);
	}

	return str.substring(from, (length < 0 ? str.length : from) + length);
};

export { substr };
