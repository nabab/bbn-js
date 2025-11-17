/**
 * @method   isBlob
 * @todo     Add method description for isFunction
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isBlob(...args: any[]): boolean {
  if (!args.length) return false;
  for (let a of args) {
    if ({}.toString.apply(a) !== "[object Blob]") {
      return false;
    }
  }
  return true;
};
