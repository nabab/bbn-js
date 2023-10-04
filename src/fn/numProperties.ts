const numProperties = function (obj: object): number
{
	if (!obj || typeof obj !== 'object') {
		return 0;
	}

	return Object.keys(obj).length;
};

export { numProperties };
