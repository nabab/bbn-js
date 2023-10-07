import { isString } from './isString.js'  ;

const isIP = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let st of args) {
		if (!isString(st) || !bbn.var.regexp.ip.test(st)) {
			return false;
		}
	}

	return true;
};

export { isIP };
