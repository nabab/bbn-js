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
 * @param    {Object}  source
 *
 * @returns  {Number}  The timestamp (in ms)
 */
declare const _addLoader: (requestId: any, prom: any, source: any) => number;
export { _addLoader };
