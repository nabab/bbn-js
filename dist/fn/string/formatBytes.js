/**
 * Formats the value given in bytes.
 * @method   formatBytes
 * @global
 * @example
 * //"52.23 MB"
 * ``` javascript
 * bbn.fn.formatBytes(54764654);
 * ```
 * @memberof bbn.fn
 * @returns  {String}
 */
export default function formatBytes(bytes, decimals) {
    if (decimals === void 0) { decimals = 2; }
    if (!bytes) {
        return '0 B';
    }
    var k = 1024, s = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals < 0 ? 0 : decimals)) + ' ' + s[i];
}
;
