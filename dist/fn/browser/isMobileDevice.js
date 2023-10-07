import { getDeviceType } from '../browser/getDeviceType';
const isMobileDevice = function () {
    return getDeviceType() === 'mobile';
};
export { isMobileDevice };
