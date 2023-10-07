import { log } from '../browser/log';
const defaultAjaxAbortFunction = function (message, url = "") {
    log(message);
};
export { defaultAjaxAbortFunction };
