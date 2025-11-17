/**
 * Returns the length of time the window has not been focused in seconds.
 * @method   getTimeoff
 * @global
 * @example
 * ``` javascript
 * bbn.fn.getTimeoff();
 * // 0
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function getTimeoff() {
    if (!bbn.env.isFocused) {
        return Math.round(new Date().getTime() / 1000 - bbn.env.timeoff);
    }
    return 0;
}
;
