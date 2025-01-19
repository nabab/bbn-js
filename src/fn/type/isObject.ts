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
export default function isObject(...args: any[]): boolean {
  if (!args.length) return false;
  for (let a of args) {
    if ({}.toString.apply(a).substr(0, 7) !== "[object") {
      return false;
    }
  }
  return true;
};
