/**
  * Compares the given property in the given objects and returns -1, 1, or 0 depending on their difference.
  *
  * This is only used as a sorting function by bbn.fn.order and bbn.fn.multiorder.
  *
  * @method   _compareValues
  * @global
  * @example
  * ```javascript
  * // Same value
  * bbn.fn._compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'value');
  * // 0
  * ```
  * @example
  * ```javascript
  * // First value smaller than second
  * bbn.fn._compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'year');
  * // -1
  * ```
  * @example
  * ```javascript
  * // First value greater than second
  * bbn.fn._compareValues({year: 2017, value: 2}, {year: 2016, value: 2}, 'year');
  * // 1
  * ```
  * @example
  * ```javascript
  * // First value is undefined
  * bbn.fn._compareValues({year: 2017}, {year: 2016, value: 2}, 'value');
  * // 1
  * ```
  * @memberof bbn.fn
  * @param    {Object} a    First object for comparison
  * @param    {Object} b    Second object for comparison
  * @param    {String} prop Property to compare
  * @param    {String} [dir=asc]  Direction of comparison (desc or asc by default)
  * @returns  {Number} Always either -1, 1, or 0
  */
declare const _compareValues: (a: any, b: any, prop: any, dir?: string) => 0 | 1 | -1;
export { _compareValues };
