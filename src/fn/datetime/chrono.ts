import { each } from "../loop/each.js";

const _private = [];

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
const startChrono = function (name) {
	let now = new Date().getTime();
	let h1 = 3600 * 1000;
	if (_private.length) {
		each(_private, (t, n) => {
			if (now - t > h1) {
				delete _private[n];
			}
		});
		now = new Date().getTime();
	}
	_private[name] = now;
};

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
const stopChrono = function (name) {
	if (_private[name]) {
		let now = new Date().getTime();
		let diff = now - _private[name];
		return diff;
	}
};


export { startChrono, stopChrono};
