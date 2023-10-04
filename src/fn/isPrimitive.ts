const isPrimitive = function (...args: any[]): boolean {
	if (!args.length) return false;
	for (let a of args) {
		if (a !== null && (typeof a == 'object' || typeof a == 'function')) {
			return false;
		}
	}

	return true;
};

export { isPrimitive };
