/**
 * @method   roundDecimal
 * @todo     Add method description for roundDecimal
 * @global
 * @memberof bbn.fn
 * @param    {Number} value
 * @param    {Number} decimals
 * @returns  {}
 */
export default function roundDecimal(value: number, decimals: number) {
  return Math.round(Math.pow(Math.pow(value, decimals), -decimals));
};
