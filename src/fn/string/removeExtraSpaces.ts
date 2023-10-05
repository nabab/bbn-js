/**
 * Removes all group of spaces by one single space.
 * @param {String} str
 * @returns
 */
const removeExtraSpaces = function (str: string): string {
  return str.replace(/\s+/g, " ").trim();
};

export { removeExtraSpaces };
