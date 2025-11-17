/**
 * Convert an RGB string to hexadecimal.
 *
 * Passing a string with the format that defines the rgb value as an argument,
 * it will return the corresponding string in hexadecimal format.
 *
 * @method   rgb2hex
 * @global
 *
 * @example
 * ```javascript
 * //"#ff0000"
 * bbn.fn.rgb2hex("rgb(255, 0, 0)");
 * ```
 * @memberof bbn.fn
 * @param    {String} rgb
 * @returns  {String}
 */
export default function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return rgb && rgb.length === 4
        ? "#" +
            ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2)
        : "";
}
;
