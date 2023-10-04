const isObject = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let a of args) {
		if ({}.toString.apply(a) !== '[object Object]') {
			return false;
		}
	}
	return true;
};

export { isObject };
