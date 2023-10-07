import { numProperties } from '../object/numProperties';
import { iterate } from '../loop/iterate';
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
const addColors = function (colors) {
    if (numProperties(colors)) {
        if (!bbn.var.colors) {
            bbn.var.colors = {};
        }
        let element = document.createElement("style");
        document.head.appendChild(element);
        let sheet = element.sheet;
        // Append style element to head
        let i = 0;
        iterate(colors, (v, n) => {
            bbn.var.colors[n] = v;
            sheet.insertRule(".bbn-" +
                n +
                ", .bbn-color-text-" +
                n +
                " {color: " +
                v +
                " !important;}", i);
            sheet.insertRule("svg.bbn-" +
                n +
                ", .bbn-" +
                n +
                " svg, svg.bbn-color-text-" +
                n +
                ", .bbn-color-text-" +
                n +
                " svg {fill: " +
                v +
                ";}", i);
            sheet.insertRule(".bbn-bg-" +
                n +
                ", .bbn-color-bg-" +
                n +
                ", .bbn-color-background-" +
                n +
                " {background-color: " +
                v +
                " !important;}", i);
            sheet.insertRule(".bbn-border-" +
                n +
                ", .bbn-color-border-" +
                n +
                " {border-color: " +
                v +
                " !important;}", i);
            sheet.insertRule(".bbn-color-" +
                n +
                " {border-color: " +
                v +
                "; background-color: " +
                v +
                "; color: " +
                v +
                ";}", i);
        });
    }
};
export { addColors };
