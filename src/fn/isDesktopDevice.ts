import { getDeviceType } from './getDeviceType';

const isDesktopDevice = function () {
	return getDeviceType() === 'desktop';
};

export { isDesktopDevice };
