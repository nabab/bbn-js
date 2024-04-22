/**
 * @ignore
 * @method   isSQLDate
 * @todo     Add method description for isSQLDate
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isSQLDate() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (typeof a !== "string" ||
            !a.match(/^([1-2]\d{3})-((0\d)|(1[12]))-(([0-2]\d)|(3[01]))(?:( [0-2]\d):([0-5]\d):([0-5]\d))?$/)) {
            return false;
        }
    }
    return true;
}
;
