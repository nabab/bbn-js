/**
 * @method   isBlob
 * @todo     Add method description for isFunction
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isBlob() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if ({}.toString.apply(a) !== "[object Blob]") {
            return false;
        }
    }
    return true;
}
;
