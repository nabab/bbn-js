/**
 * Gets a CSS variable value
 * @param {String*} varname
 * @returns
 */
export default function getCssVar(varname) {
    if (varname.indexOf("--") !== 0) {
        varname = "--" + varname;
    }
    return getComputedStyle(document.documentElement).getPropertyValue(varname);
}
;
