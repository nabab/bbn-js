import { log } from '../browser/log.js';
var defaultPreLinkFunction = function (url, force, ele) {
    if (force === void 0) { force = false; }
    if (ele === void 0) { ele = null; }
    log("defaultPreLinkFunction", url, force, ele);
    return true;
};
export { defaultPreLinkFunction };
