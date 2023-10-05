import { extend } from './extend';

const createObject = function (...args) {
	const obj = Object.create(null);
	if (args.length) {
		extend(obj, ...args);
	}

	return obj;
};

export { createObject };
