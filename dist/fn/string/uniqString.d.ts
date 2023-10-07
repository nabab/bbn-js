/**
 * Create a unique string in md5 format.
 *
 * Converts and return all the arguments inserted in a unique string in md5 format.
 *
 * @method   uniqString
 * @global
 *
 * @example
 * ```javascript
 * //"6cb083da4d4987af9b4fa4ad8ca23bb1"
 * bbn.fn.uniqString('test',['test'],{id:1, test:2},4);
 * ```
 * @memberof bbn.fn
 * @returns  {String} The unique string in md5 format
 */
declare const uniqString: (...args: any[]) => string;
export { uniqString };
