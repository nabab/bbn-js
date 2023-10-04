const isFunction = function (...args: any[]): boolean
{
	if (!args.length) return false;

	for (let obj of args) {
		if (!(obj && obj.constructor && obj.call && obj.apply)) {
			return false;
		}
	}
	return true;
};

export { isFunction };
