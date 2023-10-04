const setProp = function (
	obj: object,
	prop: string,
	value: any,
	writable: boolean = true,
	configurable: boolean = true
): void
{
	Object.defineProperty(obj, prop, {
		value: value,
		writable: writable,
		configurable: configurable,
	});
};

export { setProp };
