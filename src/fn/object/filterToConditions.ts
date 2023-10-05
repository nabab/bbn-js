import { isObject } from "../type/isObject";
import { isArray } from "../type/isArray";
import { iterate } from "../loop/iterate";

interface Condition {
  field: string;
  operator?: string;
  value?: any;
}
interface Filter {
  conditions?: Condition[];
  logic?: string;
}

/**
 * Converts the given object 'filter' to a valid format of condition.
 *
 * The resulting format will comply with bbn.fn.compareConditions and also with
 * bbn databases functions and complex filters applied to bbn-vue list components.
 *
 * @method   filterToConditions
 * @global
 * @example
 * ```javascript
 * bbn.fn.filterToConditions({num: 3});
 * // {
 * //   logic: "AND",
 * //   conditions: [{
 * //     field: "num",
 * //     operator: "=",
 * //     value: 3
 * //   }]
 * // }
 * ```
 * @example
 * ```javascript
 * bbn.fn.filterToConditions({num: 3}, '>');
 * // {
 * //   logic: "AND",
 * //   conditions: [{
 * //     field: "num",
 * //     operator: ">",
 * //     value: 3
 * //   }]
 * // }
 * ```
 * @memberof bbn.fn
 * @param    {Object} filter
 * @param    {String} operator
 * @returns  {Object}
 */
const filterToConditions = function (
  filter: any,
  operator: string = "="
): Filter {
  if (!isObject(filter)) {
    throw new Error("Error in filterToCondition: filter must be an object");
  }

  if (!filter.conditions || !isArray(filter.conditions)) {
    let tmp = [];
    iterate(filter, (a, n) => {
      if (isObject(a) && typeof a.conditions === "object") {
        tmp.push(filterToConditions(a));
      } else {
        tmp.push({
          field: n,
          operator: operator,
          value: a,
        });
      }
    });
    filter = {
      conditions: tmp,
    };
  }
  if (!filter.logic) {
    filter.logic = "AND";
  }
  return filter;
};

export { Filter, filterToConditions };
