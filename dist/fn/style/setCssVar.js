/**
 * Creates a CSS variable
 * @param {String*} varname
 * @param {String*} value
 * @returns
 */
var setCssVar = function (varname, value) {
    if (varname.indexOf("--") !== 0) {
        varname = "--" + varname;
    }
    /** @todo To Fix */
    document.documentElement.style.setProperty(varname, value);
};
export { setCssVar };
