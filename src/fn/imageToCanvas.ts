const imageToCanvas = function (img): HTMLCanvasElement
{
	let canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	canvas.getContext('2d').drawImage(img, 0, 0);

	return canvas;
};

export { imageToCanvas };
