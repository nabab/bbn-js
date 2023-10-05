import { isObject } from "../type/isObject";
import { replaceAll } from "../string/replaceAll";
import { getRequestId } from "./getRequestId";
import { getLoader } from "./getLoader";
import { log } from "../browser/log";
import { extend } from "../object/extend";
import { numProperties } from "../object/numProperties";
import { _deleteLoader } from "./_deleteLoader";
import { defaultEndLoadingFunction } from "../default/defaultEndLoadingFunction";
import { isFunction } from "../type/isFunction";
import { defaultAjaxErrorFunction } from "../default/defaultAjaxErrorFunction";
import { defaultAjaxAbortFunction } from "../default/defaultAjaxAbortFunction";
import { _addLoader } from "./_addLoader";
import { defaultStartLoadingFunction } from "../default/defaultStartLoadingFunction";

interface Ajax {
  url: string;
  datatype?: string;
  data?: object;
  success?: (data, headers) => any;
  failure?: (url: string, o?: object) => any;
  abort?: (message: string, url: string) => any;
}

interface Options {
  responseType: string;
  cancelToken: string;
  headers?: object;
}

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
const ajax = function (
  url: any,
  datatype: string,
  data,
  success?: (data: object, headers?: object) => any,
  failure?: (url: string, o?: object) => any,
  abort?: (message: string, url: string) => any
) {
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
    if (loaderObj?.loader) {
      return loaderObj.loader;
    }
    if (bbn.env.token) {
      extend(data || {}, { _bbn_token: bbn.env.token });
    }
    let cancelToken = axios.CancelToken;
    let source = cancelToken.source();
    let options: Options = {
      responseType: datatype,
      cancelToken: source.token,
    };
    if (datatype === "text") {
      options.headers = {
        accept: "text/javascript",
        "Content-Type": "text/javascript",
      };
    }

    let args: any[] = [url];
    if (isObject(data) && numProperties(data) > 0) {
      args.push(data);
    }
    args.push(options);
    const axiosMethod = args.length === 2 ? "get" : "post";
    let loader = axios[axiosMethod]
      .apply(null, args)
      .then((res) => {
        _deleteLoader(requestId, res);
        defaultEndLoadingFunction(url, tst, data, res);
        switch (res.status) {
          case 200:
            if (isFunction(success)) {
              success(res.data, res.headers);
            }
            break;
          default:
            defaultAjaxErrorFunction(loader, res);
        }
        return res;
      })
      .catch((err: bbnXHR) => {
        let isAbort = axios.isCancel(err);
        _deleteLoader(requestId, err.message || err.response.data, isAbort);
        defaultEndLoadingFunction(url, tst, data, err);
        if (isAbort) {
          let ok = 1;
          if (isFunction(abort)) {
            ok = abort(err.message, url);
          }
          if (ok) {
            defaultAjaxAbortFunction(err.message, url);
          }
        } else {
          let ok = 1;
          if (isFunction(failure)) {
            ok = failure(err.request, err);
          }
          if (ok) {
            defaultAjaxErrorFunction(
              err.request,
              err.response ? err.response.data : "",
              err.response ? err.response.status : err
            );
          }
        }
      });
    let tst = _addLoader(requestId, loader, source);
    defaultStartLoadingFunction(url, tst, data, requestId);
    return loader;
  }
};

export { ajax };
