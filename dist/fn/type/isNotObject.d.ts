/**
 * Returns true if the given argument is not null or type object or array.
 * @method   isNotObject
 * @see bbn.fn.isPrimitive
 * @example
 * ```javascript
 * bbn.fn.isNotObject('myString');
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isNotObject(6);
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isNotObject([80,10,22]);
 * //false
 * ```
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isNotObject(...args: any[]): boolean;
