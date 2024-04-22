import isString from './isString.js';
import isIP from './isIP.js';
export default function isHostname() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var st = args_1[_a];
        if (!isString(st)) {
            return false;
        }
        if (!isIP(st) && !bbn.var.regexp.hostname.test(st)) {
            return false;
        }
    }
    return true;
}
;
