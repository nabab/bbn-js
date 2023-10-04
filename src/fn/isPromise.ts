const isPromise = function (...args: any[]): boolean {
	if (!args.length) return false;
	for (let a of args) {
		if ({}.toString.apply(a) !== '[object Promise]') {
			return false;
		}
	}
	return true;
};

export { isPromise };
