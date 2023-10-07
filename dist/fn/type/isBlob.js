/**
 * @method   isBlob
 * @todo     Add method description for isFunction
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
const isBlob = function (...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if ({}.toString.apply(a) !== "[object Blob]") {
            return false;
        }
    }
    return true;
};
export { isBlob };
