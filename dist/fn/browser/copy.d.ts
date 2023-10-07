/**
 * Copies to the clipboard the value of the given string.
 * @method   copy
 * @global
 * ``` javascript
 * let myVal = 'the value you want to copy to clipbord';
 * bbn.fn.copy(myVal);
 *
 * ```
 * @memberof bbn.fn
 * @param {String} st The string to copy.
 * @returns
 */
declare const copy: (st: any) => Promise<unknown>;
export { copy };
