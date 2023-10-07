/**
 * Basic substring function accepting both positive and negative values.
 *
 * @method   substr
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.substr(bbn.fn, 'Hello', -3, -1);
 * // "ll"
 * bbn.fn.substr(bbn.fn, 'Hello', -3);
 * // "llo"
 * bbn.fn.substr(bbn.fn, 'Hello', 0, 1);
 * // "H"
 * ```
 * @memberof bbn.fn
 * @param    {String} str
 * @param    {Number} from
 * @param    {Number} length
 * @returns  {String} Result substring
 */
declare const substr: (str: string, from: number, length?: number) => string;
export { substr };
