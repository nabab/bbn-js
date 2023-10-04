import { isObject } from './isObject';
import { isFunction } from './isFunction';
import { substr } from './substr';
import { numProperties } from './numProperties';

const treatAjaxArguments = function (args): BbnAjaxCfg
{
	let cfg: BbnAjaxCfg = {};
  let t;
  let i;
	if (isObject(args[0]) && args.length === 1) {
		return args[0];
	}
	for (i = 0; i < args.length; i++) {
		t = typeof args[i];
		t = t.toLowerCase();
		/* Callbacks */
		if (isFunction(args[i])) {
			if (cfg.errorFn && !cfg.abortFn) {
				cfg.abortFn = args[i];
			}
			if (cfg.successFn && !cfg.errorFn) {
				cfg.errorFn = args[i];
			} else if (!cfg.successFn) {
				cfg.successFn = args[i];
			}
		} else if (args[i] === 1 || args[i] === true) {
		/* Force */
			cfg.force = true;
		} else if (t === 'string') {
			if (!cfg.url) {
				/* Hash */
				if (args[i].indexOf('#') === 0 || args[i].indexOf(bbn.env.root + '#') === 0) {
					cfg.url = substr(args[i], bbn.env.root.length);
				} else {
				/* Link */
					cfg.url = args[i];
					if (cfg.url.indexOf(bbn.env.root) === 0) {
						cfg.url = substr(cfg.url, bbn.env.root.length);
					}
				}
			} else {
			/* Ajax datatype */
				cfg.datatype = args[i];
			}
		} else if (args[i] && t === 'object') {
		/* Event */
			if (args[i] instanceof Event) {
				cfg.e = args[i];
			} else if (!cfg.ele && args[i].nodeType === 1) {
			/* HTML Element */
				cfg.ele = args[i];
			} else if (t.toLowerCase() === 'object') {
			/* An object to post */
				cfg.obj = args[i];
			}
		}
	}
	if (!cfg.url && numProperties(cfg)) {
		cfg.url = bbn.env.path;
	}
	if (cfg.obj === undefined) {
		cfg.obj = { _bbn: 'public' };
	}
	if (!cfg.datatype) {
		cfg.datatype = 'json';
	}
	return cfg;
};

export { treatAjaxArguments };
