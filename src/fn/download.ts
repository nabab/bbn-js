import { ajax } from './ajax';
import { substr } from './substr';
import { baseName } from './baseName';
import { isBlob } from './isBlob';
import { fileExt } from './fileExt';
import { downloadContent } from './downloadContent';
import { defaultAjaxErrorFunction } from './defaultAjaxErrorFunction';

const download = function (url: string, filename?: string|object, params?: object) {
	// We can intervert the arguments
	if (filename && (typeof (filename) === 'object')) {
		params = filename;
		filename = null;
	}

  return ajax(
		url,
		'blob',
		params || { _bbn_download: 1 },
		(d, headers) => {
			if (!filename) {
				let cd = 'attachment; filename=';
				if (headers && headers['content-disposition'] && headers['content-disposition'].indexOf(cd) === 0) {
					filename = substr(
						headers['content-disposition'],
						cd.length + 1,
						headers['content-disposition'].length - cd.length - 2
					);
				} else {
					filename = baseName(url);
				}
			}
			if (isBlob(d)) {
				let extension = fileExt(filename);
				let htmlExtensions = ['php', 'html'];
				if ((typeof filename === 'string') && ((('type' in d) && (d.type !== 'text/html')) || htmlExtensions.includes(extension))) {
					downloadContent(filename, d);
					return;
				}
			}
		},
	  e => {
			defaultAjaxErrorFunction(e);
		}
	);
};

export { download };
