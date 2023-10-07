import { each } from '../loop/each.js';
var _private = [];
/**
 * Starts a timer and gives it a name.
 * @method   startChrono
 * @global
 * ``` javascript
 * bbn.fn.startChrono('myChrono');
 * ```
 * @memberof bbn.fn
 * @returns
 */
var startChrono = function (name) {
    var now = new Date().getTime();
    var h1 = 3600 * 1000;
    if (_private.length) {
        each(_private, function (t, n) {
            if (now - t > h1) {
                delete _private[n];
            }
        });
        now = new Date().getTime();
    }
    _private[name] = now;
};
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
 * @returns  {Number}
 */
var stopChrono = function (name) {
    if (_private[name]) {
        var now = new Date().getTime();
        var diff = now - _private[name];
        return diff;
    }
};
export { startChrono, stopChrono };
