import { isCanvas } from './isCanvas';
import { isObject } from './isObject';
import { isString } from './isString';
import { log } from './log';

const downloadContent = function (filename: string, content: any, type?: string) {
	if (isCanvas(content)) {
		content.toBlob((blob) => {
			// blob ready, download it
			let a = document.createElement('a');
			a.download = filename;
			a.href = window.URL.createObjectURL(blob);
			a.className = 'bbn-no';
			a.click();

			// delete the internal blob reference, to let the browser clear memory from it
			window.URL.revokeObjectURL(a.href);
		}, type || 'image/png');
		return;
	}
	if (!type) {
		type = isObject(content) && content.type ? content.type : 'octet/stream';
	} else if (type.indexOf('/') === -1) {
		type = 'text/' + type;
	}
	let a = window.document.createElement('a');
	a.className = 'bbn-no';
	let src = null;
	if (isString(content)) {
		src = new Blob([content], { type: type });
	} else {
		try {
			src = content;
		} catch (e) {
			log(e);
		}
	}
	a.href = window.URL.createObjectURL(src);
	a.download = filename;
	// Append anchor to body.
	document.body.appendChild(a);
	a.click();
	window.URL.revokeObjectURL(a.href);
	// Remove anchor from body
	document.body.removeChild(a);
};

export { downloadContent };
