import { getDeviceType } from '../browser/getDeviceType.js';
/**
  * Returns true if the current device type is a tablet.
  * @method   isTabletDevice
  * @global
  * @example
  * ``` javascript
  * bbn.fn.isTabletDevice();
  * // false
  * ```
  * @memberof bbn.fn
  * @returns  {Boolean}
  */
var isTabletDevice = function () {
    return getDeviceType() === 'tablet';
};
export { isTabletDevice };
