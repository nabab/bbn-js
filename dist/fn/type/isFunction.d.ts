/**
 * Returns true if the given argument is a function.
 * @global
 * @example
 * ```javascript
 * bbn.fn.isFunction(() => {
 *  alert('Hello world');
 * });
 * //true
 * ```
 * @method   isFunction
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
declare const isFunction: (...args: any[]) => boolean;
export { isFunction };
