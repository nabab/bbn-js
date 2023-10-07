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
declare const formatBytes: (bytes: any, decimals?: number) => string;
export { formatBytes };
