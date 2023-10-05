/**
 * Returns true if the given argument is a boolean
 * @method   isBoolean
 * @global
 * @example
 * ```javascript
 * const sb = true;
 * bbn.fn.isBoolean(sb); // true
 * const sb = 1;
 * bbn.fn.isBoolean(sb); // false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
const isBoolean = function (...args: any[]): boolean {
  if (!args.length) return false;
  for (let a of args) {
    if (![true, false].includes(a)) {
      return false;
    }
  }

  return true;
};

export { isBoolean };
