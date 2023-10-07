import { isString } from '../type/isString';
import { substr } from './substr';
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
const baseName = function (path, suffix) {
    if (path && isString(path)) {
        let bits = path.split("/");
        let res = bits.pop();
        if (!suffix) {
            return res;
        }
        let len = suffix.length;
        if (res && substr(res, -len) === suffix) {
            return substr(res, 0, res.length - len);
        }
    }
    return "";
};
export { baseName };
