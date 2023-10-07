/**
 * Downloads a file with given filename from a URL.
 *
 * Gets the file's content as Blob through XHR, then sends it to bbn.fn.downloadContent.
 * __Attention__ The CORS policy applies
 *
 * @method   download
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * // Forcing the download of an image
 * bbn.fn.download('/bbn/js-title-black.png');
 *
 * // Forcing the download of a PDF
 * bbn.fn.download('/files/my-document.pdf');
 *
 * // Changing the name as it is downloaded
 * bbn.fn.download('/files/f4b1092d71aefd96458feaa71d170f69.pdf', 'myDocument_' + bbn.fn.dateSQL() + '.pdf');
 * ```
 *
 * @param    {String} url      The URL from which the file will be requested
 * @param    {String} filename The name for the downloaded file (otherwise it will take the basename of the url)
 * @param    {Object} params   A data object to send with the request
 *
 * @returns  {undefined}
 */
declare const download: (url: any, filename?: string, params?: any) => any;
export { download };
