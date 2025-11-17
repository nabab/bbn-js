/**
 * Returns true if the given argument is an event.
 * @method   isEvent
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isEvent(...args: any[]): boolean {
  if (!args.length) return false;
  for (let a of args) {
    if (!(a instanceof Event)) {
      return false;
    }
  }
  return true;
};
