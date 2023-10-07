import { isString } from '../type/isString' ;
import { substr } from './substr' ;

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
const dirName = function (path) {
  if (isString(path) && path) {
    while (substr(path, path.length - 1) === "/") {
      path = substr(path, 0, path.length - 1);
    }
    let pos = path.lastIndexOf("/");
    if (pos > 0) {
      return substr(path, 0, pos);
    }
    if (pos === 0) {
      return "/";
    }
  }
  return "";
};

export { dirName };
