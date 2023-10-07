/**
 * Returns true if the given value is a valid name for a function without checking in reserved words, false otherwise
 * @method   isValidName
 * @global
 * @example
 * ```javascript
 * bbn.fn.isValidName('$myFunc_tion')
 * // true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isValidName('7Y')
 * // false
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.isValidName('function')
 * // true
 * ```
 *
 * @memberof bbn.fn
 * @param    {String} st
 * @returns {Boolean}
 */
declare const isValidName: (...args: any[]) => boolean;
export { isValidName };
