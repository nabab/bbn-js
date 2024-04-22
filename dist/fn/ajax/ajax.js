import isObject from '../type/isObject.js';
import replaceAll from '../string/replaceAll.js';
import getRequestId from './getRequestId.js';
import getLoader from './getLoader.js';
import extend from '../object/extend.js';
import numProperties from '../object/numProperties.js';
import _deleteLoader from './_deleteLoader.js';
import isFunction from '../type/isFunction.js';
import _addLoader from './_addLoader.js';
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
export default function ajax(url, datatype, data, success, failure, abort) {
    if (datatype === void 0) { datatype = null; }
    if (data === void 0) { data = null; }
    if (success === void 0) { success = null; }
    if (failure === void 0) { failure = null; }
    if (abort === void 0) { abort = null; }
    if (arguments.length === 1 && url && typeof url === "object" && url.url) {
        if (url.abort) {
            abort = url.abort;
        }
        if (url.failure) {
            failure = url.failure;
        }
        if (url.success) {
            success = url.success;
        }
        if (url.data) {
            data = url.data;
        }
        if (url.datatype) {
            datatype = url.datatype;
        }
        url = url.url;
    }
    if (!url) {
        return;
    }
    if (url && typeof url === "string") {
        if (url.indexOf("://") === -1) {
            // Prevent protocol mismatch by Axios
            url = replaceAll("//", "/", url);
        }
        if (!datatype) {
            datatype = "json";
        }
        var requestId_1 = getRequestId(url, data, datatype);
        var loaderObj = getLoader(requestId_1);
        //log("IN AJAX", loaderObj? loaderObj.loader : "NO LOADER")
        if (loaderObj === null || loaderObj === void 0 ? void 0 : loaderObj.loader) {
            return loaderObj.loader;
        }
        if (bbn.env.token) {
            extend(data || {}, { _bbn_token: bbn.env.token });
        }
        var aborter = new AbortController();
        var options = {
            responseType: datatype,
            signal: aborter.signal
        };
        if (datatype === "text") {
            options['headers'] = {
                accept: "text/javascript",
                "Content-Type": "text/javascript",
            };
        }
        var args = [url];
        if (isObject(data) && numProperties(data) > 0) {
            args.push(data);
        }
        args.push(options);
        var axiosMethod = args.length === 2 ? "get" : "post";
        var loader_1 = axios[axiosMethod]
            .apply(null, args)
            .then(function (res) {
            _deleteLoader(requestId_1, res);
            bbn.fn.defaultEndLoadingFunction(url, tst_1, data, res);
            switch (res.status) {
                case 200:
                    if (isFunction(success)) {
                        success(res.data, res.headers);
                    }
                    break;
                default:
                    bbn.fn.defaultAjaxErrorFunction(loader_1, res);
            }
            return res;
        })
            .catch(function (err) {
            var isAbort = axios.isCancel(err);
            _deleteLoader(requestId_1, err.message || err.response.data, isAbort);
            bbn.fn.defaultEndLoadingFunction(url, tst_1, data, err);
            if (isAbort) {
                var ok = 1;
                if (isFunction(abort)) {
                    ok = abort(err.message, url);
                }
                if (ok) {
                    bbn.fn.defaultAjaxAbortFunction(err.message, url);
                }
            }
            else {
                var ok = 1;
                if (isFunction(failure)) {
                    ok = failure(err.request, err);
                }
                if (ok) {
                    bbn.fn.defaultAjaxErrorFunction(err.request, err.response ? err.response.data : "", err.response ? err.response.status : err);
                }
            }
        });
        var tst_1 = _addLoader(requestId_1, loader_1, aborter);
        bbn.fn.defaultStartLoadingFunction(url, tst_1, data, requestId_1);
        return loader_1;
    }
}
;
