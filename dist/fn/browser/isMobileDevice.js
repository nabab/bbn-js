import getDeviceType from '../browser/getDeviceType.js';
export default function isMobileDevice() {
    return getDeviceType() === 'mobile';
}
;
