import { log } from '../browser/log.js';
var defaultAjaxAbortFunction = function (message, url) {
    if (url === void 0) { url = ""; }
    log(message);
};
export { defaultAjaxAbortFunction };
