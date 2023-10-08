import { isFunction } from '../type/isFunction.js'  ;

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
const log = function (...args) {
	if (window.console !== undefined) {
		let cfg;
		let level = 5;
		let fn = 'log';
		if (args[0] && typeof args[0] === 'object' && args[0]._bbn_console_style) {
			if (args[0]._bbn_console_mode && isFunction(console[args[0]._bbn_console_mode])) {
				fn = args[0]._bbn_console_mode;
			} else {
				cfg = args[0]._bbn_console_style;
				level = args[0]._bbn_console_level;
			}

			args.shift();
		}

		const exec = window.console[fn];
		if (window['bbn']?.env?.loggingLevel >= level) {
			let i = 0;
			while (i < args.length) {
				let t = typeof args[i];
				let consoleArguments = [args[i]];
				if (t === 'string' || t === 'number') {
					consoleArguments.unshift('%c %s ', cfg);
				}

				exec.apply(window.console, consoleArguments);
				i++;
			}
		}
	}
	return this;
};

export { log };
