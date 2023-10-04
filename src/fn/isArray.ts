const isArray = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let a of args) {
		if (!Array.isArray(a)) {
			return false;
		}
	}
	return true;
};

export { isArray };
