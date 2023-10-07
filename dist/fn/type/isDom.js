/**
 * Returns true if the given argument is a dom element;
 * @method   isDom
 * @example
 * ```javascript
 * bbn.fn.isDom(document.body.childNodes[0]);
 * //true
 * ```
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
const isDom = function (...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if (!(a instanceof HTMLElement)) {
            return false;
        }
    }
    return true;
};
export { isDom };
