import { isString } from './isString' ;

/**
 * Intended to check if the argument provided is an e-mail address written correctly
 *
 * @method   isEmail
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.isEmail('test@testorg');
 * //false
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.isEmail('test@test.org');
 * //true
 * ```
 * @memberof bbn.fn
 * @param    {String} st
 * @returns  {Boolean}
 */
const isEmail = function (...args: any[]) {
  if (!args.length) return false;

  let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  for (let st of args) {
    if (!isString(st)) {
      return false;
    }

    if (!regex.test(st)) {
      return false;
    }
  }

  return true;
};

export { isEmail };
