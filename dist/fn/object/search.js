import { isIterable } from '../type/isIterable.js';
import { compareConditions } from './compareConditions.js';
import { filterToConditions } from './filterToConditions.js';
import { isObject } from '../type/isObject.js';
import { numProperties } from './numProperties.js';
import { isNumber } from '../type/isNumber.js';
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
var search = function (arr, prop, val, operator, startFrom) {
    if (val === void 0) { val = null; }
    if (operator === void 0) { operator = '='; }
    if (startFrom === void 0) { startFrom = 0; }
    if (!isIterable(arr)) {
        throw new Error(bbn._('The first argument for a search should be iterable') + ' ' + typeof arr + ' ' + bbn._('given'));
    }
    if (!arr.length) {
        return -1;
    }
    var filter;
    var isFn = false;
    if (typeof prop === 'string') {
        filter = {
            conditions: [
                {
                    field: prop,
                    value: val,
                    operator: operator || '=',
                },
            ]
        };
    }
    else if (!prop) {
        isFn = true;
        filter = function (a) {
            return compareConditions({ value: a }, filterToConditions({
                logic: 'AND',
                conditions: [
                    {
                        field: 'value',
                        operator: operator || '=',
                        value: val,
                    },
                ],
            }));
        };
    }
    else {
        startFrom = typeof (operator) === 'number' ? operator : 0;
        operator = val;
        if (isObject(prop)) {
            filter = prop;
        }
        else if (typeof (prop) === 'function') {
            isFn = true;
            filter = prop;
        }
    }
    if (isFn || (isObject(filter) && numProperties(filter))) {
        if (isNumber(operator)) {
            startFrom = typeof (operator) === 'number' ? operator : 0;
            operator = undefined;
        }
        if (!isNumber(startFrom)) {
            startFrom = 0;
        }
        if (typeof filter === 'function') {
            for (var i = startFrom; i < arr.length; i++) {
                if (filter(arr[i])) {
                    return i;
                }
            }
        }
        else {
            filter = filterToConditions(filter);
            for (var i = startFrom; i < arr.length; i++) {
                if (compareConditions(arr[i], filter)) {
                    return i;
                }
            }
        }
    }
    return -1;
};
export { search };
