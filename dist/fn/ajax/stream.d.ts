/**
 * @method   stream
 * @global
 * @memberof bbn.fn
 *
 * @param    {String}   url      The URL to be requested by XHR
 * @param    {Function} success  The function to execute if the request goes well (200)
 * @param    {Object}   data     The data to send through POST
 * @param    {Function} failure  The function to execute if the request goes bad
 * @param    {Function} abort    The function to execute if the request is aborted
 *
 * @returns  {Promise}  The Promise created by the generated XHR.
 */
export default function stream(url: any, success: any, data: any, failure: any, abort: any): any;
