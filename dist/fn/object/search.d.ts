import { Filter } from './filterToConditions.js';
/**
 * Retrieves the index of the array's first element corresponding to the given filter.
 *
 * Returns -1 if the element is not found. If the second parameter is an object or function
 * for filtering as defined in bbn.fn.filter, the remaining parameters will be shifted to the
 * left, i.e. val becomes operator, and operator startFrom. And if operator is a number, its value will
 * be given to startFrom and operator will be undefined. The filter object can be complex with different
 * operators (as seen in bbn.fn.compare) and logics (AND/OR), and infinitely nested, of this form:
 * ```javascript
 * {
 *   logic: "AND",
 *   conditions: [
 *     {
 *       field: "prop1",
 *       operator: "eq",
 *       value: "value1"
 *     }, {
 *       logic: "OR",
 *       conditions: [
 *         {
 *            field: "prop2",
 *            operator: "eq",
 *            value: 1
 *         }. {
 *            field: "prop2",
 *            operator: "eq",
 *            value: 2
 *         }
 *       ]
 *     }
 *   ]
 * }
 * ```
 * This way of managing the arguments is used in all the filtering functions.
 *
 * @method   search
 * @global
 * @example
 * ```javascript
 * let ar = [
 *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
 *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
 *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
 *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
 * ];
 *
 * bbn.fn.search(ar, "id", 256);
 * // 2
 *
 * bbn.fn.search(ar, {director: "Steven Spielberg"});
 * // 0
 *
 * bbn.fn.search(ar, {year: 1975, director: "Steven Spielberg"});
 * // 3
 *
 * bbn.fn.search(ar, {director: "Steven Spielberg"}, 1);
 * // 3
 *
 * // Complex filters
 * bbn.fn.search(ar, {
 *   logic: "AND",
 *   conditions: [
 *     {
 *       field: "director",
 *       operator: "eq",
 *       value: "Steven Spielberg"
 *     }, {
 *       logic: "OR",
 *       conditions: [
 *         {
 *            field: "year",
 *            operator: "eq",
 *            value: 1974
 *         }, {
 *            field: "year",
 *            operator: "eq",
 *            value: 1975
 *         }
 *       ]
 *     }
 *   ]
 * });
 * // 3
 *
 * Simple array
 * bbn.fn.search(['a', 'b', 'c'], null, 'b');
 * // 1
 *
 * ```
 *
 * @memberof bbn.fn
 * @param    {Array}                    arr       The subject array
 * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
 * @param    {*}                        val       The value with which comparing the given property
 * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
 * @param    {Number}                   startFrom The index from which the search should start
 * @returns  {Number}                   The index if found, otherwise -1
 */
export default function search(arr: any[], prop: Filter | object | string | ((a: any, i: string | number | symbol) => boolean), val?: any, operator?: number | string, startFrom?: number): number;
