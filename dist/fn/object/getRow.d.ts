/**
 * Returns the first object matching the given filter in an array of objects.
 *
 * The filtering arguments follow the same scheme as bbn.fn.search.
 *
 * @method    getRow
 * @global
 * @example
 * ```javascript
 * let ar = [
 *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
 *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
 *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
 *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
 * ];
 * bbn.fn.getRow(ar, {director: "Steven Spielberg"});
 * // {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
 * bbn.fn.getRow(ar, "director", "Steven Spielberg");
 * // Same result as the previous example
 * bbn.fn.getRow(ar, {
 *   logic: "OR",
 *   conditions: [
 *     {
 *        field: "director",
 *        value: "Richard Donner"
 *     }, {
 *        field: "director",
 *        value: "George Lucas"
 *     }
 *   ]
 * );
 * // {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
 * ```
 * @memberof bbn.fn
 * @param    {Array}                    arr       The subject array
 * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
 * @param    {*}                        val       The value with which comparing the given property
 * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
 * @returns  {Object|Boolean}           The item if found, false otherwise
 */
declare const getRow: (arr: any[], prop: object | string, val?: any, operator?: string) => any | false;
export { getRow };
