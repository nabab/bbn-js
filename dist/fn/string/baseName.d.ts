/**
 * Returns the name of the element indicated by path given to it as an argument.
 *
 * @method   baseName
 * @global
 *
 * @example
 * ```javascript
 * // "file.png"
 * bbn.fn.baseName('folder/other_folder/file.png');
 * ```
 * @example
 * ```javascript
 * // "file"
 * bbn.fn.baseName('folder/other_folder/file.png', '.png');
 * ```
 *
 * @memberof bbn.fn
 * @param    {String} path   The path from which the basename must be extracted
 * @param    {String} suffix An optional suffix that will be removed from the basename
 * @returns  {String} The basename of path
 */
export default function baseName(path: string, suffix?: string): string;
