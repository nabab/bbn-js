const isDom = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let a of args) {
		if (!(a instanceof HTMLElement)) {
			return false;
		}
	}
	return true;
};

export { isDom };
