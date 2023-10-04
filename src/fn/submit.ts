import { formdata } from './formdata';
import { isFunction } from './isFunction';
import { isString } from './isString';
import { post } from './post';

const submit = function (form: HTMLFormElement, e?: Event, fn?: Function): void
{
	let url: string = form.getAttribute('action') || bbn.env.path;
	let data: object;
	if (url === '') {
		url = '.';
	}

	//if ( (typeof(url) === 'string') && (url.indexOf("http") !== 0 || url.indexOf(window.document.location.hostname) !== -1) && !form.is("[target]") ){
	if (
		typeof url === 'string' &&
		(url.indexOf('http') !== 0 || url.indexOf(window.document.location.hostname) !== -1) &&
		!form.getAttribute('target')
	) {
		if (e) {
			e.preventDefault();
		}
		data = formdata(form);
		if (data) {
			//$form.attr("action", null);
			form.setAttribute('action', null);
			//$form.data("bbnSubmit", 1);
			if (!fn) {
				fn = form.getAttribute('data-script') ? eval(form.getAttribute('data-script')) : null;
			}
			if (fn) {
				post(url, data, fn);
			} else {
				post(url, data);
			}
		}
	}
};

export { submit };
