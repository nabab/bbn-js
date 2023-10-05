/**
 * Returns true if the given argument is a dom comment;
 * @method   isComment
 * @example
 * ```javascript
 * bbn.fn.isComment(node.childNodes[0]);
 * //true
 * ```
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
const isComment = function (...args: any[]): boolean {
  if (!args.length) return false;
  for (let a of args) {
    if (!(a instanceof Comment)) {
      return false;
    }
  }
  return true;
};

export { isComment };
