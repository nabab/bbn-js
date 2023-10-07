import { log } from '../browser/log.js';
var defaultAjaxErrorFunction = function (jqXHR, textStatus, errorThrown) {
    if (textStatus === void 0) { textStatus = null; }
    if (errorThrown === void 0) { errorThrown = null; }
    log(textStatus, errorThrown);
};
export { defaultAjaxErrorFunction };
