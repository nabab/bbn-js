const isString = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let a of args) {
		if ({}.toString.apply(a) !== '[object String]') {
			return false;
		}
	}
	return true;
};

export { isString };
