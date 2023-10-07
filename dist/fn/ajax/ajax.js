import { isObject } from "../type/isObject.js";
import { replaceAll } from "../string/replaceAll.js";
import { getRequestId } from "./getRequestId.js";
import { getLoader } from "./getLoader.js";
import { extend } from "../object/extend.js";
import { numProperties } from "../object/numProperties.js";
import { _deleteLoader } from "./_deleteLoader.js";
import { isFunction } from "../type/isFunction.js";
import { _addLoader } from "./_addLoader.js";
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
const ajax = function (url, datatype = null, data = null, success = null, failure = null, abort = null) {
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
        let requestId = getRequestId(url, data, datatype);
        let loaderObj = getLoader(requestId);
        //log("IN AJAX", loaderObj? loaderObj.loader : "NO LOADER")
        if (loaderObj === null || loaderObj === void 0 ? void 0 : loaderObj.loader) {
            return loaderObj.loader;
        }
        if (bbn.env.token) {
            extend(data || {}, { _bbn_token: bbn.env.token });
        }
        let cancelToken = axios.CancelToken;
        let source = cancelToken.source();
        let options = {
            responseType: datatype,
            cancelToken: source.token,
        };
        if (datatype === "text") {
            options['headers'] = {
                accept: "text/javascript",
                "Content-Type": "text/javascript",
            };
        }
        let args = [url];
        if (isObject(data) && numProperties(data) > 0) {
            args.push(data);
        }
        args.push(options);
        const axiosMethod = args.length === 2 ? "get" : "post";
        let loader = axios[axiosMethod]
            .apply(null, args)
            .then((res) => {
            _deleteLoader(requestId, res);
            bbn.fn.defaultEndLoadingFunction(url, tst, data, res);
            switch (res.status) {
                case 200:
                    if (isFunction(success)) {
                        success(res.data, res.headers);
                    }
                    break;
                default:
                    bbn.fn.defaultAjaxErrorFunction(loader, res);
            }
            return res;
        })
            .catch((err) => {
            let isAbort = axios.isCancel(err);
            _deleteLoader(requestId, err.message || err.response.data, isAbort);
            bbn.fn.defaultEndLoadingFunction(url, tst, data, err);
            if (isAbort) {
                let ok = 1;
                if (isFunction(abort)) {
                    ok = abort(err.message, url);
                }
                if (ok) {
                    bbn.fn.defaultAjaxAbortFunction(err.message, url);
                }
            }
            else {
                let ok = 1;
                if (isFunction(failure)) {
                    ok = failure(err.request, err);
                }
                if (ok) {
                    bbn.fn.defaultAjaxErrorFunction(err.request, err.response ? err.response.data : "", err.response ? err.response.status : err);
                }
            }
        });
        let tst = _addLoader(requestId, loader, source);
        bbn.fn.defaultStartLoadingFunction(url, tst, data, requestId);
        return loader;
    }
};
export { ajax };
