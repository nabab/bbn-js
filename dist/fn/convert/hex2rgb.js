/**
 * Convert an hexadecimmal string to RGB.
 *
 * Converts a string that expresses a color in hexadecimal format into an object with
 * the properties that define the color and the corresponding value.
 *
 * @method   hex2rgb
 * @global
 *
 * @example
 * ```javascript
 * //{r:255, g:0, b:0}
 * bbn.fn.hex2rgb("#FF0000");
 * ```
 *
 * @memberof bbn.fn
 * @returns  {*}
 */
var hex2rgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : null;
};
export { hex2rgb };
