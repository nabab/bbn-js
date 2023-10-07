import { isCanvas } from '../type/isCanvas.js';
import { isObject } from '../type/isObject.js';
import { isString } from '../type/isString.js';
import { log } from '../browser/log.js';
/**
 * Downloads a file with given filename from the given content.
 *
 * Creates a link putting in href a URL Object Blob made of the given content,
 * which can be a canvas, a file or a blob object, or just a string.
 *
 * @method   downloadContent
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * // Download from a string
 * bbn.fn.downloadContent('myTextFile.txt', 'Just a string\nThat we can save directly in a file', 'text/plain');
 *
 * // Download from a file
 * let file = new File(["foo"], "foo.txt", {type: "text/plain"});
 * bbn.fn.downloadContent('foo.txt', file);
 * ```
 *
 * @param    {String}                        filename The name for the downloaded file
 * @param    {HTMLCanvasElement|File|String} content  A Canvas, a File object or a String
 * @param    {String}                        type     The type of file to be made
 *
 * @returns  {undefined}
 */
var downloadContent = function (filename, content, type) {
    if (type === void 0) { type = null; }
    if (isCanvas(content)) {
        content.toBlob(function (blob) {
            // blob ready, download it
            var a = document.createElement('a');
            a.download = filename;
            a.href = window.URL.createObjectURL(blob);
            a.className = 'bbn-no';
            a.click();
            // delete the internal blob reference, to let the browser clear memory from it
            window.URL.revokeObjectURL(a.href);
        }, type || 'image/png');
        return;
    }
    if (!type) {
        type = isObject(content) && content.type ? content.type : 'octet/stream';
    }
    else if (type.indexOf('/') === -1) {
        type = 'text/' + type;
    }
    var a = window.document.createElement('a');
    a.className = 'bbn-no';
    var src = null;
    if (isString(content)) {
        src = new Blob([content], { type: type });
    }
    else {
        try {
            src = content;
        }
        catch (e) {
            log(e);
        }
    }
    a.href = window.URL.createObjectURL(src);
    a.download = filename;
    // Append anchor to body.
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(a.href);
    // Remove anchor from body
    document.body.removeChild(a);
};
export { downloadContent };
