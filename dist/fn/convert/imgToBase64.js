import imageToCanvas from './imageToCanvas.js';
export default function imgToBase64(img, type) {
    if (type === void 0) { type = 'image/png'; }
    var canvas = imageToCanvas(img);
    return canvas.toDataURL(type);
}
;
