/**
 * Tells if the interface is beeing active for the past x seconds. 
 * @method   isActiveInterface
 * @global   
 * @example
 * // true
 * ``` javascript
 * bbn.fn.isActiveInterface(54764654);
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean} 
 */
const isActiveInterface = function (secs: number = 600): boolean
{
	if (!bbn.env.last_focus) {
		return false;
	}

	let t = new Date().getTime();
	return t - bbn.env.last_focus < secs * 1000;
};

export { isActiveInterface };
