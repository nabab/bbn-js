import log from './log.js';
/**
 * Logs the given argument in the browser's console highlighting it with a yellow background and red color.
 * @method   warning
 * @global
 * @example
 * ```javascript
 * bbn.fn.warning('whatever you want to log as a warning');
 * ```
 * @memberof bbn.fn
 * @param    {...any} args
 * @returns
 */
export default function warning(message) {
    var args = ['BBN: ' + message];
    var obj = {
        _bbn_console_mode: 'warn',
        _bbn_console_level: 2,
        _bbn_console_style: 'color: #E64141; background: #F7E195; font-size: 14px',
    };
    args.unshift(obj);
    log.apply(this, args);
}
;
