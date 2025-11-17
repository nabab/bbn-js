/**
 * Posts a request in a new window.
 *
 * @method   postOut
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * bbn.fn.postOut('https://external-service.com/download/account-2019-06.pdf', {clientId: 547912, token: xxx});
 * ```
 *
 * @param    {String}   url     The url to which the request should be sent
 * @param    {Object}   data    The data to be sent
 * @param    {Function} success A function to execute in case of success
 * @param    {String}   target  The target attribute of the form
 *
 * @returns  {void}
 */
export default function postOut(url: any, data: any, success?: any, target?: string): void;
