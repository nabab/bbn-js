/**
  * Returns the value of the given field (property) from the first object matching the given filter in an array of objects.
  *
  * The filtering arguments follow the same scheme as bbn.fn.search.
  *
  * @method   getField
  * @global
  * @example
  * ```javascript
  * let ar = [
  *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
  *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
  *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
  *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
  * ];
  * bbn.fn.getField(ar, "name", {id: 256});
  * // Star wars
  * bbn.fn.getField(ar, "name", "id", 689);
  * // Goonies
  * ```
  * @memberof bbn.fn
  * @param    {Array}                    arr       The subject array
  * @param    {String}                   field     The property from which the value is returned
  * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
  * @param    {*}                        val       The value with which comparing the given property
  * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
  * @returns  {*}
  */
export default function getField(arr: any[], field: string, prop?: object | string, val?: any, operator?: string): any;
