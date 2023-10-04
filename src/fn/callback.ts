import { error } from './error';
import { defaultLinkFunction } from './defaultLinkFunction';
import { isFunction } from './isFunction';
import { log } from './log';
import { defaultPostLinkFunction } from './defaultPostLinkFunction';
import { defaultAlertFunction } from './defaultAlertFunction';

const callback = function (
	url: string,
	res: BbnAjaxResult = null,
	fn: (a: BbnAjaxResult, b?: HTMLElement) => any = null,
	fn2: (a: BbnAjaxResult) => any = null,
	ele: HTMLElement|HTMLInputElement|HTMLTextAreaElement = null
) {
	let tmp = false;
	if (res) {
		tmp = true;
		let t = typeof res;
		let isObj = t.toLowerCase() === 'object';
		let errTitle;
		if (isObj && res.prescript) {
			/* var ok can be changed to false in prescript execution */
			try {
				eval(res.prescript);
			} catch (e) {
				error(e.message || '');
			}
		}
		if (isObj && res.url === undefined) {
			res.url = url;
		}
		/* Case where a callback is defined */
		if (fn) {
			tmp = fn(res, ele);
		} else {
			tmp = defaultLinkFunction(res, ele);
		}
		if (ele && isObj && (res.content !== undefined)) {
			if ('value' in ele) {
				ele.value = res.content;
			} else {
				ele.innerHTML = res.content;
			}
		}
		if (tmp && isObj && res.script) {
			if (typeof(res.script) === 'function') {
				tmp = res.script(res.data ? res.data : {}, ele || null);
			} else {
				tmp = ((data, ele) => {
					let r = null;
					try {
						r = eval(res.script);
						if (isFunction(r)) {
							r = r(data, ele);
						}
					} catch (e) {
						log(e, res);
						error(isFunction(e.getMessage) ? e.getMessage() : null);
					}

					return r;
				})(res.data ? res.data : {}, ele ? ele : false);
			}
		}
		/* Case where a callback is defined */
		if (tmp && fn2) {
			fn2(res);
		} else if (isObj && defaultPostLinkFunction) {
			defaultPostLinkFunction(res, ele);
		}
		if (tmp && isObj && res.postscript) {
			eval(res.postscript);
		}
		if (isObj && res.error) {
			errTitle = res.errorTitle || bbn.lng.server_response;
			defaultAlertFunction(res.error, errTitle);
		}
	} else {
		defaultAlertFunction(bbn.lng.errorText, bbn.lng.error);
	}
	return tmp;
};

export { callback };
