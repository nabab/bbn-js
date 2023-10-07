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
declare const imageToCanvas: (img: any) => HTMLCanvasElement;
export { imageToCanvas };
