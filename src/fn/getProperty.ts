const getProperty = function (obj, prop) {
	if (typeof obj === 'object' && typeof prop === 'string') {
		return prop.split('.').reduce((o, i) => {
			if (o) {
				return o[i];
			}

			return undefined;
		}, obj);
	}
};

export { getProperty };
