/**
 * Returns the current device type.
 * @method   getDeviceType
 * @global
 * @example
 * ``` javascript
 * bbn.fn.getDeviceType();
 * // mobile
 * ```
 * @memberof bbn.fn
 * @returns  {String}
 */
declare const getDeviceType: () => "mobile" | "tablet" | "desktop";
export { getDeviceType };
