import isArray from '../type/isArray.js';
import { filterToConditions } from './filterToConditions.js';
import compareConditions from './compareConditions.js';
/**
 * Returns a new array with only the data matching the given filter.
 *
 * The filtering arguments follow the same scheme as bbn.fn.search.
 *
 * @method   filter
 * @global
 * @example
 * ```javascript
 * let ar = [
 *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
 *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
 *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
 *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
 * ];
 * bbn.fn.filter(ar, {director: "Steven Spielberg"});
 * // [
 * //   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
 * //   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
 * // ]
 * bbn.fn.filter(ar, "director", "Steven Spielberg");
 * // Same result as the previous example
 * bbn.fn.filter(ar, {
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
 * // [
 * //   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
 * //   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
 * // ]
 * ```
 *
 * @memberof bbn.fn
 * @param    {Array}                    arr       The subject array
 * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
 * @param    {*}                        val       The value with which comparing the given property
 * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
 * @returns  {Array}                    A new filtered array
 */
export default function filter(arr, prop, val = null, operator = '=') {
    if (!isArray(arr)) {
        bbn.fn.log("NOT ARRAY", arr);
        throw new Error('Error in filter: The first argument must be an array');
    }
    let cfg = {};
    const res = [];
    const isFn = typeof (prop) === 'function';
    if (!prop || !arr.length) {
        return arr;
    }
    if (typeof prop === 'object') {
        operator = val;
        cfg = prop;
    }
    else if (typeof prop === 'string') {
        cfg[prop] = val;
    }
    else if (!isFn) {
        throw new Error('Search function error: The prop argument should be a string or an object');
    }
    if (typeof (prop) === 'function') {
        for (let i = 0; i < arr.length; i++) {
            if (prop(arr[i], i)) {
                res.push(arr[i]);
            }
        }
    }
    else {
        cfg = filterToConditions(cfg, operator);
        if (cfg.conditions && cfg.logic) {
            for (let i = 0; i < arr.length; i++) {
                if (compareConditions(arr[i], cfg)) {
                    res.push(arr[i]);
                }
            }
        }
    }
    return res;
}
;
