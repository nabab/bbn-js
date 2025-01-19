import extend from './extend.js'  ;

export default function createObject(...args) {
	const obj = Object.create(null);
	if (args.length) {
		extend(obj, ...args);
	}

	return obj;
};
