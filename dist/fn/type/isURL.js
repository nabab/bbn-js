const isURL = function (...args) {
    if (!args.length)
        return false;
    for (let str of args) {
        if (!bbn.var.regexp.url.test(str)) {
            return false;
        }
    }
    return true;
};
export { isURL };
