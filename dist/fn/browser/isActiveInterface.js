/**
 * Tells if the interface is beeing active for the past x seconds.
 * @method   isActiveInterface
 * @global
 * @example
 * // true
 * ``` javascript
 * bbn.fn.isActiveInterface(54764654);
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isActiveInterface = function (secs) {
    if (secs === void 0) { secs = 600; }
    if (!bbn.env.last_focus) {
        return false;
    }
    var t = new Date().getTime();
    return t - bbn.env.last_focus < secs * 1000;
};
export { isActiveInterface };
