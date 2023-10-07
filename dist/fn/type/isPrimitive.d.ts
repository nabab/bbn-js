/**
 * Returns true if the given arguments are primitive;
 * @method   isPrimitive
 * @global
 * @example
 * ```javascript
 * bbn.fn.isPrimitive('myString', 6, true);
 * //true
 * bbn.fn.isPrimitive([80,10,22]);
 * //false
 * bbn.fn.isPrimitive({});
 * //false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
declare const isPrimitive: (...args: any[]) => boolean;
export { isPrimitive };
