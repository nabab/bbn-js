import { substr } from './substr';
import { filter } from './filter';
import { extend } from './extend';
import { html2text } from './html2text';

const setNavigationVars = function (url, title, data?: object, repl?: boolean): void
{
	// Current path becomes old path
	bbn.env.old_path = bbn.env.path;
	// URL includes the domain
	bbn.env.url = ['https:/', 'http://'].includes(substr(url, 0, 7)) ? url : bbn.env.root + url;
	// Path does not
	bbn.env.path = substr(bbn.env.url, bbn.env.root.length);
	// Params will include each part of the URL
	bbn.env.params = filter(bbn.env.path.split('/'), (v) => {
		return v !== '';
	});
	// Managing history
	let h = window.history;
	if (h) {
		// Current state
		let state = h.state;
		// Future state
		let obj = {
			url: bbn.env.path,
			old_path: bbn.env.old_path || null,
			data: data || {},
			reload: false
		};
		// If same URL we replace
		if (state && state.url === bbn.env.path) {
			if (state.data) {
				extend(obj.data, state.data);
			}
			if (state.title && !title) {
				title = state.title;
			}
			repl = true;
		}
		// If no title the global title
		if (!title) {
			title = bbn.env.siteTitle;
		}
		// Otherwise we add the global title at the end
		else {
			title = html2text(title);
		}
		// Replacing state
		if (repl) {
			obj.reload = true;
			h.replaceState(obj, title, bbn.env.url);
		}
		// Adding state
		else {
			h.pushState(obj, title, bbn.env.url);
		}
	}
};

export { setNavigationVars };
