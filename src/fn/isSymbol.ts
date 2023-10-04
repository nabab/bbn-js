const isSymbol = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let a of args) {
		if ({}.toString.apply(a) !== '[object Symbol]') {
			return false;
		}
	}

	return true;
};

export { isSymbol };
