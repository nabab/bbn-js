const isPercent = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let a of args) {
		if (typeof a !== 'string' || !a.match(/^\d+(?:\.\d+)?%$/)) {
			return false;
		}
	}
	return true;
};

export { isPercent };
