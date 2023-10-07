import { substr } from '../string/substr.js';
import { filter } from '../object/filter.js';
import { extend } from '../object/extend.js';
import { html2text } from '../html/html2text.js';
/**
 * Changes the URL and the associated variables and updates the history.
 *
 * @method   setNavigationVars
 * @todo     Add method description for setNavigationVars
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * // Changing URL
 * bbn.fn.setNavigationVars('my/page', 'My page');
 * // Replacing the previous state
 * bbn.fn.setNavigationVars('my/page/deeper', 'My deeper page', null, true);
 * ```
 *
 * @param    {String}  url   The URL which will become the location.href
 * @param    {String}  title The title corresponding to the given URL
 * @param    {Object}  data  The data if any
 * @param    {Boolean} repl  If true the history state object will replace the current one, will be added otherwise
 *
 * @returns  {void}
 */
var setNavigationVars = function (url, title, data, repl) {
    if (data === void 0) { data = null; }
    if (repl === void 0) { repl = false; }
    // Current path becomes old path
    bbn.env.old_path = bbn.env.path;
    // URL includes the domain
    bbn.env.url = ['https:/', 'http://'].includes(substr(url, 0, 7)) ? url : bbn.env.root + url;
    // Path does not
    bbn.env.path = substr(bbn.env.url, bbn.env.root.length);
    // Params will include each part of the URL
    bbn.env.params = filter(bbn.env.path.split('/'), function (v) {
        return v !== '';
    });
    // Managing history
    var h = window.history;
    if (h) {
        // Current state
        var state = h.state;
        // Future state
        var obj = {
            url: bbn.env.path,
            old_path: bbn.env.old_path || null,
            data: data || {},
            reload: false
        };
        // If same URL we replace
        if (state && state.url === bbn.env.path) {
            if (state.data) {
                extend(obj.data, state.data);
            }
            if (state.title && !title) {
                title = state.title;
            }
            repl = true;
        }
        // If no title the global title
        if (!title) {
            title = bbn.env.siteTitle;
        }
        // Otherwise we add the global title at the end
        else {
            title = html2text(title);
        }
        // Replacing state
        if (repl) {
            obj.reload = true;
            h.replaceState(obj, title, bbn.env.url);
        }
        // Adding state
        else {
            h.pushState(obj, title, bbn.env.url);
        }
    }
};
export { setNavigationVars };
