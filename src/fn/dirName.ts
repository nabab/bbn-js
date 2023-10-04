import { isString } from './isString';
import { substr } from './substr';

const dirName = function (path) {
	if (isString(path) && path) {
		while (substr(path, path.length - 1) === '/') {
			path = substr(path, 0, path.length - 1);
		}
		let pos = path.lastIndexOf('/');
		if (pos > 0) {
			return substr(path, 0, pos);
		}
		if (pos === 0) {
			return '/';
		}
	}
	return '';
};

export { dirName };
