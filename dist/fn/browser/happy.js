import { log } from './log.js';
/**
 * Logs the given argument in the browser's console highlighting it with a green background.
 * @method   happy
 * @global
 * @example
 * ``` javascript
 * bbn.fn.happy('I want to log the success of my function');
 * ```
 * @memberof bbn.fn
 * @param    {...any} args
 * @returns
 */
var happy = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.unshift({
        _bbn_console_level: 3,
        _bbn_console_style: 'color: white; background: green; font-size: 18px;',
    });
    log.apply(this, args);
    return this;
};
export { happy };
