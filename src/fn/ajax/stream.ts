import isObject from '../type/isObject.js'  ;
import replaceAll from '../string/replaceAll.js'  ;
import getRequestId from './getRequestId.js'  ;
import getLoader from './getLoader.js'  ;
import log from '../browser/log.js'  ;
import extend from '../object/extend.js'  ;
import numProperties from '../object/numProperties.js'  ;
import _deleteLoader from './_deleteLoader.js'  ;
import isFunction from '../type/isFunction.js'  ;
import _addLoader from './_addLoader.js'  ;
import defaultStartLoadingFunction from '../default/defaultStartLoadingFunction.js'  ;

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
export default async function stream(
  url,
  success,
  data,
  failure,
  abort
) {
  const requestId = getRequestId(url, data, 'json');
  const loaderObj = getLoader(requestId);
  //log("IN AJAX", loaderObj? loaderObj.loader : "NO LOADER")
  if (loaderObj?.loader) {
    return loaderObj.loader;
  }

  const aborter = new AbortController();
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
    .then(async response => {
      if (response.body) {
        const reader = response.body.getReader();
        const isFn = isFunction(success);
        reader.read().then(function pump({ done, value }) {
          if (isFn) {
            success(value);
          }

          if (done) {
            // Do something with last chunk of data then exit reader
            _deleteLoader(requestId, value);
            bbn.fn.defaultEndLoadingFunction(url, tst, data, value);
            return;
          }
    
          // Read some more, and call this function again
          return reader.read().then(pump);
        });
      }
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
      } else {
        let ok = 1;
        if (isFunction(failure)) {
          ok = failure(err.request, err);
        }
        if (ok) {
          bbn.fn.defaultAjaxErrorFunction(
            err.request,
            err.response ? err.response.data : "",
            err.response ? err.response.status : err
          );
        }
      }
    });
  let tst = _addLoader(requestId, loader, aborter);
  defaultStartLoadingFunction(url, tst, data, requestId);
  return loader;

};
