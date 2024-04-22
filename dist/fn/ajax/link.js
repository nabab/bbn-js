import treatAjaxArguments from './treatAjaxArguments.js';
import getLoader from './getLoader.js';
import ajax from './ajax.js';
import log from '../browser/log.js';
import extend from '../object/extend.js';
import isObject from '../type/isObject.js';
import callback from './callback.js';
import setNavigationVars from './setNavigationVars.js';
/**
 * Follows a link and if needed by sending the corresponding Ajax request and executing bbn.fn.defaultPreLinkFunction.
 *
 * Once bbn has been initiated this function will be triggered every time a link is clicked.
 * It accepts the same arguments as seen in treatAjaxArguments but will tipically just be called with a URL,
 * the defaultLinkURL functions being in charge of loading the content
 *
 * @method   link
 * @todo     Manage anchors + returned data unclear
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * // Will open in a new window/tab
 * bbn.fn.link('https://nytimes.com');
 * // Will send an Ajax request
 * bbn.fn.link('my/page');
 * // Will open your default email program
 * bbn.fn.link('mailto:postmaster@test.com');
 * ```
 *
 * @returns
 */
export default function link() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var cfg = treatAjaxArguments(args);
    var ok = 1;
    if (cfg === true) {
        return true;
    }
    /* If we can't find a correct link we load the current URL */
    if (!cfg) {
        return link(window.location.href);
    }
    /* Just executing the javascript if there is */
    if (cfg.url.indexOf('javascript:') === 0) {
        return true;
    }
    if (cfg.url.indexOf('data:') === 0) {
        return true;
    }
    if (cfg.url.indexOf('#') === 0) {
        location.href = bbn.env.url + cfg.url;
        /*
        if ( window.history ){
          bbn.env.historyDisabled = true;
          let state = h.state;
          window.history.replaceState(null, state.title, bbn.env.url);
        }
        bbn.env.historyDisabled = false;
        */
        return true;
    }
    else if (cfg.url.indexOf('mailto:') === 0) {
        /* Mail link */
        bbn.env.ignoreUnload = true;
        window.location.href = cfg.url;
        setTimeout(function () {
            bbn.env.ignoreUnload = false;
        }, 0);
        return false;
    }
    if (getLoader(cfg.url)) {
        return false;
    }
    /* Opens an external page in a new window */
    if ((cfg.url.indexOf('http://') === 0 || cfg.url.indexOf('https://') === 0) &&
        cfg.url.indexOf(bbn.env.host) !== 0) {
        if (cfg.e) {
            cfg.e.preventDefault();
        }
        window.open(cfg.url);
        return false;
    }
    else if (cfg.url !== bbn.env.params.join('/') || cfg.force === 1) {
        /* The URL is fine so go ahead if something is not already loading */
        /* If a second callback is defined, it is triggered instead of defaultPreLinkFunction */
        if (cfg.successFn) {
            ok = cfg.successFn(cfg.url);
        }
        else if (bbn.fn.defaultPreLinkFunction) {
            var tmp = bbn.fn.defaultPreLinkFunction(cfg.url, cfg.force, cfg.ele);
            if (tmp.data !== undefined) {
                extend(cfg.obj, tmp.data);
                ok = 1;
            }
            else {
                ok = tmp;
            }
        }
        if (ok) {
            if (ok !== 1 && typeof ok === 'string') {
                cfg.url = ok;
            }
            /** todo Do we keep obj in the unique string or do we make that only one concurrent connection to the same address can occur at the same time? */
            var errSt_1 = bbn._('The Ajax call to') + ' ' + cfg.url + ' ';
            return ajax(cfg.url, cfg.datatype, cfg.obj, function (res) {
                if (!res) {
                    log(errSt_1 + bbn._('returned no answer'));
                }
                if (isObject(res)) {
                    // If there's nothing in the result, just an empty object, the callback stops here and the URL is not changed
                    if (Object.keys(res).length === 0) {
                        log(errSt_1 + bbn._('returned an empty object'));
                    }
                    if (res.new_url) {
                        res.old_path = cfg.url;
                        cfg.url = res.new_url;
                    }
                    else if (res.url && cfg.url !== res.url) {
                        res.old_path = cfg.url;
                    }
                }
                if (callback(cfg.url, res, cfg.successFn, null, cfg.ele) && res.noNav === undefined) {
                    // This solution is not very clean (we can't shorten a URL)
                    if (bbn.env.path.indexOf(cfg.url) !== 0) {
                        setNavigationVars(cfg.url, (res.title ? res.title + ' - ' : '') + bbn.env.siteTitle);
                    }
                }
            }, cfg.errorFn || null);
        }
    }
    return true;
}
;
