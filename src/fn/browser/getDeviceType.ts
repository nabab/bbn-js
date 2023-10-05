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
const getDeviceType = function () {
	const userAgent = navigator.userAgent.toLowerCase();
	if (/iPhone|Android/i.test(navigator.userAgent)) {
		return 'mobile';
	}
	if (
		/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
			userAgent
		)
	) {
		return 'tablet';
	}
	return 'desktop';
};

export { getDeviceType };
