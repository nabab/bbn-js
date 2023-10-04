const isCanvas = function (...args: any[]): boolean
{
	if (!args.length) return false;
	for (let a of args) {
		if (!(a instanceof HTMLCanvasElement)) {
			return false;
		}
	}
	return true;
};

export { isCanvas };
