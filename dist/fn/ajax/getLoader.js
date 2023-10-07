import { search } from '../object/search.js';
/**
 * Finds the loader object corresponding to the given unique ID and returns it if found.
 *
 * The loader is an object representing an Ajax request, with the following properties:
 * * _key_ is the unique ID (_requestId_) of the loader
 * * _url_ is the URL called by the request
 * * _loader_ is the Promise from the Axios XHR
 * * _source_ is the source object for aborting the request
 * * _start_ is the timestamp of the moment the request was sent
 *
 * @method   getLoader
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * bbn.fn.post('my/script', {a: 1, b: 2});
 * let requestId = bbn.fn.getRequestId('my/script', {a: 1, b: 2});
 * if (requestId) {
 *   let loader = bbn.fn.getLoader(requestId);
 *   console.log(loader);
 *   // {
 *   //    key: "my/script:af27f0e81533ae2bae3c25dea67359f6",
 *   //    url: "my/script",
 *   //    loader: {Promise},
 *   //    source: {token: {CancelToken}, cancel: {Function}},
 *   //    start: 1591804716757
 *   // }
 * }
 * ```
 *
 * @param    {String} requestId The unique ID of the request as used in bbn.env.loaders
 *
 * @returns  {null|Object} The corresponding loader Object if it exists, false otherwise
 */
var getLoader = function (requestId) {
    var idx = search(bbn.env.loaders, { key: requestId });
    if (idx > -1) {
        return bbn.env.loaders[idx];
    }
    return null;
};
export { getLoader };
