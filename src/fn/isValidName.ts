import { isString } from './isString';

const isValidName = function (...args: any[]): boolean {
	if (!args.length) {
		return false;
	}

	for (let arg of args) {
		if (!isString(arg) || !/^[$A-Z_][0-9A-Z_$]*$/i.test(arg)) {
			return false;
		}
	}

	return true;
};

export { isValidName };
