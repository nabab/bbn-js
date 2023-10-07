import { getDeviceType } from '../browser/getDeviceType.js';
var isMobileDevice = function () {
    return getDeviceType() === 'mobile';
};
export { isMobileDevice };
