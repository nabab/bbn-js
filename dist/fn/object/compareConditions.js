import { isArray } from '../type/isArray';
import { each } from '../loop/each';
import { compare } from './compare';
import { getProperty } from './getProperty';
/**
 * Checks whether the given data object complies or not with the given filter.
 *
 * The filter format must be full (i.e. with the properties logic and conditions) such as
 * seen in the function bbn.fn.search and can be generated by the function bbn.fn.filterToConditions.
 *
 * @method   compareConditions
 * @global
 * @example
 * ```javascript
 * let item = {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589};
 * bbn.fn.compareConditions(item, {
 *   logic: "AND",
 *   conditions: [
 *     {
 *        field: "director",
 *        value: "Steven Spielberg"
 *     }
 *   ]
 * });
 * // true
 * bbn.fn.compareConditions(item, bbn.fn.filterToConditions({director: "Steven Soderberg"}));
 * // false
 * bbn.fn.compareConditions(item, bbn.fn.filterToConditions({director: "Steven Spielberg"}));
 * // true
 * bbn.fn.compareConditions(item, bbn.fn.filterToConditions({year: 1980}, ">"));
 * // true
 * bbn.fn.compareConditions(item, {
 *   logic: "AND",
 *   conditions: [
 *     {
 *        field: "year",
 *        operator: "<",
 *        value: 1980
 *     }
 *   ]
 * });
 * // false
 * ```
 * @memberof bbn.fn
 * @param    {Object} data
 * @param    {Object} filter
 * @returns  {Boolean}
 */
const compareConditions = function (data, filter) {
    if (!filter.conditions || !filter.logic || !isArray(filter.conditions)) {
        throw new Error("Error in compareConditions: the filter should an abject with conditions and logic properties and conditions should be an array of objects");
    }
    let ok = filter.logic === "AND" ? true : false;
    each(filter.conditions, (a) => {
        let comparator;
        if (a.conditions && isArray(a.conditions)) {
            comparator = compareConditions(data, a);
        }
        else {
            comparator = compare(getProperty(data, a.field), a.value, a.operator);
            if (comparator) {
                let bits = a.field.split(".");
                let prop = bits.pop();
                if (bits.length) {
                    each(bits, (b) => (data = data[b]));
                }
                // Case where both are undefined: value and prop which doesn't exist; they are not the same!
                if (getProperty(data, prop) === undefined && a.value !== undefined) {
                    comparator = false;
                }
            }
        }
        if (comparator) {
            if (filter.logic === "OR") {
                ok = true;
                return false;
            }
        }
        else if (filter.logic === "AND") {
            ok = false;
            return false;
        }
    });
    return ok;
};
export { compareConditions };
