/**
 * Returns true if the given argument is null;
 * @method   isNull
 * @global
 * @example
 * ```javascript
 * bbn.fn.isNull(myData);
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isNull(...args: any[]): boolean {
  if (!args.length) return false;
  for (let a of args) {
    if ({}.toString.apply(a) !== "[object Null]") {
      return false;
    }
  }
  return true;
};
