const isBoolean = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let a of args) {
		if (![true, false].includes(a)) {
			return false;
		}
	}

	return true;
};

export { isBoolean };
