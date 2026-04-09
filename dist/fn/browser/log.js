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
export default function log(...args) {
    var _a, _b, _c, _d;
    if (((_b = (_a = globalThis.bbn) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.logging) && (globalThis.console !== undefined)) {
        let cfg;
        let level = 5;
        let fn = 'log';
        if (args[0] && typeof args[0] === 'object' && args[0]._bbn_console_style) {
            if (args[0]._bbn_console_mode && isFunction(globalThis.console[args[0]._bbn_console_mode])) {
                fn = args[0]._bbn_console_mode;
            }
            else {
                cfg = args[0]._bbn_console_style;
                level = args[0]._bbn_console_level;
            }
            args.shift();
        }
        const exec = globalThis.console[fn];
        if (((_d = (_c = globalThis.bbn) === null || _c === void 0 ? void 0 : _c.env) === null || _d === void 0 ? void 0 : _d.loggingLevel) >= level) {
            let i = 0;
            while (i < args.length) {
                let t = typeof args[i];
                let consoleArguments = [args[i]];
                if (t === 'string' || t === 'number') {
                    consoleArguments.unshift('%c %s ', cfg);
                }
                exec.apply(globalThis.console, consoleArguments);
                i++;
            }
        }
    }
}
;
