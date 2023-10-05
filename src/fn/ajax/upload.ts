import { objectToFormData } from '../form/objectToFormData';
import { log } from '../browser/log';

/**
 * Uploads a file synchronously through an XHR indicating progress.
 * 
 * @method   upload
 * @todo examples
 * @global   
 * @memberof bbn.fn
 * 
 * @param {String}   url      The URL to which the file should be uploaded
 * @param {File}     file     A File object or an array of data
 * @param {Function} success  A function to execute after success
 * @param {Function} failure  A function to execute after failure
 * @param {Function} progress A function to execute during progress
 * 
 * @returns  {Promise}
 */
const upload = function (url: string, file: any, success?: (d) => any, failure?: (d) => any, progress?: (d, l, t) => any) {
	let fn = () => {
		return axios.post(url || bbn.env.path, objectToFormData(file), {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			onUploadProgress(progressEvent) {
				if (progress) {
					let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
					progress(percentCompleted, progressEvent.loaded, progressEvent.total);
				}
			},
		});
	};
	if (!success && !failure) {
		return fn();
	} else {
		return fn()
			.then((res) => {
				if (success) {
					log('SUCCESS', res);
					success(res);
				}
			})
			.catch((err) => {
				if (failure) {
					log('ERROR', err);
					failure(err);
				}
			});
	}
};

export { upload };
