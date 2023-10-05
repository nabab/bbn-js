import { log } from '../browser/log';

const defaultAjaxErrorFunction = function (jqXHR: any, textStatus?: string, errorThrown?: object) {
	log(textStatus, errorThrown);
};

export { defaultAjaxErrorFunction };
