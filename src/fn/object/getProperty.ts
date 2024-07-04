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
 * @param    {String} props
 * @returns  {*}      The property's value or undefined
 */
export default function getProperty(obj, ...props) {
	if (typeof obj === 'object') {
		const arr = [];
		if (props.length === 1 && typeof props[0] === 'string') {
			arr.push(...props[0].split('.'));
		}
		else {
			arr.push(...props);
		}

		return arr.reduce((o, i) => {
			if (o) {
				return o[bbn.fn.isArray(o) ? parseInt(i) : i];
			}

			return undefined;
		}, obj);
	}
};
