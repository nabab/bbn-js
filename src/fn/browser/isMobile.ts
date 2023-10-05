import { isMobileDevice } from './isMobileDevice';
import { isTabletDevice } from './isTabletDevice';

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
const isMobile = function () {
	return isMobileDevice() || isTabletDevice();
};

export { isMobile };
