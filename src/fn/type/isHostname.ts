import { isString } from './isString';
import { isIP } from './isIP';

const isHostname = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let st of args) {
		if (!isString(st)) {
			return false;
		}
		if (!isIP(st) && !bbn.var.regexp.hostname.test(st)) {
			return false;
		}
	}

	return true;
};

export { isHostname };
