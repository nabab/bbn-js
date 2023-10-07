import { isMobileDevice } from './isMobileDevice.js';
import { isTabletDevice } from './isTabletDevice.js';
/**
 * Returns true if the current browser is on a mobile device (smartphone or tablet).
 * @method   isMobile
 * @global
 * @example
 * ``` javascript
 * bbn.fn.isMobile();
 * // false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isMobile = function () {
    return isMobileDevice() || isTabletDevice();
};
export { isMobile };
