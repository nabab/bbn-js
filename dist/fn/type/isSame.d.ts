/**
  * Checks whether the data contained in the given objects is identical.
  *
  * The properties starting with a non alphanumerical character and the
  * inherited ones are removed for the comparison, then the properties are
  * compared individually without the order being taken into account.
  *
  * @method   isSame
  * @global
  * @example
  * ```javascript
  * bbn.fn.isSame(
  *   {name: "Wonka", fname: "Willy"},
  *   {fname: "Willy", name: "Wonka"}
  * );
  * // true
  * ```
  * @example
  * ```javascript
  * // Doesn't take into account properties starting with non-alphanumeric characters
  * bbn.fn.isSame(
  *   {name: "Wonka", fname: "Willy", _bbn_timestamp: 1587269593987},
  *   {fname: "Willy", name: "Wonka"}
  * );
  * // true
  * ```
  * @example
  * ```javascript
  * bbn.fn.isSame(
  *   {name: "Wonka", fname: "Willy", real: false},
  *   {fname: "Willy", name: "Wonka"}
  * );
  * // false
  * ```
  * @memberof bbn.fn
  * @param    {Object} obj1
  * @param    {Object} obj2
  * @returns  {Boolean}
  */
declare const isSame: (obj1: any, obj2: any, done?: any[]) => boolean;
export { isSame };
