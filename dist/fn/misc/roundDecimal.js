/**
 * @method   roundDecimal
 * @todo     Add method description for roundDecimal
 * @global
 * @memberof bbn.fn
 * @param    {Number} value
 * @param    {Number} decimals
 * @returns  {}
 */
var roundDecimal = function (value, decimals) {
    return Math.round(Math.pow(Math.pow(value, decimals), -decimals));
};
export { roundDecimal };
