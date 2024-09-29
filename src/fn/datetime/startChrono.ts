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
export default function startChrono(name) {
	let now = bbn.fn.microtime();
	if (!this.constructor.chronos) {
		Object.defineProperty(this.constructor, 'chronos', {
			value: Object.create(null),
			writable: false,
			configurable: false,
		});
	}

	this.constructor.chronos[name || 'default'] = now;
};
