import { isCp } from './isCp';

const defaultAjaxErrorFunction = function (jqXHR: any, textStatus?: string, errorThrown?: object) {
	return false;
};

export { defaultAjaxErrorFunction };
