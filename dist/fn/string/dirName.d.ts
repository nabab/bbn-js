/**
 * Returns the path of the folder containing the last hierarchical element of the path.
 *
 * @method   dirName
 * @global
 *
 * @example
 * ```javascript
 * //"folder/other_folder"
 * bbn.fn.dirName('folder/other_folder/file');
 * ```
 * @memberof bbn.fn
 * @param    {String} path
 * @returns  {String} path of the folder
 */
export default function dirName(path: any): string;
