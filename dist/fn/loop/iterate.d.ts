/**
 * Executes the provided function on each property of the given object.
 *
 * @method   iterate
 * @global
 * @example
 * ```javascript
 * //["value1", 2]
 * let arr = [];
 * bbn.fn.iterate({field1: "value1", field2: 2}, (val, idx) => {
 *   arr.push(value);
 * });
 * ```
 * @memberof bbn.fn
 * @param    {(Object|Number)} obj       The object to loop on
 * @param    {Function}        fn        The function, gets the array's element and the index as arguments
 * @param    {Boolean}         noPrivate If set to true the _private_ properties won't be included
 * @param    {Boolean}         reverse   If set to true the order of the keys will be reversed
 * @returns  {Object}
 */
declare const iterate: (obj: any, fn: any, noPrivate?: boolean, reverse?: boolean) => any;
export { iterate };
