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
var isDom = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (!(a instanceof HTMLElement)) {
            return false;
        }
    }
    return true;
};
export { isDom };
