import { getHTMLOfSelection } from "../html/getHTMLOfSelection.js";
import { each } from "../loop/each.js";

/**
 * Returns a promise having the event's data as argument.
 * @method   getEventData
 * @global   
 * @example 
 * ``` javascript
 * let type = e.type;
 *   bbn.fn.getEventData(e).then((data) => {
 *     bbn.fn.log("DATA FROM " + type, data);
 *   });
 * ```
 * @memberof bbn.fn
 * @returns  {Promise} 
 */
const getEventData = function (e) {
	let dt = e.dataTransfer || e.clipboardData;
	let t = dt.getData('Text');
	let res = { raw: t, files: [], str: [] };
	let p = new Promise((ok, err) => {
		let done = !(dt instanceof DataTransfer);
		if (!t && e.type === 'copy') {
			let sel = window.getSelection();
			res.raw = sel.toString();
			let html = getHTMLOfSelection();
			res.str.push({
				type: 'text/plain',
				data: res.raw,
			});
			if (html !== res.raw) {
				res.str.push({
					type: 'text/html',
					data: html,
				});
			} else if (res.raw.trim().indexOf('<') === 0) {
				res.str.push({
					type: 'text/html',
					data:
						"<meta charset='utf-8'><code style=\"white-space: pre; font-family: 'Courier New', sans-serif\">\n" +
						res.raw +
						'\n</code>',
				});
			}
			done = true;
			ok(res);
		}
		if (!done) {
			let strings = [];
			let num = dt.items.length;
			each(dt.items, (item, idx) => {
				let kind = item.kind;
				let type = item.type;
				if (kind === 'file') {
					let cp = dt.files[idx];
					if (!type && cp.name) {
						let bits = cp.name.split('.');
						type = bits[bits.length - 1];
					}
					let name = cp ? cp.name : bbn._('untitled');
					let size = cp ? cp.size : null;
					let lastModified = cp ? cp.lastModified : null;
					let blob = item.getAsFile();
					if (blob) {
						done = true;
						num--;
						res.files.push({
							type: type,
							data: blob,
							name: name,
							size: size,
							mdate: lastModified,
						});
						strings.push(name);
						if (!num) {
							if (!res.raw) {
								res.raw = strings.join(', ');
							}
							ok(res);
						}
					} else {
						bbn.fn.defaultErrorFunction(bbn._('Impossible to read the file') + ' ' + name);
					}
				} else {
					done = true;
					item.getAsString((data) => {
						num--;
						res.str.push({
							type: type,
							data: data,
						});
						if (type === 'text/plain') {
							strings.push(name);
						}
						if (!num) {
							if (!res.raw) {
								res.raw = strings.join(', ');
							}
							ok(res);
						}
					});
				}
			});
		}
		if (!done) {
			setTimeout(() => {
				ok(res);
			});
		}
	});
	return p;
};

export { getEventData };
