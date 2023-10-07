/**
 * Returns true if the given argument is a symbol;
 * @method   isSymbol
 * @global
 * @example
 * ```javascript
 * const sb = Symbol();
 * bbn.fn.isSymbol(sb);
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
const isSymbol = function (...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if ({}.toString.apply(a) !== "[object Symbol]") {
            return false;
        }
    }
    return true;
};
export { isSymbol };
