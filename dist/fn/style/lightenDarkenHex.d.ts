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
export default function lightenDarkenHex(hex: any, amt: any): string;
