import { each } from '../loop/each.js';
import { isArray } from '../type/isArray.js';
import { replaceAll } from '../string/replaceAll.js';
/**
 * Returns a CSV string from the given array of arrays or objects.
 *
 * @method   toCSV
 * @global
 * @example
 * ```javascript
 * bbn.fn.toCSV([['a', 'b', 'c'], ['d', 'e', 'f']]);
 * // "a","b","c";
 * // "d","e","f"
 * ```
 * @example
 * ```javascript
 * bbn.fn.toCSV([{name: "Capuche", fname: "Marc-Antoine"}, {name: "Orfin", fname: "Louis"}]);
 * // "Capuche","Marc-Antoine";
 * // "Orfin","Louis"
 * ```
 * @memberof bbn.fn
 * @param    {Array}  arr        The array to convert
 * @param    {String} [valSep=,] The value separator character
 * @param    {String} [rowSep=;] The row separator character
 * @param    {String} [valEsc="] The string escaper character
 * @returns  {String} A CSV string
 */
var toCSV = function (arr, valSep, rowSep, valEsc) {
    if (valSep === void 0) { valSep = ","; }
    if (rowSep === void 0) { rowSep = ""; }
    if (valEsc === void 0) { valEsc = '"'; }
    if (!valSep) {
        valSep = ",";
    }
    if (!valEsc) {
        valEsc = '"';
    }
    var csvContent = "";
    var total = arr.length;
    each(arr, function (a, i) {
        var num = isArray(a) ? a.length : Object.values(a).length;
        var j = 0;
        each(a, function (b) {
            if (typeof b === "string") {
                csvContent += valEsc + replaceAll(valEsc, "\\" + valEsc, b) + valEsc;
            }
            else if (b === 0) {
                csvContent += "0";
            }
            else if (!b) {
                csvContent += valEsc + valEsc;
            }
            else {
                csvContent += b.toString ? b.toString() : valEsc + valEsc;
            }
            j++;
            if (j < num) {
                csvContent += valSep;
            }
        });
        if (i < total - 1) {
            csvContent += rowSep + "\n";
        }
    });
    return csvContent;
};
export { toCSV };
