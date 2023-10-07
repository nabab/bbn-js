import { imageToCanvas } from './imageToCanvas.js';
var imgToBase64 = function (img, type) {
    if (type === void 0) { type = 'image/png'; }
    var canvas = imageToCanvas(img);
    return canvas.toDataURL(type);
};
export { imgToBase64 };
