import treatAjaxArguments from './treatAjaxArguments.js';
import ajax from './ajax.js';
import callback from './callback.js';
/**
 * Creates a POST XHR through bbn.fn.ajax then launches bbn.fn.callback with the result.
 *
 * URL is the only mandatory argument (see treatAjaxArguments for the arguments).
 *
 * @method   post
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * bbn.fn.post('logout').then(() => {
 *   document.location.reload();
 * });
 * // With data
 * bbn.fn.post('login', {user: 'tn', pass: 'xxx'}).then((d) => {
 *  if (d && d.success) {
 *    alert('Welcome!');
 *  }
 * });
 * // With the callback as argument
 * bbn.fn.post('login', {user: 'tn', pass: 'xxx'}, (d) => {
 *  if (d && d.success) {
 *    alert('Welcome!');
 *  }
 * }, (err) => {
 *   bbn.fn.log(err);
 *   mySpecialErrorFunction(err);
 * });
 * ```
 *
 * @returns  {undefined|Promise}
 */
export default function post() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var cfg = treatAjaxArguments(args);
    if (cfg.url) {
        return ajax(cfg.url, cfg.datatype, cfg.obj, function (res) {
            callback(cfg.url, res, cfg.successFn, null, cfg.ele);
        }, cfg.errorFn, cfg.abortFn);
    }
}
;
