import { ajax } from './ajax';
import { substr } from '../string/substr';
import { baseName } from '../string/baseName';
import { isBlob } from '../type/isBlob';
import { fileExt } from '../string/fileExt';
import { downloadContent } from './downloadContent';
import { defaultAjaxErrorFunction } from '../default/defaultAjaxErrorFunction';

/**
 * Downloads a file with given filename from a URL.
 * 
 * Gets the file's content as Blob through XHR, then sends it to bbn.fn.downloadContent.  
 * __Attention__ The CORS policy applies
 * 
 * @method   download
 * @global   
 * @memberof bbn.fn
 * 
 * @example
 * ```javascript
 * // Forcing the download of an image
 * bbn.fn.download('/bbn/js-title-black.png');
 * 
 * // Forcing the download of a PDF
 * bbn.fn.download('/files/my-document.pdf');
 * 
 * // Changing the name as it is downloaded
 * bbn.fn.download('/files/f4b1092d71aefd96458feaa71d170f69.pdf', 'myDocument_' + bbn.fn.dateSQL() + '.pdf');
 * ```
 * 
 * @param    {String} url      The URL from which the file will be requested
 * @param    {String} filename The name for the downloaded file (otherwise it will take the basename of the url)
 * @param    {Object} params   A data object to send with the request
 * 
 * @returns  {undefined}
 */
const download = function (url: string, filename?: string|object, params?: object) {
	// We can intervert the arguments
	if (filename && (typeof (filename) === 'object')) {
		params = filename;
		filename = '';
	}

  return ajax(
		url,
		'blob',
		params || { _bbn_download: 1 },
		(d, headers) => {
			if (!filename) {
				let cd = 'attachment; filename=';
				if (headers?.['content-disposition'] && headers['content-disposition'].indexOf(cd) === 0) {
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
