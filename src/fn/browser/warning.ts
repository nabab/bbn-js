import { log } from './log' ;

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
const warning = function (message)
{
	const args: any[] = ['BBN: ' + message];
  const obj: object = {
		_bbn_console_mode: 'warn',
		_bbn_console_level: 2,
		_bbn_console_style: 'color: #E64141; background: #F7E195; font-size: 14px',
	};
	args.unshift(obj);
	log.apply(this, args);
};

export { warning };
