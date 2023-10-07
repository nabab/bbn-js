import { ajax } from './ajax.js';
import { substr } from '../string/substr.js';
import { baseName } from '../string/baseName.js';
import { isBlob } from '../type/isBlob.js';
import { fileExt } from '../string/fileExt.js';
import { downloadContent } from './downloadContent.js';
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
var download = function (url, filename, params) {
    if (filename === void 0) { filename = ''; }
    if (params === void 0) { params = null; }
    // We can intervert the arguments
    if (filename && typeof filename === "object") {
        params = filename;
        filename = "";
    }
    return ajax(url, "blob", params || { _bbn_download: 1 }, function (d, headers) {
        if (!filename) {
            var prop = "content-disposition";
            var cd = "attachment; filename=";
            if ((headers === null || headers === void 0 ? void 0 : headers[prop]) && headers[prop].indexOf(cd) === 0) {
                filename = substr(headers[prop], cd.length + 1, headers[prop].length - cd.length - 2);
            }
            else {
                filename = baseName(url);
            }
        }
        if (isBlob(d)) {
            var extension = fileExt(filename);
            var htmlExtensions = ["php", "html"];
            if (typeof filename === "string" &&
                (("type" in d && d.type !== "text/html") ||
                    htmlExtensions.includes(extension))) {
                downloadContent(filename, d);
                return;
            }
        }
    }, function (e) {
        bbn.fn.defaultAjaxErrorFunction(e);
    });
};
export { download };
