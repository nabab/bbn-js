/**
 * Creates a CSS variable
 * @param {String*} varname
 * @param {String*} value
 * @returns
 */
export default function setCssVar(varname, value) {
    if (varname.indexOf("--") !== 0) {
        varname = "--" + varname;
    }
    /** @todo To Fix */
    document.documentElement.style.setProperty(varname, value);
}
;
