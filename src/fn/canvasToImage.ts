const canvasToImage = function (canvas) {
	let img = new Image();
	img.src = canvas.toDataURL('image/png');
	return img;
};

export { canvasToImage };
