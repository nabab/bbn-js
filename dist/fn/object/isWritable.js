/**
  * Returns the value of the given field (property) from the first object matching the given filter in an array of objects.
  *
  * The filtering arguments follow the same scheme as bbn.fn.search.
  *
  * @method   isWritable
  * @global
  * @example
  * ```javascript
  * class Foo {
  *   readonly a = 1
  *   b = 2
  * }
  * const foo = new Foo();
  * bbn.fn.isWritable(foo, 'a');
  * // false
  * bbn.fn.isWritable(foo, 'b');
  * // true
  * ```
  *
  * @example
  * ```javascript
  * class Zoo {
  *   get a () { return 1; }
  *   b = 2
  * }
  * const zoo = new Zoo();
  * bbn.fn.isWritable(zoo, 'a');
  * // false
  * bbn.fn.isWritable(zoo, 'b');
  * // true
  * ```
  * @memberof bbn.fn
  * @param    {Object}       obj   The subject object
  * @param    {keyof Object} key The property from which the value is returned
  * @returns  {Boolean}
  */
export default function isWritable(obj, key) {
    var desc = Object.getOwnPropertyDescriptor(obj, key)
        || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), key)
        || {};
    return Boolean(desc.writable);
}
;
