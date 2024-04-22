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
export default function toCSV(arr: any, valSep?: string, rowSep?: string, valEsc?: string): string;
