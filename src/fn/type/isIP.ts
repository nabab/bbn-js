import isString from './isString.js'  ;

export default function isIP(...args: any[]): boolean
{
	if (!args.length) return false;
	for (let st of args) {
		if (!isString(st) || !bbn.var.regexp.ip.test(st)) {
			return false;
		}
	}

	return true;
};
