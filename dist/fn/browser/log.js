import isFunction from '../type/isFunction.js';
/**
 * Logs the given arguments in the browser's console.
 * @method   log
 * @global
 * @example
 * ```javascript
 * //'hello'
 * bbn.fn.log('hello');
 * ```
 * @memberof bbn.fn
 * @param    {...any} args
 * @returns
 */
export default function log() {
    var _a, _b;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (window.console !== undefined) {
        var cfg = void 0;
        var level = 5;
        var fn = 'log';
        if (args[0] && typeof args[0] === 'object' && args[0]._bbn_console_style) {
            if (args[0]._bbn_console_mode && isFunction(console[args[0]._bbn_console_mode])) {
                fn = args[0]._bbn_console_mode;
            }
            else {
                cfg = args[0]._bbn_console_style;
                level = args[0]._bbn_console_level;
            }
            args.shift();
        }
        var exec = window.console[fn];
        if (((_b = (_a = window['bbn']) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.loggingLevel) >= level) {
            var i = 0;
            while (i < args.length) {
                var t = typeof args[i];
                var consoleArguments = [args[i]];
                if (t === 'string' || t === 'number') {
                    consoleArguments.unshift('%c %s ', cfg);
                }
                exec.apply(window.console, consoleArguments);
                i++;
            }
        }
    }
    return this;
}
;
