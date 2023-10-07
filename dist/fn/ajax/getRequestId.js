import { iterate } from '../loop/iterate.js';
import { md5 } from '../string/md5.js';
/**
 * Returns a unique ID for a "loader" based on the URL, the data keys and the datatype.
 *
 * The routing functions don't allow to send the same request at the same moment,
 * therefore a unique ID is generated to identify them, based on the URL,
 * the keys of the data sent, and the expected returned data type.
 *
 * @method   getRequestId
 * @global
 *
 * @example
 * ```javascript
 * // The URL is the first part of the key
 * bbn.fn.getRequestId('my/location', {a: 1, b: 2});
 * // my/location:af27f0e81533ae2bae3c25dea67359f6
 * bbn.fn.getRequestId('my/other/location', {a: 1, b: 2});
 * // my/other/location:af27f0e81533ae2bae3c25dea67359f6
 * ```
 *
 * @example
 * ```javascript
 * // A change of value will not change the requestId
 * bbn.fn.getRequestId('my/location', {a: 1, b: 3});
 * // my/location:af27f0e81533ae2bae3c25dea67359f6
 * // A change of key will
 * bbn.fn.getRequestId('my/location', {a: 1, c: 3});
 * // my/location:fde97ca7c6c998c911f4ab481a136d5f
 * ```
 *
 * @example
 * ```javascript
 * // Same with nested object
 * bbn.fn.getRequestId('my/location', {data: {a: 1, b: 3}});
 * // my/location:a7a58435275054106c4e4c9fb0cea5e5
 * bbn.fn.getRequestId('my/location', {data: {a: 1, b: 2}});
 * // my/location:a7a58435275054106c4e4c9fb0cea5e5
 * bbn.fn.getRequestId('my/location', {data: {a: 1, c: 3}});
 * // my/location:730da481e30d421afbadf1f1282dabb7
 * ```
 *
 * @memberof bbn.fn
 *
 * @param    {String} url      The URL used by the request
 * @param    {Object} data     The data sent to the URL
 * @param    {String} datatype The type of data requested (JSON by default)
 *
 * @returns  {String} The unique ID
 */
var getRequestId = function (url, data, datatype) {
    var d = {};
    if (data) {
        iterate(data, function (a, n) {
            if (n.indexOf('_bbn') === -1) {
                d[n] = a;
            }
        });
    }
    return url + ':' + md5((datatype || 'json') + JSON.stringify(d));
};
export { getRequestId };
