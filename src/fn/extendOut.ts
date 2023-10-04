import { isObject } from './isObject';

const extendOut = function (...args: object[]) {
	let r = null;
	for (let a of args) {
		if (!isObject(a)) {
			throw new Error('Each argument for extendOut must be an object, ' + typeof a + ' given');
		}

		if (r === null) {
			r = a;
		} else {
			for (let n in a) {
				if (isObject(r[n], a[n])) {
					extendOut(r[n], a[n]);
				} else if (r[n] === undefined) {
					r[n] = a[n];
				}
			}
		}
	}
	return r;
};

export { extendOut };
