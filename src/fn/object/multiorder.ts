import { _compareValues } from './_compareValues';

/**
 * Sorts an array of objects based on a set of properties.
 * 
 * The resulting array is the same object, the order is based on _compareValues function
 * applied for each given properties in orders argument.
 *
 * @method   multiorder
 * @global
 * @example
 * ```javascript
 * let ar = [
 *   {movie: "Brazil", year: 1985},
 *   {movie: "Donnie Darko", year: 2001},
 *   {movie: "Out of Africa", year: 1985},
 *   {movie: "Ran", year: 1985},
 *   {movie: "Back to the future", year: 1985},
 *   {movie: "Barry Lindon", year: 1976}
 * ];
 * bbn.fn.multiorder(ar, [
 *   {field: "year", dir: "desc"},
 *   {field: "movie", dir: "asc"}
 * ]);
 * // [
 * //   {movie: "Donnie Darko", year: 2001},
 * //   {movie: "Back to the future", year: 1985},
 * //   {movie: "Brazil", year: 1985},
 * //   {movie: "Out of Africa", year: 1985},
 * //   {movie: "Ran", year: 1985},
 * //   {movie: "Barry Lindon", year: 1976}
 * // ]
 * bbn.fn.multiorder(ar, {year: "desc", movie: "asc"});
 * // Same result with object shortcut
 * ```
 * @memberof bbn.fn
 * @param    {Array}        arr    The array to order
 * @param    {Array|Object} orders The properties and directions (asc, desc) to order by
 * @returns  {Array}        The same array (arr), ordered differently
 */
const multiorder = function (arr: object[], orders: object|BbnOrderItem[]) {
  let currentOrders: BbnOrderItem[];
	if (!Array.isArray(orders) && typeof orders === 'object') {
    currentOrders = [];
		for (var n in orders) {
			currentOrders.push({ field: n, dir: orders[n] });
		}
	}

  let r = arr.slice();
	return r.sort((a, b) => {
		let res;
		for (let order of currentOrders) {
			res = _compareValues(a, b, order.field, order.dir);
			if (res !== 0) {
				return res;
			}
		}
		return 0;
	});
};

export { multiorder };
