/**
 * Looks for and replaces parts of string with what we want.
 *
 * With the first argument you define what to replace,
 * the second argument with what you have to replace instead and the third argument is the string to be replaced.
 *
 * @method   replaceAll
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.replaceAll('day', 'night', 'Today is a beautiful day');
 * //"Tonight is a beautiful night"
 * ```
 * @memberof bbn.fn
 * @param    {String} find
 * @param    {String} replace
 * @param    {String|RegExp} str
 * @param    {String} flags
 * @returns  {String}
 */
export default function replaceAll(find: string, replace: string, str: string, flags?: string): string;
