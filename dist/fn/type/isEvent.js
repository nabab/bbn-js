/**
 * Returns true if the given argument is an event.
 * @method   isEvent
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
const isEvent = function (...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if (!(a instanceof Event)) {
            return false;
        }
    }
    return true;
};
export { isEvent };
