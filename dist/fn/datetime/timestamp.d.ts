/**
 * Returns the timestamp of the given seconds if an argument is given, else returns the timestamp of new Date().
 * @method   timestamp
 * @global
 * @example
 * ```javascript
 * //1587031047918
 * bbn.fn.timestamp();
 * ```
 * @memberof bbn.fn
 * @param    {Number} seconds
 * @returns  {Boolean}
 */
declare const timestamp: (seconds?: boolean) => number;
export { timestamp };
