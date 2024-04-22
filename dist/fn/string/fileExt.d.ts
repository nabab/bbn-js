/**
 * Gets the extension from a file's name.
 *
 * The extension is returned in lower case; if the filename has no extension
 * or is not valid it will return an empty string.
 *
 * @method   fileExt
 * @global
 *
 * @example
 * ```javascript
 * // "txt"
 * bbn.fn.fileExt('my_file.txt')
 * ```
 *
 * @example
 * ```javascript
 * // "txt"
 * bbn.fn.fileExt('MY_FILE.TXT')
 * ```
 *
 * @example
 * ```javascript
 * // ""
 * bbn.fn.fileExt('MY_FILE')
 * ```
 *
 * @example
 * ```javascript
 * // ""
 * bbn.fn.fileExt('.MY_FILE')
 * ```
 *
 * @param   {String} filename
 * @returns {String} The file's extension
 */
export default function fileExt(filename: any): any;
