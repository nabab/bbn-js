import { error } from '../browser/error.js';
import { isFunction } from '../type/isFunction.js';
import { log } from '../browser/log.js';
/**
 * Executes a serie of predefined actions once an Ajax request has been done.
 *
 * Used to treat all the requests functions results, it expects at least url and res to be defined;
 * The following properties from the object res have direct effects:
 * - __url__ {String}: if not given it will be automatically defined by the url parameter;
 *   __the given URL will be passed to location.href (without reloading)__
 * - __prescript__ {String}: if defined it will attempt to evaluate the code contained in the property
 * - __content__ {String}: if defined and ele is defined too, the string will be inserted as content in the element
 * - __script__ {String}: if defined it will be evaluated, executed, and its result will be returned
 * - __data__ {Object}:
 * - __postscript__ {String}: if defined it will be evaluated and executed
 * - __error__ {String}: if defined it will be trigger bbn.fn.defaultAlertFunction
 *
 * If fn is defined it will be executed after prescript, otherwise it will be bbn.fn.defaultLinkFunction.
 *
 * The rest of the function comes executed if either of these results is not empty.
 *
 * If fn2 is defined it will be executed after script, otherwise it will be bbn.fn.defaultPostLinkFunction.
 *
 * Although not private this function should only be used internally.
 *
 * @method   callback
 * @todo     Add method description for callback
 * @global
 * @memberof bbn.fn
 *
 * @param    {String}      url The URL that has been called
 * @param    {Object}      res The object returned by the request
 * @param    {Function}    fn  A first callback function to execute
 * @param    {Function}    fn2 A second callback function to execute
 * @param    {HTMLElement} ele A DOM element where the content will be inserted
 *
 * @returns  {*} The result of the main callback function: res.script, fn, or bbn.fn.defaultLinkFunction
 */
var callback = function (url, res, fn, fn2, ele) {
    if (res === void 0) { res = null; }
    if (fn === void 0) { fn = null; }
    if (fn2 === void 0) { fn2 = null; }
    if (ele === void 0) { ele = null; }
    var tmp = false;
    if (res) {
        tmp = true;
        var t = typeof res;
        var isObj = t.toLowerCase() === 'object';
        var errTitle = void 0;
        if (isObj && res.prescript) {
            /* var ok can be changed to false in prescript execution */
            try {
                eval(res.prescript);
            }
            catch (e) {
                error(e.message || '');
            }
        }
        if (isObj && res.url === undefined) {
            res.url = url;
        }
        /* Case where a callback is defined */
        if (fn && isFunction(fn)) {
            tmp = fn(res, ele);
        }
        else {
            tmp = bbn.fn.defaultLinkFunction(res, ele);
        }
        if (ele && isObj && (res.content !== undefined)) {
            if ('value' in ele) {
                ele.value = res.content;
            }
            else {
                ele.innerHTML = res.content;
            }
        }
        if (tmp && isObj && res.script) {
            if (typeof (res.script) === 'function') {
                tmp = res.script(res.data ? res.data : {}, ele || null);
            }
            else {
                tmp = (function (data, ele) {
                    var r = null;
                    try {
                        r = eval(res.script);
                        if (isFunction(r)) {
                            r = r(data, ele);
                        }
                    }
                    catch (e) {
                        log(e, res);
                        error(isFunction(e.getMessage) ? e.getMessage() : null);
                    }
                    return r;
                })(res.data ? res.data : {}, ele ? ele : false);
            }
        }
        /* Case where a callback is defined */
        if (tmp && fn2 && isFunction(fn2)) {
            fn2(res);
        }
        else if (isObj && bbn.fn.defaultPostLinkFunction) {
            bbn.fn.defaultPostLinkFunction(res, ele);
        }
        if (tmp && isObj && res.postscript) {
            eval(res.postscript);
        }
        if (isObj && res.error) {
            errTitle = res.errorTitle || bbn.lng.server_response;
            bbn.fn.defaultAlertFunction(res.error, errTitle);
        }
    }
    else {
        bbn.fn.defaultAlertFunction(bbn.lng.errorText, bbn.lng.error);
    }
    return tmp;
};
export { callback };
