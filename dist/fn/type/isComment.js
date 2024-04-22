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
export default function isComment() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (!(a instanceof Comment)) {
            return false;
        }
    }
    return true;
}
;
