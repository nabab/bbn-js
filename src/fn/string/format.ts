import checkType from '../type/checkType.js'  ;

export default function format(str) {
	let args = Array.prototype.slice.call(arguments, 1);
	if (args.length) {
		let i = 0;
		return str.replace(/\%([d|s])/g, (match, type) => {
			let tmp = args[i++];
			checkType(tmp, type === 'd' ? 'number' : 'string', bbn._("The value doesn't correspond to the format"));
			return tmp;
		});
	}

	return str;
};
