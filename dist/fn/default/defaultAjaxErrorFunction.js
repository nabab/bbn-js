import log from '../browser/log.js';
export default function defaultAjaxErrorFunction(jqXHR, textStatus = null, errorThrown = null) {
    log(textStatus, errorThrown);
}
;
