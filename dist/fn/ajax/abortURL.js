import { each } from "../loop/each.js";
import { filter } from "../object/filter.js";
/**
 * Aborts (client side) all the XHR using the given URL if it still exists.
 *
 * This will throw an error if the loader can't be found.
 *
 * @method   abortURL
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * bbn.fn.post('my/script', {a: 1, b: 2});
 * bbn.fn.post('my/script', {c: 1, d: 2});
 * bbn.fn.abortURL('my/script');
 * ```
 *
 * @param    {String} requestId An ID generated by getRequestId
 *
 * @returns  {undefined}
 */
const abortURL = function (url) {
    each(filter(bbn.env.loaders, { url: url }), (a) => {
        if (a && a.source) {
            a.source.cancel('Operation canceled by the user.');
        }
        else {
            throw new Error('Impossible to find the loader with URL ' + url);
        }
    });
};
export { abortURL };
