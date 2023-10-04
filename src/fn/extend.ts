import { iterate } from './iterate';
import { isArray } from './isArray';
import { each } from './each';
import { isObject } from './isObject';

const extend = function (...originalArgs: (boolean|object)[]) {
	let deep = false;
	let args = [];
	for (let i = 0; i < originalArgs.length; i++) {
		if (originalArgs[i] === true) {
			deep = true;
		} else if (!originalArgs[i]) {
			continue;
		} else if (typeof originalArgs[i] !== 'object') {
			throw new Error(
				bbn._('Error in extend: all arguments should be object, you have given ') + typeof originalArgs[i]
			);
		} else {
			args.push(originalArgs[i]);
		}
	}

	if (!args.length) {
		throw new Error('No argument given');
	}

	let out = args[0];
	for (let i = 1; i < args.length; i++) {
		iterate(args[i], (a, key) => {
			if (deep) {
				if (isArray(a)) {
					out[key] = isArray(out[key]) ? out[key] : [];
					each(a, (b, i) => {
						if (b && typeof b === 'object') {
							let tmp = out[key][i];
							if (isArray(b)) {
								if (!isArray(tmp)) {
									tmp = [];
								}
							} else if (!isObject(tmp)) {
								tmp = {};
							}
							out[key][i] = extend(true, tmp, b);
						} else {
							out[key][i] = b;
						}
					});
				} else if (isObject(a)) {
					out[key] = extend(
						true,
						out[key] && typeof out[key] === 'object' ? out[key] : Object.create(Object.getPrototypeOf(a)),
						a
					);
				} else {
					out[key] = a;
				}
			} else if (out[key] !== a) {
				out[key] = a;
			}
		});

		if (args[i].__bbnNoData) {
			Object.defineProperty(out, '__bbnNoData', {
				value: true,
				enumerable: false,
				configurable: false,
				writable: false,
			});
		}
	}
	return out;
};

export { extend };
