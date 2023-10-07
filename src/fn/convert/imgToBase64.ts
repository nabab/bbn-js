import { imageToCanvas } from './imageToCanvas' ;

const imgToBase64 = function (img, type = 'image/png')
{
	let canvas = imageToCanvas(img);

	return canvas.toDataURL(type);
};

export { imgToBase64 };
