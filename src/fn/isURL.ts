const isURL = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let str of args) {
		if (!bbn.vars.regexp.url.test(str)) {
			return false;
		}
	}

	return true;
};

export { isURL };
