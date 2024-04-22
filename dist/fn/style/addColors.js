import numProperties from '../object/numProperties.js';
import iterate from '../loop/iterate.js';
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
export default function addColors(colors) {
    if (numProperties(colors)) {
        if (!bbn.var.colors) {
            bbn.var.colors = {};
        }
        var element = document.createElement("style");
        document.head.appendChild(element);
        var sheet_1 = element.sheet;
        // Append style element to head
        var i_1 = 0;
        iterate(colors, function (v, n) {
            bbn.var.colors[n] = v;
            sheet_1.insertRule(".bbn-" +
                n +
                ", .bbn-color-text-" +
                n +
                " {color: " +
                v +
                " !important;}", i_1);
            sheet_1.insertRule("svg.bbn-" +
                n +
                ", .bbn-" +
                n +
                " svg, svg.bbn-color-text-" +
                n +
                ", .bbn-color-text-" +
                n +
                " svg {fill: " +
                v +
                ";}", i_1);
            sheet_1.insertRule(".bbn-bg-" +
                n +
                ", .bbn-color-bg-" +
                n +
                ", .bbn-color-background-" +
                n +
                " {background-color: " +
                v +
                " !important;}", i_1);
            sheet_1.insertRule(".bbn-border-" +
                n +
                ", .bbn-color-border-" +
                n +
                " {border-color: " +
                v +
                " !important;}", i_1);
            sheet_1.insertRule(".bbn-color-" +
                n +
                " {border-color: " +
                v +
                "; background-color: " +
                v +
                "; color: " +
                v +
                ";}", i_1);
        });
    }
}
;
