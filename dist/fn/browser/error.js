import { log } from './log';
/**
 * Throws an error.
 * @method   error
 * @global
 * @ignore
 * ``` javascript
 * bbn.fn.error('I log this error in console with a red background')
 * ```
 * @memberof bbn.fn
 * @param    {String} errorMsg
 * @returns
 */
const error = function (errorMsg) {
    if (arguments.length > 1) {
        const args = [];
        for (let i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        args.unshift({
            _bbn_console_mode: 'error',
            _bbn_console_level: 1,
            _bbn_console_style: 'color: #E64141; background: #F7E195; font-size: 14px',
        });
        log.apply(this, args);
    }
    throw new Error(errorMsg);
};
export { error };
