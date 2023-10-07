import { extend } from "./extend.js";

const createObject = function (...args) {
	const obj = Object.create(null);
	if (args.length) {
		extend(obj, ...args);
	}

	return obj;
};

export { createObject };
