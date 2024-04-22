import isObject from '../type/isObject.js';
import isArray from '../type/isArray.js';
import iterate from '../loop/iterate.js';
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
export default function filterToConditions(filter, operator) {
    if (operator === void 0) { operator = "="; }
    if (!isObject(filter)) {
        throw new Error("Error in filterToCondition: filter must be an object");
    }
    if (!filter.conditions || !isArray(filter.conditions)) {
        var tmp_1 = [];
        iterate(filter, function (a, n) {
            if (isObject(a) && typeof a.conditions === "object") {
                tmp_1.push(filterToConditions(a));
            }
            else {
                tmp_1.push({
                    field: n,
                    operator: operator,
                    value: a,
                });
            }
        });
        filter = {
            conditions: tmp_1,
        };
    }
    if (!filter.logic) {
        filter.logic = "AND";
    }
    return filter;
}
;
export { filterToConditions };
