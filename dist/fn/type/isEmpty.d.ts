/**
 * Checks if the argument is empty or not.
 * @method   isEmpty
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.isEmpty({});
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isEmpty({test : 1});
 * //false
 * ```
 * @example
 * ```javascript
 * bbn.fn.isEmpty([]);
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isEmpty(['test']);
 * //false
 * ```
 * @example
 * ```javascript
 * bbn.fn.isEmpty('');
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isEmpty('test');
 * //false
 * ```
 * @memberof bbn.fn
 * @param    {*} obj
 * @returns  {Boolean}
 */
export default function isEmpty(obj: any): boolean;
