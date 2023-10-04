const correctCase = function (str) {
	return str.replace(/[A-z]{1}/, (c) => c.toUpperCase());
};

export { correctCase };
