const isDate = function (...args: any[]): boolean {
	if (!args.length) return false;
	for (let a of args) {
		if ({}.toString.apply(a) !== '[object Date]') {
			return false;
		}
	}
	return true;
};

export { isDate };
