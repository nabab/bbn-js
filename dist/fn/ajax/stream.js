var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import getRequestId from './getRequestId.js';
import getLoader from './getLoader.js';
import _deleteLoader from './_deleteLoader.js';
import isFunction from '../type/isFunction.js';
import _addLoader from './_addLoader.js';
import defaultStartLoadingFunction from '../default/defaultStartLoadingFunction.js';
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
export default function stream(url, success, data, failure, abort) {
    return __awaiter(this, void 0, void 0, function () {
        var requestId, loaderObj, aborter, loader, tst;
        var _this = this;
        return __generator(this, function (_a) {
            requestId = getRequestId(url, data, 'json');
            loaderObj = getLoader(requestId);
            //log("IN AJAX", loaderObj? loaderObj.loader : "NO LOADER")
            if (loaderObj === null || loaderObj === void 0 ? void 0 : loaderObj.loader) {
                return [2 /*return*/, loaderObj.loader];
            }
            aborter = new AbortController();
            loader = fetch(url, {
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
                .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                var reader_1, isFn_1;
                return __generator(this, function (_a) {
                    if (response.body) {
                        reader_1 = response.body.getReader();
                        isFn_1 = isFunction(success);
                        reader_1.read().then(function pump(_a) {
                            var done = _a.done, value = _a.value;
                            if (isFn_1) {
                                success(value);
                            }
                            if (done) {
                                // Do something with last chunk of data then exit reader
                                _deleteLoader(requestId, value);
                                bbn.fn.defaultEndLoadingFunction(url, tst, data, value);
                                return;
                            }
                            // Read some more, and call this function again
                            return reader_1.read().then(pump);
                        });
                    }
                    return [2 /*return*/];
                });
            }); })
                .catch(function (err) {
                var isAbort = axios.isCancel(err);
                _deleteLoader(requestId, err.message || err.response.data, isAbort);
                bbn.fn.defaultEndLoadingFunction(url, tst, data, err);
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
            tst = _addLoader(requestId, loader, aborter);
            defaultStartLoadingFunction(url, tst, data, requestId);
            return [2 /*return*/, loader];
        });
    });
}
;
