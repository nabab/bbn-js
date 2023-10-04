import { treatAjaxArguments } from './treatAjaxArguments';
import { ajax } from './ajax';
import { callback } from './callback';

const post = function (...args) {
	let cfg = treatAjaxArguments(args);
	if (cfg.url) {
		return ajax(
			cfg.url,
			cfg.datatype,
			cfg.obj,
			(res) => {
				callback(cfg.url, res, cfg.successFn, null, cfg.ele);
			},
			cfg.errorFn,
			cfg.abortFn
		);
	}
};

export { post };
