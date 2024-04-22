import imageToCanvas from './imageToCanvas.js'  ;

export default function imgToBase64(img, type = 'image/png')
{
	let canvas = imageToCanvas(img);

	return canvas.toDataURL(type);
};
