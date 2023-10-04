import { isString } from './isString';
import { substr } from './substr';

const baseName = function (path: string, suffix?: string) {
	if (path && isString(path)) {
		let bits = path.split('/');
		let res = bits.pop();
		if (!suffix) {
			return res;
		}
		let len = suffix.length;
		if (res && substr(res, -len) === suffix) {
			return substr(res, 0, res.length - len);
		}
	}
	return '';
};

export { baseName };
