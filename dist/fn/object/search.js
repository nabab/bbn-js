import isIterable from '../type/isIterable.js';
import compareConditions from './compareConditions.js';
import { filterToConditions } from './filterToConditions.js';
import isObject from '../type/isObject.js';
import isArray from '../type/isArray.js';
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
export default function search(arr, prop, val = null, operator = '=', startFrom = 0, backward = false) {
    if (!isIterable(arr)) {
        throw new Error(bbn._('The first argument for a search should be iterable') + ' ' + typeof arr + ' ' + bbn._('given'));
    }
    if (!arr.length) {
        return -1;
    }
    let filter;
    let isFn = false;
    let fn;
    if (!prop) {
        isFn = true;
        fn = a => {
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
    else if (typeof prop === 'string') {
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
    else {
        backward = operator === true ? true : false;
        startFrom = typeof (val) === 'number' ? val : (backward ? arr.length - 1 : 0);
        if (typeof prop === 'function') {
            isFn = true;
            fn = prop;
        }
        else if (isObject(prop)) {
            if ('field' in prop && 'value' in prop) {
                filter = {
                    conditions: [prop],
                    logic: 'AND'
                };
            }
            else if (!('conditions' in prop)) {
                const conditions = [];
                for (let p in prop) {
                    conditions.push({
                        field: p,
                        value: prop[p],
                        operator: '='
                    });
                }
                filter = {
                    conditions,
                    logic: 'AND'
                };
            }
            else {
                filter = prop;
            }
        }
        else if (isArray(prop)) {
            filter = {
                conditions: prop,
                logic: 'AND'
            };
        }
    }
    let res = -1;
    if (isFn || filter) {
        if (typeof startFrom !== 'number') {
            startFrom = backward ? arr.length - 1 : 0;
        }
        if (!fn) {
            const subfilter = filterToConditions(filter);
            fn = (ele) => compareConditions(ele, subfilter);
        }
        if (backward) {
            for (let i = startFrom; i >= 0; i--) {
                bbn.env._enumerated.push(true);
                if (fn(arr[i])) {
                    bbn.env._enumerated.pop();
                    arr[i];
                    return i;
                }
                bbn.env._enumerated.pop();
            }
        }
        else {
            for (let i = startFrom; i < arr.length; i++) {
                bbn.env._enumerated.push(true);
                if (fn(arr[i])) {
                    bbn.env._enumerated.pop();
                    arr[i];
                    return i;
                }
                bbn.env._enumerated.pop();
            }
        }
    }
    return res;
}
;
