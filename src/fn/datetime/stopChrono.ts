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
export default function stopChrono(name) {
	if (this.constructor.chronos[name || 'default']) {
		let now = new Date().getTime();
		let diff = now - this.constructor.chronos[name || 'default'];
		delete this.constructor.chronos[name || 'default'];
		return diff;
	}
	throw Error("No chrono with name " + (name || 'default'));
};
