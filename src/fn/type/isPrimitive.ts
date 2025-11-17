/**
 * Returns true if the given arguments are primitive;
 * @method   isPrimitive
 * @global
 * @example
 * ```javascript
 * bbn.fn.isPrimitive('myString', 6, true);
 * //true
 * bbn.fn.isPrimitive([80,10,22]);
 * //false
 * bbn.fn.isPrimitive({});
 * //false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isPrimitive(...args: any[]): boolean {
  if (!args.length) return false;
  for (let a of args) {
    if (a !== null && (typeof a == "object" || typeof a == "function")) {
      return false;
    }
  }

  return true;
};
