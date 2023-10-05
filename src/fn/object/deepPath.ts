import { search } from './search';
import { each } from '../loop/each';
import { isArray } from '../type/isArray';

/**
 * Retrieves all elements of a hierarchical array corresponding to the filter.
 * 
 * The arguments follow the same scheme as bbn.fn.search.
 *
 * @method   findAll
 * @global
 * @example
 * ```javascript
 * let ar = [
 *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
 *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
 *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
 *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
 * ];
 * bbn.fn.count(ar, "id", 256);
 * // 1
 * bbn.fn.count(ar, {director: "Steven Spielberg"});
 * // 2
 * bbn.fn.search(ar, "year", 1975, ">");
 * // 3
 * // Complex filters: all the movies from Spielberg between 1974 and 1980
 * bbn.fn.search(ar, {
 *   logic: "AND",
 *   conditions: [
 *     {
 *       field: "director",
 *       operator: "eq",
 *       value: "Steven Spielberg"
 *     }, {
 *       logic: "AND",
 *       conditions: [
 *         {
 *            field: "year",
 *            operator: ">=",
 *            value: 1974
 *         }, {
 *            field: "year",
 *            operator: "<=",
 *            value: 1980
 *         }
 *       ]
 *     }
 *   ]
 * });
 * // 1
 * ```
 * @memberof bbn.fn
 * @todo Do the doc!
 * @param    {Array}                    arr       The subject array
 * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
 * @param    {*}                        val       The value with which comparing the given property
 * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
 * @returns  {Number}                   The number of items
 */
const deepPath = function (arr: any[], filter: object, deepProperty: string, res: any[] = []) {
	let idx;
	let start = 0;
	if ((idx = search(arr, filter, start)) > -1) {
		res.push(idx);
		return res;
	}
	each(arr, (it, i) => {
		if (isArray(it[deepProperty])) {
			let r = res.slice();
			r.push(i);
			let tmp = deepPath(it[deepProperty], filter, deepProperty, r);
			if (tmp !== false) {
				return tmp;
			}
		}
	});
	return false;
};

export { deepPath };
