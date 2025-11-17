/**
 * Starts a timer and gives it a name.
 * @method   getChrono
 * @global   
 * ``` javascript
 * bbn.fn.getChrono('myChrono');
 * ```
 * @memberof bbn.fn
 * 
 * @returns {Number} The elapsed time in milliseconds since the timer was started
 */
export default function getChrono(name: string = 'default'): number
{
  let now = bbn.fn.microtimestamp();
	return now - this.constructor.chronos[name];
};
