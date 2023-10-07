var isURL = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var str = args_1[_a];
        if (!bbn.var.regexp.url.test(str)) {
            return false;
        }
    }
    return true;
};
export { isURL };
