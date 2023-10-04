import { treatAjaxArguments } from './treatAjaxArguments';
import { getLoader } from './getLoader';
import { defaultPreLinkFunction } from './defaultPreLinkFunction';
import { extend } from './extend';
import { ajax } from './ajax';
import { log } from './log';
import { isObject } from './isObject';
import { callback } from './callback';
import { setNavigationVars } from './setNavigationVars';

interface Res {
	url?: string;
	new_url?: string;
	old_path?: string;
	title?: string;
	noNav?: boolean;
}

const link = function (...args) {
	let cfg = treatAjaxArguments(args);
	let ok: boolean | number | string | object = true;
	/* If we can't find a correct link we load the current URL */
	if (!cfg) {
		return link(window.location.href);
	}
	/* Just executing the javascript if there is */
	if (cfg.url.indexOf('javascript:') === 0) {
		return true;
	}
	if (cfg.url.indexOf('data:') === 0) {
		return true;
	}
	if (cfg.url.indexOf('#') === 0) {
		location.href = bbn.env.url + cfg.url;
		/*
        if ( window.history ){
          bbn.env.historyDisabled = true;
          let state = h.state;
          window.history.replaceState(null, state.title, bbn.env.url);
        }
        bbn.env.historyDisabled = false;
        */
		return true;
	} else if (cfg.url.indexOf('mailto:') === 0) {
		/* Mail link */
		bbn.env.ignoreUnload = true;
		window.location.href = cfg.url;
		setTimeout(() => {
			bbn.env.ignoreUnload = false;
		}, 0);
		return false;
	}
	if (getLoader(cfg.url)) {
		return false;
	}
	/* Opens an external page in a new window */
	if (
		(cfg.url.indexOf('http://') === 0 || cfg.url.indexOf('https://') === 0) &&
		cfg.url.indexOf(bbn.env.host) !== 0
	) {
		if (cfg.e) {
			cfg.e.preventDefault();
		}
		window.open(cfg.url);
		return false;
	} else if (cfg.url !== bbn.env.params.join('/') || cfg.force) {
		/* The URL is fine so go ahead if something is not already loading */
		/* If a second callback is defined, it is triggered instead of defaultPreLinkFunction */
		if (cfg.successFn) {
			ok = cfg.successFn(cfg.url);
		} else if (defaultPreLinkFunction) {
			ok = defaultPreLinkFunction(cfg.url, cfg.force, cfg.ele);
			/*
			if (ok.data !== undefined) {
				extend(cfg.obj, ok.data);
				ok = 1;
			}
			*/
		}

		if (ok) {
			if (ok !== 1 && typeof ok === 'string') {
				cfg.url = ok;
			}
			/** todo Do we keep obj in the unique string or do we make that only one concurrent connection to the same address can occur at the same time? */
			let errSt = bbn._('The Ajax call to') + ' ' + cfg.url + ' ';
			return ajax(
				cfg.url,
				cfg.datatype,
				cfg.obj,
				function (res: Res) {
					if (!res) {
						log(errSt + bbn._('returned no answer'));
					}
					if (isObject(res)) {
						// If there's nothing in the result, just an empty object, the callback stops here and the URL is not changed
						if (Object.keys(res).length === 0) {
							log(errSt + bbn._('returned an empty object'));
						}
						if (res.new_url) {
							res.old_path = cfg.url;
							cfg.url = res.new_url;
						} else if (res.url && cfg.url !== res.url) {
							res.old_path = cfg.url;
						}
					}
					if (callback(cfg.url, res, cfg.successFn, null, cfg.ele) && res.noNav === undefined) {
						// This solution is not very clean (we can't shorten a URL)
						if (bbn.env.path.indexOf(cfg.url) !== 0) {
							setNavigationVars(cfg.url, (res.title ? res.title + ' - ' : '') + bbn.env.siteTitle);
						}
					}
				},
				cfg.errorFn || null
			);
		}
	}
	return true;
};

export { link };
