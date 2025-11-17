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
 * @param    {Function} done     The function to execute if the request is finished
 *
 * @returns  {Promise}  The Promise created by the generated XHR.
 */
const boundary = '\n';
const isCancel = function (value) {
    return !!(value && value.__BBN_CANCEL__ === true);
};
export default function stream(url, success, data, failure, abort, finished) {
    const requestId = getRequestId(url, data, 'json');
    const loaderObj = getLoader(requestId);
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
    const aborter = new AbortController();
    let json = '';
    const treatJSON = (json) => {
        if (json.length) {
            if (json.indexOf(boundary) > -1) {
                json = bbn.fn.removeEmpty(json.split(boundary));
            }
            else {
                json = [json];
            }
            for (let i in json) {
                try {
                    success(JSON.parse(json[i]));
                }
                catch (e) {
                    throw e;
                }
            }
        }
    };
    const chrono = bbn.fn.startChrono();
    const loader = fetch(url, {
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
        .then(response => {
        bbn.fn.log("RESPONSE IN " + bbn.fn.stopChrono(chrono, true) + " SECS");
        if (response.body) {
            const reader = response.body.getReader();
            const isFn = isFunction(success);
            reader.read().then(function pump({ done, value }) {
                if (done) {
                    // Do something with last chunk of data then exit reader
                    _deleteLoader(requestId, data);
                    if (json) {
                        treatJSON(json);
                    }
                    if (finished) {
                        finished();
                    }
                    return;
                }
                if (isFn) {
                    json += arrayBuffer2String(value).trim();
                    bbn.fn.log(["STREAM RESULT", json.length, json]);
                    if (json) {
                        try {
                            treatJSON(json);
                            json = '';
                        }
                        catch (e) { }
                    }
                    else {
                        success();
                    }
                }
                else {
                    bbn.fn.log(["STREAM SUCCESS IS FN? " + isFn]);
                }
                // Read some more, and call this function again
                return reader.read().then(pump);
            });
        }
    })
        .catch((err) => {
        let isAbort = isCancel(err);
        _deleteLoader(requestId, data, isAbort);
        defaultEndLoadingFunction(url, tst, data, err);
        if (isAbort) {
            let ok = 1;
            if (isFunction(abort)) {
                ok = abort(err.message, url);
            }
            if (ok) {
                defaultAjaxAbortFunction(err.message, url);
            }
        }
        else {
            let ok = 1;
            if (isFunction(failure)) {
                ok = failure(err.request, err);
            }
            if (ok) {
                defaultAjaxErrorFunction(err.request, err.response ? err.response.data : "", err.response ? err.response.status : err);
            }
        }
    });
    let tst = _addLoader(requestId, loader, aborter);
    defaultStartLoadingFunction(url, tst, data, requestId);
    return loader;
}
;
