const isComment = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let a of args) {
		if (!(a instanceof Comment)) {
			return false;
		}
	}
	return true;
};

export { isComment };
