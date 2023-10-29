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
declare const _addLoader: (requestId: any, prom: any, aborter: any) => number;
export { _addLoader };
