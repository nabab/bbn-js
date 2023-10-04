import { isNull } from './isNull';

const isValue = function (...args: any[]): boolean {
	if (!args.length) return false;
	for (let a of args) {
		if (typeof a === 'object' && !isNull(a)) {
			return false;
		}
	}
	return true;
};

export { isValue };
