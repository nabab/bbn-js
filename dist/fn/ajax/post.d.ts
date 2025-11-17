/**
 * Creates a POST XHR through bbn.fn.ajax then launches bbn.fn.callback with the result.
 *
 * URL is the only mandatory argument (see treatAjaxArguments for the arguments).
 *
 * @method   post
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * bbn.fn.post('logout').then(() => {
 *   document.location.reload();
 * });
 * // With data
 * bbn.fn.post('login', {user: 'tn', pass: 'xxx'}).then((d) => {
 *  if (d && d.success) {
 *    alert('Welcome!');
 *  }
 * });
 * // With the callback as argument
 * bbn.fn.post('login', {user: 'tn', pass: 'xxx'}, (d) => {
 *  if (d && d.success) {
 *    alert('Welcome!');
 *  }
 * }, (err) => {
 *   bbn.fn.log(err);
 *   mySpecialErrorFunction(err);
 * });
 * ```
 *
 * @returns  {undefined|Promise}
 */
export default function post(...args: any[]): any;
