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
export default function _deleteLoader(requestId: any, res?: any, isAbort?: boolean): boolean;
