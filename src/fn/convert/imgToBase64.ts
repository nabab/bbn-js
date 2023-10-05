import { imageToCanvas } from './imageToCanvas';
import { canvasToImage } from './canvasToImage';

const imgToBase64 = function (img, type:string = 'image/png'): string
{
	let canvas = imageToCanvas(img);
	//return canvasToImage(canvas);
	return canvas.toDataURL(type);
};

export { imgToBase64 };
