import { search } from '../object/search.js';
import { getRow } from '../object/getRow.js';
import { isObject } from '../type/isObject.js';
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
var _deleteLoader = function (requestId, res, isAbort) {
    if (res === void 0) { res = null; }
    if (isAbort === void 0) { isAbort = false; }
    var idx = search(bbn.env.loaders, { key: requestId });
    if (idx > -1) {
        var loader = bbn.env.loaders.splice(idx, 1)[0];
        var history_1 = getRow(bbn.env.loadersHistory, { key: requestId, start: loader.start });
        if (history_1) {
            history_1.loading = false;
            history_1.duration = new Date().getTime() - loader.start;
            if (typeof res === 'string') {
                history_1.errorMessage = res;
                history_1.error = !isAbort;
                history_1.abort = isAbort;
            }
            else if (isObject(res)) {
                history_1.success = true;
            }
        }
        return true;
    }
    return false;
};
export { _deleteLoader };
