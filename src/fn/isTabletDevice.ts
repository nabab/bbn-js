import { getDeviceType } from './getDeviceType';

const isTabletDevice = function () {
	return getDeviceType() === 'tablet';
};

export { isTabletDevice };
