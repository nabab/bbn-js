import { log } from './log.js'  ;

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
const happy = function (...args) {
	args.unshift({
		_bbn_console_level: 3,
		_bbn_console_style: 'color: white; background: green; font-size: 18px;',
	});
	log.apply(this, args);
	return this;
};

export { happy };
