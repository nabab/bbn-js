/**
 * Returns true if the given argument is not null or type object or array.
 * @method   isValue
 * @deprecated
 * @see bbn.fn.isPrimitive
 * @example
 * ```javascript
 * bbn.fn.isValue('myString');
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isValue(6);
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isValue([80,10,22]);
 * //false
 * ```
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isValue(...args: any[]): boolean;
