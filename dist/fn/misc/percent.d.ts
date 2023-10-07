/**
 * Returns the value of the proportion giving the percentage and the total from where to be calculated.
 * @method   percent
 * @global
 *
 * @example
 * ```javascript
 * //150
 * bbn.fn.percent('15',1000);
 * ```
 *
 * @example
 * ```javascript
 * //75
 * bbn.fn.percent(15,500);
 * ```
 * @memberof bbn.fn
 * @param    {Number|String} percent
 * @param    {Number|String} cent
 * @returns  {Number}
 */
declare const percent: (percent: any, cent: any) => number;
export { percent };