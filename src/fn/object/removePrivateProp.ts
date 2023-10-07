import { substr } from '../string/substr.js'  ;

/**
  * Returns an object with the original objects' properties starting with an alphanumeric character.
  * 
  * It is presumed that external libraries, bbn variables use prefixes such as _ or $ for
  * naming private properties; this returns a new object purged from these properties.
  * 
  * @method   removePrivateProp
  * @global
  * @example
  * ```javascript
  * bbn.fn.removePrivateProp({
  *   _bbn_timestamp: 1587269593987,
  *   name: "Wonka",
  *   fname: "Willy"
  * });
  * // {name: "Wonka", fname: "Willy"}
  * ```
  * @memberof bbn.fn
  * @param    {Object}  obj  The original object
  * @param    {Boolean} deep If true the function will be reapplied on object properties
  * @returns  {Object}  A new object without only the _public_ properties.
  */
const removePrivateProp = function (obj: object, deep: boolean = false) {
	let r = null;
	if (typeof obj === 'object') {
		r = {};
		for (var n in obj) {
			if (substr(n, 0, 1).match(/^[A-z0-9]$/) && (n in obj)) {
				if (deep && typeof obj[n] === 'object') {
					r[n] = removePrivateProp(obj[n], true);
				} else {
					r[n] = obj[n];
				}
			}
		}
	}

  return r || false;
};

export { removePrivateProp };
