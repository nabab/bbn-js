import { getDeviceType } from '../browser/getDeviceType.js'  ;

const isMobileDevice = function ()
{
	return getDeviceType() === 'mobile';
};

export { isMobileDevice };
