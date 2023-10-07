/**
 * Returns true if the given argument is a promise.
 * @global
 * @example
 * ```javascript
 * bbn.fn.isPromise(bbn.fn.post('myUrl'));
 * // true
 * bbn.fn.isPromise(setTimeout(() => {}))
 * // false
 * bbn.fn.isPromise(myVueObject.$nextTick());
 * // true
 * ```
 * @method   isFunction
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
declare const isPromise: (...args: any[]) => boolean;
export { isPromise };
