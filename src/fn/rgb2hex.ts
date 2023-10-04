const rgb2hex = function (rgb) {
	rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
	return rgb && rgb.length === 4
		? '#' +
				('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
				('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
				('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
		: '';
};

export { rgb2hex };
