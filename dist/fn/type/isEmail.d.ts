/**
 * Intended to check if the argument provided is an e-mail address written correctly
 *
 * @method   isEmail
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.isEmail('test@testorg');
 * //false
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.isEmail('test@test.org');
 * //true
 * ```
 * @memberof bbn.fn
 * @param    {String} st
 * @returns  {Boolean}
 */
declare const isEmail: (...args: any[]) => boolean;
export { isEmail };
