/**
 * Returns true if the given object can be iterated as an array (numerically).
 *
 * It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.
 *
 * @method   isIterable
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * bbn.fn.isIterable([1, 2])
 * // true
 * bbn.fn.isIterable({a: 1, b: 2})
 * // false
 * bbn.fn.isIterable(25)
 * // false
 * bbn.fn.isIterable(document.body.querySelectorAll('.container > div'))
 * // true
 * ```
 *
 * @param    {String} st
 *
 * @returns  {Boolean}
 */
export default function isIterable(...args: any[]): boolean;
