const isNumber = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let a of args) {
		if (['boolean', 'object', 'symbol'].includes(typeof a) || a === '' || isNaN(a)) {
			return false;
		}
	}
	return true;
};

export { isNumber };
