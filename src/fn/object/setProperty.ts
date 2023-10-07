import { each } from '../loop/each' ;

/**
 * Returns the value of the given property from the given object.
 * 
 * Looks for the given property in the given object, accepting dot (.) separator 
 * for deep property access, and returns its value if found and undefined otherwise.
 *
 * @method   getProperty
 * @global
 * @example
 * ```javascript
 * bbn.fn.getProperty({a: 1, b: 2}, 'b');
 * // 2
 * ```
 * @example
 * ```javascript
 * bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.o.a');
 * // 33
 * ```
 * @example
 * ```javascript
 * bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.h.a');
 * // undefined
 * ```
 * @memberof bbn.fn
 * @param    {Object} obj
 * @param    {String} prop
 * @returns  {*}      The property's value or undefined
 */
const setProperty = function (obj: object, prop: string, value: any, force?: boolean): void
{
	if (typeof obj === 'object' && typeof prop === 'string') {
		let o = obj;
		const bits = prop.split('.');
		each(bits, (v, i) => {
			if (!o) {
				if (!force) {
					throw new Error(bbn._('The object is invalid'));
				}
				o = {};
			}

			if (bits.length - 1 === i) {
				o[v] = value;
			} else {
				o = o[v];
			}
		});
	}
};

export { setProperty };
