import { _compareValues } from './_compareValues';

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
