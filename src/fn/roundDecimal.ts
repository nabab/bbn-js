const roundDecimal = function (value: number, decimals: number) {
	return Math.round(Math.pow(Math.pow(value, decimals), - decimals));
};

export { roundDecimal };
