import { randomInt } from './randomInt';
import { isString } from './isString';

const randomString = function (min?: number, max?: string | number, types?: string): string
{
	let length: number;
	let type;
	let chars = {
		n: '0123456789',
		l: 'abcdefghijklmnopqrstuvwxyz',
		u: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	};

	if (!types) {
		types = 'nlu';
	}

	if (!min) {
		length = randomInt(8, 14);
	}

	if (typeof max === 'string') {
		types = 'n';
		delete chars.l;
		delete chars.u;
		chars.n = max;
		if (!length) {
			length = min;
		}
	} else if (typeof max === 'number' && min < max) {
		length = randomInt(min, max);
	} else if (min) {
		length = min;
	}
	let result = '';
	for (let i = 0; i < length; i++) {
		// Not a number for the first char
		if (i === 0) {
			if (types !== 'n') {
				type = types.indexOf('u') === -1 ? 'l' : 'u';
			}
		} else {
			type = types[Math.floor(Math.random() * types.length)];
		}
		result += chars[type][Math.floor(Math.random() * chars[type].length)];
	}
	return result;
};

export { randomString };
