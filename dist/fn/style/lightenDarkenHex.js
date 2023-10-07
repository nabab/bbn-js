/**
 * Takes color in hex format and lightens or darkens it with the given value.
 * @method   lightenDarkenHex
 * @global
 * @example
 * ```javascript
 * //"#eccb28"
 * bbn.fn.lightenDarkenHex('#c4a300', 40);
 * ```
 *
 * @example
 * ```javascript
 * //"#9c7b00"
 * bbn.fn.lightenDarkenHex(#c4a300', -40);
 * ```
 * @memberof bbn.fn
 * @returns  {String}
 */
var lightenDarkenHex = function (hex, amt) {
    if (hex && amt) {
        var ht = hex[0] === "#";
        hex = ht ? hex.slice(1) : hex;
        var num = parseInt(hex, 16), r = (num >> 16) + amt, b = ((num >> 8) & 0x00ff) + amt, g = (num & 0x0000ff) + amt;
        if (r > 255) {
            r = 255;
        }
        else if (r < 0) {
            r = 0;
        }
        if (b > 255) {
            b = 255;
        }
        else if (b < 0) {
            b = 0;
        }
        if (g > 255) {
            g = 255;
        }
        else if (g < 0) {
            g = 0;
        }
        return (ht ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    }
};
export { lightenDarkenHex };
