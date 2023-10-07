import { log } from "../browser/log.js";
const defaultAjaxAbortFunction = function (message, url = "") {
    log(message);
};
export { defaultAjaxAbortFunction };
