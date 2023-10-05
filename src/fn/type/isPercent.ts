/**
 * Returns true if the given argument is a percentage.
 * @method   isPercent
 * @global
 * @example
 * ```javascript
 * bbn.fn.isPercent('5%');
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
const isPercent = function (...args: any[]): boolean {
  if (!args.length) return false;
  for (let a of args) {
    if (typeof a !== "string" || !a.match(/^\d+(?:\.\d+)?%$/)) {
      return false;
    }
  }
  return true;
};

export { isPercent };
