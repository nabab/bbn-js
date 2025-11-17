/**
 * @method   stopChrono
 * @global
 * @example
 * ``` javascript
 * bbn.fn.stopChrono('myChrono');
 * // 20162
 * ```
 * @memberof bbn.fn
 * @param {String} name
 * @param {Boolean} secs
 * @returns  {Number}
 */
export default function stopChrono(name, secs) {
    if (this.constructor.chronos[name || 'default']) {
        let now = bbn.fn.microtimestamp();
        let diff = now - this.constructor.chronos[name || 'default'];
        delete this.constructor.chronos[name || 'default'];
        if (secs) {
            diff = Math.round(diff) / 1000;
        }
        return diff;
    }
    throw Error("No chrono with name " + (name || 'default'));
}
;
