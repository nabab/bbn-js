import extend from './extend.js'  ;
// Args because of typescript doing errors
export default function createObject(...originalArgs) {
	const args = Array.from(arguments);
	const obj = Object.create(null);
	if (args.length) {
		args.unshift(obj);
		extend.apply(obj, args);
	}

	return obj;
};
