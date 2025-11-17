/**
 * Removes all group of spaces by one single space.
 * @param {String} str
 * @returns
 */
export default function removeExtraSpaces(str: string): string {
  return str.replace(/\s+/g, " ").trim();
};
