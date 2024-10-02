/**
 * @method   roundDecimal
 * @todo     Add method description for roundDecimal
 * @global
 * @memberof bbn.fn
 * @param    {Number} value
 * @param    {Number} decimals
 * @returns  {}
 */
export default function roundDecimal(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
;
