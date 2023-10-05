import { getDeviceType } from '../browser/getDeviceType';

const isMobileDevice = function (): boolean
{
	return getDeviceType() === 'mobile';
};

export { isMobileDevice };
