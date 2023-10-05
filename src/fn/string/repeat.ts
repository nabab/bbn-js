/**
 * Returns a string which is the repetition of the first argument for the number passed in the second argument.
 *
 * @method   repeat
 * @global
 *
 * @example
 * ```javascript
 * //"HelloHelloHello"
 * bbn.fn.repeat('Hello', 3);
 * ```
 * @memberof bbn.fn
 * @returns  {String}
 */
const repeat = function (st: string, num: number): string {
  return st.repeat(num);
};

export { repeat };
