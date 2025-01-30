import getRequestId from './getRequestId.js';
import getLoader from './getLoader.js';
import _deleteLoader from './_deleteLoader.js';
import isFunction from '../type/isFunction.js';
import _addLoader from './_addLoader.js';
import defaultStartLoadingFunction from '../default/defaultStartLoadingFunction.js';
import defaultEndLoadingFunction from '../default/defaultEndLoadingFunction.js';
import defaultAjaxAbortFunction from '../default/defaultAjaxAbortFunction.js';
import defaultAjaxErrorFunction from '../default/defaultAjaxErrorFunction.js';
import arrayBuffer2String from '../convert/arrayBuffer2String.js';
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
export default function stream(url, success, data, failure, abort) {
    var requestId = getRequestId(url, data, 'json');
    var loaderObj = getLoader(requestId);
    //log("IN AJAX", loaderObj? loaderObj.loader : "NO LOADER")
    if (loaderObj === null || loaderObj === void 0 ? void 0 : loaderObj.loader) {
        return loaderObj.loader;
    }
    if (!data) {
        data = {};
    }
    if (bbn.env.token) {
        data._bbn_token = bbn.env.token;
    }
    var aborter = new AbortController();
    var loader = fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        signal: aborter.signal,
        body: JSON.stringify(data || {}) // body data type must match "Content-Type" header
    })
        .then(function (response) {
        if (response.body) {
            var reader_1 = response.body.getReader();
            var isFn_1 = isFunction(success);
            reader_1.read().then(function pump(_a) {
                var done = _a.done, value = _a.value;
                if (isFn_1) {
                    bbn.fn.log(arrayBuffer2String(value));
                    success(JSON.parse(arrayBuffer2String(value)));
                }
                if (done) {
                    // Do something with last chunk of data then exit reader
                    _deleteLoader(requestId, data);
                    defaultEndLoadingFunction(url, tst, data);
                    return;
                }
                // Read some more, and call this function again
                return reader_1.read().then(pump);
            });
        }
    })
        .catch(function (err) {
        var isAbort = axios.isCancel(err);
        _deleteLoader(requestId, data, isAbort);
        defaultEndLoadingFunction(url, tst, data, err);
        if (isAbort) {
            var ok = 1;
            if (isFunction(abort)) {
                ok = abort(err.message, url);
            }
            if (ok) {
                defaultAjaxAbortFunction(err.message, url);
            }
        }
        else {
            var ok = 1;
            if (isFunction(failure)) {
                ok = failure(err.request, err);
            }
            if (ok) {
                defaultAjaxErrorFunction(err.request, err.response ? err.response.data : "", err.response ? err.response.status : err);
            }
        }
    });
    var tst = _addLoader(requestId, loader, aborter);
    defaultStartLoadingFunction(url, tst, data, requestId);
    return loader;
}
;
