/**
 * Returns true if the given arguments are primitive;
 * @method   isPrimitive
 * @global
 * @example
 * ```javascript
 * bbn.fn.isPrimitive('myString', 6, true);
 * //true
 * bbn.fn.isPrimitive([80,10,22]);
 * //false
 * bbn.fn.isPrimitive({});
 * //false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isPrimitive() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (a !== null && (typeof a == "object" || typeof a == "function")) {
            return false;
        }
    }
    return true;
}
;
