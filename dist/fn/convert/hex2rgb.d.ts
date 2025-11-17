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
export default function hex2rgb(hex: any): {
    r: number;
    g: number;
    b: number;
};
