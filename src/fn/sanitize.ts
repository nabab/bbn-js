import { removeAccents } from './removeAccents';
import { trim } from './trim';

const sanitize = function (str, separator = '_') {
	let escaped = ['[', ']', '{', '}', '(', ')', '-', '+', '*', '/'];
	let exp = '[';
	for (let i = 0; i < separator.length; i++) {
		if (escaped.includes(separator[i])) {
			exp += '\\';
		}

		exp += separator[i];
	}

	exp += ']+';
	let re = new RegExp(exp, 'g');
	let res = removeAccents(str)
		.replace(/[^a-z0-9]/gi, separator)
		.replace(re, separator);
	return trim(res, separator);
};

export { sanitize };
