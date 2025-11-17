/**
 * Gets a CSS variable value
 * @param {String*} varname
 * @returns
 */
export default function getCssVar(varname) {
  if (varname.indexOf("--") !== 0) {
    varname = "--" + varname;
  }

  let r = getComputedStyle(document.documentElement).getPropertyValue(varname);
  if (typeof r === "string") {
    r = r.trim();
  }

  return r;
};
