/**
 * Returns the timestamp of the given seconds if an argument is given, else returns the timestamp of new Date().
 * @method   microtimestamp
 * @global
 * @example
 * ```javascript
 * //1587031047918
 * bbn.fn.timestamp();
 * ```
 * @memberof bbn.fn
 * @returns  {Number}
 */
export default function microtimestamp() {
    return window.performance.now() + performance.timeOrigin;
}
;
