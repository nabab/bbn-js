import { search } from "../object/search.js";
import { getRow } from "../object/getRow.js";
import { isObject } from "../type/isObject.js";
/**
 * Deletes a loader and changes its history state after the promise is fullfilled.
 *
 * @method   _deleteLoader
 * @global
 * @ignore
 * @memberof bbn.fn
 *
 * @param    {String}  requestId   The unique ID of the request sent
 * @param    {String|Object}       res     The result of the request
 * @param    {Boolean} isAbort True if the deletion comes from abortion
 *
 * @returns  {Boolean} True if the loader was found
 */
const _deleteLoader = function (requestId, res = null, isAbort = false) {
    let idx = search(bbn.env.loaders, { key: requestId });
    if (idx > -1) {
        let loader = bbn.env.loaders.splice(idx, 1)[0];
        let history = getRow(bbn.env.loadersHistory, { key: requestId, start: loader.start });
        if (history) {
            history.loading = false;
            history.duration = new Date().getTime() - loader.start;
            if (typeof res === 'string') {
                history.errorMessage = res;
                history.error = !isAbort;
                history.abort = isAbort;
            }
            else if (isObject(res)) {
                history.success = true;
            }
        }
        return true;
    }
    return false;
};
export { _deleteLoader };
