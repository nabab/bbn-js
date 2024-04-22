import substr from '../string/substr.js';
/**
 * Creates and adds a "loader" object to the property bbn.env.loaders.
 *
 * @method   _addLoader
 * @global
 * @ignore
 * @memberof bbn.fn
 *
 * @param    {String}  requestId
 * @param    {Promise} prom
 * @param    {Object}  aborter
 *
 * @returns  {Number}  The timestamp (in ms)
 */
export default function _addLoader(requestId, prom, aborter) {
    /** @var {Number} tst Current timestamp */
    var tst = new Date().getTime();
    /** @var {String} url The original URL (part of requestId before : and md5) */
    var url = substr(requestId, 0, requestId.length - 33);
    /** @var {Object} loader The loader object */
    var loader = {
        key: requestId,
        url: url,
        loader: prom,
        aborter: aborter,
        loading: true,
        error: false,
        abort: false,
        errorMessage: false,
        success: false,
        start: tst,
    };
    // Adding the loader in bbn.env.loaders
    bbn.env.loaders.push(loader);
    // Adding an object with this loader info in bbn.env.loadersHistory
    bbn.env.loadersHistory.unshift(loader);
    /** @var {Number} idx A pointer starting at the end of  array loadersHistory */
    var idx = bbn.env.loadersHistory.length;
    // Removing elements from the loadersHistory object if their number is higher
    // than bbn.env.maxLoadersHistory
    while (idx && bbn.env.loadersHistory.length > bbn.env.maxLoadersHistory) {
        idx--;
        // Not removing the ones still loading
        if (!bbn.env.loading) {
            bbn.env.loadersHistory.splice(idx, 1);
        }
    }
    return tst;
}
;
