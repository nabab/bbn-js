const isSQLDate = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let a of args) {
		if (
			typeof a !== 'string' ||
			!a.match(
				/^([1-2]\d{3})-((0[0-9])|(1[12]))-(([0-2][0-9])|(3[01]))(?:( [0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/
			)
		) {
			return false;
		}
	}
	return true;
};

export { isSQLDate };
