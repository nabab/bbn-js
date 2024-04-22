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
export default function colorToHex(color: any): string | CanvasGradient | CanvasPattern;
