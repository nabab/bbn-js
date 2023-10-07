/**
 * Removes all group of spaces by one single space.
 * @param {String} str
 * @returns
 */
var removeExtraSpaces = function (str) {
    return str.replace(/\s+/g, " ").trim();
};
export { removeExtraSpaces };
