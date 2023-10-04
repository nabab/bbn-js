const move = function (arr: any[], fromIndex: number, toIndex: number): any[]
{
	if (toIndex >= arr.length) {
		let k = toIndex - arr.length;
		while (k-- + 1) {
			arr.push(undefined);
		}
	}
	arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
	return arr;
};

export { move };
