const unique = function (arr: any[]): any[]
{
	return arr.filter(function (el, index, ar) {
		return index === ar.indexOf(el);
	});
};

export { unique };
