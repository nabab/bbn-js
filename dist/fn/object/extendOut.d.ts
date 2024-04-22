/**
 * Returns a new object made of the properties from all the given objects.
 *
 * Compared to bbn.fn.extend this still treats the arguments from left to right
 * but without overwriting existing properties, and returning a new object.
 *
 * @method   extendOut
 * @global
 * @example
 * ```javascript
 * //{field1: 1, field2: 2, field3: 3, items: {item: 0, item1: 1, item2: 2}, field4: 4}
 * bbn.fn.extendOut({field1: 1, field2: 2, field3: 3, items: {item: 0}}, {field4: 4, items: {item1: 1, item2: 2}});
 * ```
 * @memberof bbn.fn
 * @returns  {Object}
 */
export default function extendOut(...args: object[]): any;
