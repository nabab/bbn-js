const pickValue = function (arr: any[]) {
	if (Array.isArray(arr) && arr.length) {
		return arr[Math.floor(Math.random() * arr.length)];
	}
};

export { pickValue };
