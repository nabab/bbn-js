import isString from '../type/isString.js';
import substr from './substr.js';
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
export default function dirName(path) {
    if (isString(path) && path) {
        while (substr(path, path.length - 1) === "/") {
            path = substr(path, 0, path.length - 1);
        }
        var pos = path.lastIndexOf("/");
        if (pos > 0) {
            return substr(path, 0, pos);
        }
        if (pos === 0) {
            return "/";
        }
    }
    return "";
}
;
