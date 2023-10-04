import { isString } from './isString';

const fileExt = function (filename) {
	if (filename && isString(filename)) {
		let bits = filename.split('.');
		if (bits[0] && bits.length > 1) {
			return bits[bits.length - 1].toLowerCase();
		}
	}
	return '';
};

export { fileExt };
