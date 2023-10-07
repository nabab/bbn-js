/**
 * Intended to check if the argument provided is a color.
 *
 * It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.
 *
 * @method   isColor
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.isColor("#FF0000")
 * //true
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.isColor("rgb 255, 0, 0");
 * //true
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.isColor("red");
 * //true
 * ```
 * @memberof bbn.fn
 * @param    {String} st
 * @returns  {Boolean}
 */
declare const isColor: (...args: any[]) => boolean;
export { isColor };
