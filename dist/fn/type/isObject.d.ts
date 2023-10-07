/**
 * Returns true if the given argument is an object.
 * @method   isObject
 * @global
 * @example
 * ```javascript
 * bbn.fn.isObject({name: 'cami', age: 7});
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isObject([{name: 'cami', age: 7}]);
 * //false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
declare const isObject: (...args: any[]) => boolean;
export { isObject };
