const isBlob = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let a of args) {
		if ({}.toString.apply(a) !== '[object Blob]') {
			return false;
		}
	}
	return true;
};

export { isBlob };
