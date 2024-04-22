import isValidDimension from './isValidDimension.js';
/**
 * Returns true if the given value is a valid CSS dimension string or a number, false otherwise.
 *
 * @method   isDimension
 * @global
 * @memberof bbn.fn
 * @param    {String} st
 * @returns
 */
export default function isDimension() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var st = args_1[_a];
        if (typeof st !== "number" || st < 0) {
            return false;
        }
        if (!isValidDimension(st)) {
            return false;
        }
    }
    return true;
}
;
