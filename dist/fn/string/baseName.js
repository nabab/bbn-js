import { isString } from '../type/isString.js';
import { substr } from './substr.js';
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
var baseName = function (path, suffix) {
    if (path && isString(path)) {
        var bits = path.split("/");
        var res = bits.pop();
        if (!suffix) {
            return res;
        }
        var len = suffix.length;
        if (res && substr(res, -len) === suffix) {
            return substr(res, 0, res.length - len);
        }
    }
    return "";
};
export { baseName };
