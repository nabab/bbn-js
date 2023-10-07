var defaultEndLoadingFunction = function (url, timestamp, data, res) {
    if (data === void 0) { data = null; }
    if (res === void 0) { res = null; }
    return true;
};
export { defaultEndLoadingFunction };
