/**
 * Adds the given color to the object bbn.var.colors in order to be able to use
 * the css classes bbn-bg-myColor for the background and bbn-myColor for the text color.
 *
 * @method   addColors
 * @global
 * @example
 * ```javascript
 * //<div class="bbn-bg-maroon">background</div> <span class="bbn-maroon">text color</span>
 * bbn.fn.addColors({maroon: '#800000'});
 * ```
 * @memberof bbn.fn
 * @param    {Object} colors
 * @returns
 */
declare const addColors: (colors: object) => void;
export { addColors };
