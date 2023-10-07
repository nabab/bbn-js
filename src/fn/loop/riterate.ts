import { iterate } from "./iterate";

/**
 * Executes the provided function on each property of the given object.
 *
 * @method   riterate
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
 * @returns  {Object}
 */
const riterate = function (
  obj,
  fn,
  noPrivate = false
) {
  return iterate(obj, fn, noPrivate, true);
};

export { riterate };
