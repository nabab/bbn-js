import { getDeviceType } from '../browser/getDeviceType';
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
const isDesktopDevice = function () {
    return getDeviceType() === 'desktop';
};
export { isDesktopDevice };
