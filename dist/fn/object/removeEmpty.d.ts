/**
 * Returns a new array, having removed all elements deemed empty from the given array.
 *
 * Removes all the elements which are empty, i.e. false, 0, null, '', NaN, or undefined.
 *
 * @method   removeEmpty
 * @global
 * @example
 * ```javascript
 * bbn.fn.removeEmpty([{prop1: 10, prop2: 20}, '', {}, null, 1, undefined, 0, false, 25]);
 * // [{prop1: 10, prop2: 20}, 1, 25]
 * ```
 * @memberof bbn.fn
 * @param    {Array} arr
 * @returns  {Array}
 */
declare const removeEmpty: (arr: any[]) => any[];
export { removeEmpty };
