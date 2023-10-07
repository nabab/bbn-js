/**
 * Creates an XHR object and returns the Promise.
 *
 * Checks the URL, makes an ID, creates a loader, sets the general callbacks,
 * makes a POST if data is given a GET otherwise (GET data should be added
 * directly in the URL), and returns the Promise.
 *
 * @method   ajax
 * @global
 * @memberof bbn.fn
 * @example
 * ```javascript
 * // Promise
 * bbn.fn.ajax(
 *   'my/location',
 *   'json',
 *   {id: 7},
 *   d => {
 *     console.log(d);
 *     alert("Success!");
 *   },
 *   err => {
 *     console.log(err);
 *     alert("Failure!");
 *   },
 *   () => {
 *     alert("Request aborted!");
 *   }
 * )
 * ```
 *
 * @example
 * ```javascript
 * // Promise
 * bbn.fn.ajax('my/location')
 *   .then(
 *     d => {
 *       console.log(d);
 *       alert("Success!");
 *     }
 *   )
 *   .catch(
 *     err => {
 *     }
 *   )
 * ```
 *
 * @param    {String}   url      The URL to be requested by XHR
 * @param    {String}   datatype The type of data expected
 * @param    {Object}   data     The data to send through POST
 * @param    {Function} success  The function to execute if the request goes well (200)
 * @param    {Function} failure  The function to execute if the request goes bad
 * @param    {Function} abort    The function to execute if the request is aborted
 *
 * @returns  {Promise}  The Promise created by the generated XHR.
 */
declare const ajax: (url: any, datatype?: any, data?: any, success?: any, failure?: any, abort?: any) => any;
export { ajax };
