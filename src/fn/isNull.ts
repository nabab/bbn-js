const isNull = function (...args: any[]): boolean {
	if (!args.length) return false;
	for (let a of args) {
		if ({}.toString.apply(a) !== '[object Null]') {
			return false;
		}
	}
	return true;
};

export { isNull };
