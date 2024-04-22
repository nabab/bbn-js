import checkType from '../type/checkType.js';
import filter from './filter.js';
import each from '../loop/each.js';
/**
 * Returns all the unique values of the given field (property) from the first object matching the given filter in an array.
 *
 * The filtering arguments follow the same scheme as bbn.fn.search.
 *
 * @method   getFieldValues
 * @global
 * @example
 * ```javascript
 * let ar = [
 *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
 *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
 *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
 *   {name: "Barry Lindon", director: "Stanley Kubrick", year: 1975, id: 802}
 * ];
 * bbn.fn.getFieldValues(ar, "director");
 * // ["Steven Spielberg", "George Lucas", "Stanley Kubrick"]
 * bbn.fn.getFieldValues(ar, "name", {year: 1975});
 * // ["Jaws", "Barry Lindon"]
 * ```
 * @memberof bbn.fn
 * @param    {Array}                    arr       The subject array
 * @param    {String}                   field     The property from which the values are returned
 * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
 * @param    {*}                        val       The value with which comparing the given property
 * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
 * @returns  {*}
 */
export default function getFieldValues(arr, field, prop, val, operator) {
    checkType(field, 'string');
    if (prop) {
        arr = filter(arr, prop, val, operator);
    }
    var res = [];
    each(arr, function (a) { return (res.indexOf(a[field]) === -1 ? res.push(a[field]) : null); });
    return res;
}
;
