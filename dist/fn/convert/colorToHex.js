/**
 * Returns the hex color of the given rgb or color name.
 * @method   colorToHex
 * @global
 * @example
 * ```javascript
 * //"#ff0000"
 * bbn.fn.colorToHex('red');
 * ```
 *
 * @example
 * ```javascript
 * //"#ff0000"
 * bbn.fn.colorToHex('rgb(255,0,0)');
 * ```
 * @memberof bbn.fn
 * @returns  {String}
 */
var colorToHex = function (color) {
    var canvas = document.createElement("canvas").getContext("2d");
    canvas.fillStyle = color;
    return canvas.fillStyle;
};
export { colorToHex };
