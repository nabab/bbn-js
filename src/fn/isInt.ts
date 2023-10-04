const isInt = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let a of args) {
		if (!Number.isInteger(a)) {
			return false;
		}
	}

	return true;
};

export { isInt };
