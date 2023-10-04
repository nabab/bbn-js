import { getDeviceType } from './getDeviceType';

const isMobileDevice = function (): boolean
{
	return getDeviceType() === 'mobile';
};

export { isMobileDevice };
