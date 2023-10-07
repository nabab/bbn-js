/**
 * Returns a date with SQL format.
 *
 * @method   dateSQL
 * @global
 *
 * @example
 * ``` javascript
 * //"2020-04-16 16:15:23"
 * let date = new Date();
 * bbn.fn.dateSQL(date,false);
 * ```
 *
 * @memberof bbn.fn
 * @param    {Date|String} d
 * @param    {String | false} wrong_result Whether or not include the time in the date
 * @returns  {String}
 */
declare const calendar: (d: any, wrong_result?: boolean) => any;
export { calendar };
