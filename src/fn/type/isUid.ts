/**
 * Returns true if the given argument is array.
 * @method   isArray
 * @global
 * @example
 * ```javascript
 * bbn.fn.isArray([5,2,6]);
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isUid(...args: any[]): boolean {
  if (!args.length) return false;
  for (let a of args) {
    if ((typeof a !== 'string') || !a.match(/^[0-9a-f]{32}$/i)) {
      return false;
    }
  }

  return true;
};
