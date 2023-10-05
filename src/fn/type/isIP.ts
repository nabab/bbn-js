import { isString } from './isString';

const isIP = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let st of args) {
		if (!isString(st) || !bbn.vars.regexp.ip.test(st)) {
			return false;
		}
	}

	return true;
};

export { isIP };
