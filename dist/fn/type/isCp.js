import { isDom } from './isDom.js';
var isCp = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length) {
        return false;
    }
    if (!('cp' in bbn) || !('isComponent' in bbn['cp']) || !(typeof bbn['cp'].isComponent === 'function')) {
        return false;
    }
    for (var _b = 0, args_1 = args; _b < args_1.length; _b++) {
        var a = args_1[_b];
        var res = bbn.cp.isComponent(a);
        if (!res || isDom(a) || !((_a = a.$el) === null || _a === void 0 ? void 0 : _a.bbnCid)) {
            return false;
        }
    }
    return true;
};
export { isCp };
