import { objectToFormData } from './objectToFormData';
import { log } from './log';

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
