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
var timestamp = function (seconds) {
    if (seconds === void 0) { seconds = false; }
    var r = new Date().getTime();
    return seconds ? Math.round(r / 1000) : r;
};
export { timestamp };
