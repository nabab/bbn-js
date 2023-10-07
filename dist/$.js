var $ = function (selector, context) {
    if (context === null || context === void 0 ? void 0 : context.querySelectorAll) {
        return context.querySelectorAll(selector);
    }
    return document.body.querySelectorAll(selector);
};
export { $ };
