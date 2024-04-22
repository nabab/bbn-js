import log from '../browser/log.js';
export default function defaultAjaxAbortFunction(message, url) {
    if (url === void 0) { url = ""; }
    log(message);
}
;
