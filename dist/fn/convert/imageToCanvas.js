/**
 * Draws the given html image nto a canvas.
 * @method   imageToCanvas
 * @example
 * ``` javascript
 * //<canvas width="60" height="32"></canvas>
 * bbn.fn.imageToCanvas('<img src="path/myImage.png">');
 * ```
 * @global
 * @memberof bbn.fn
 * @param {HTMLElement} img
 * @returns {HTMLCanvasElement}
 */
var imageToCanvas = function (img) {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0);
    return canvas;
};
export { imageToCanvas };
