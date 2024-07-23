/**
 *
 * @param {String} varName
 * @returns {String}
 */
export default function firstVarElement(varName) {
    var firstBracket = varName.indexOf('[');
    var firstDot = varName.indexOf('.');
    if (firstBracket === -1 && firstDot === -1) {
        return varName;
    }
    if (firstBracket === -1) {
        return varName.substring(0, firstDot);
    }
    if (firstDot === -1) {
        return varName.substring(0, firstBracket);
    }
    return varName.substring(0, Math.min(firstBracket, firstDot));
}
