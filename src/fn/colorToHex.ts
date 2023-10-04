const colorToHex = function (color) {
	let canvas = document.createElement('canvas').getContext('2d');
	canvas.fillStyle = color;
	return canvas.fillStyle;
};

export { colorToHex };
