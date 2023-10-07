import { log } from '../browser/log.js'  ;

const defaultAjaxErrorFunction = function (jqXHR, textStatus = null, errorThrown = null) {
	log(textStatus, errorThrown);
};

export { defaultAjaxErrorFunction };
