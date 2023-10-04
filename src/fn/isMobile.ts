import { isMobileDevice } from './isMobileDevice';
import { isTabletDevice } from './isTabletDevice';

const isMobile = function () {
	return isMobileDevice() || isTabletDevice();
};

export { isMobile };
