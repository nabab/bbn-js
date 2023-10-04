const isEvent = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let a of args) {
		if (!(a instanceof Event)) {
			return false;
		}
	}
	return true;
};

export { isEvent };
