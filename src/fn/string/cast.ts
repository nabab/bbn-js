/**
 * Returns a string from whatever value.
 *
 * @method   cast
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.nl2br('hello \n world!');
 * //"hello <br> world!"
 * ```
 * @memberof bbn.fn
 * @param    {String} st
 * @returns  {String}
 */
export default function cast(st) {
  if (!st) {
    return '';
  }

  if (st.toString) {
    return st.toString();
  }

  if (typeof st === 'object') {
    return st.constructor?.name || '{}';
  }

  return typeof st === 'string' ? st : '';
};
