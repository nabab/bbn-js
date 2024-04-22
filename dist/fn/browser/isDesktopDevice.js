import getDeviceType from '../browser/getDeviceType.js';
/**
 * Returns true if the current device type is a desktop.
 * @method   isDesktopDevice
 * @global
 * @example
 * ``` javascript
 * bbn.fn.isDesktopDevice();
 * // true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isDesktopDevice() {
    return getDeviceType() === 'desktop';
}
;
