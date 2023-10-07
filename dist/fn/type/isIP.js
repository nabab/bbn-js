import { isString } from './isString.js';
var isIP = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var st = args_1[_a];
        if (!isString(st) || !bbn.var.regexp.ip.test(st)) {
            return false;
        }
    }
    return true;
};
export { isIP };
