import { isString } from './isString';

const escapeSquotes = function (str) {
	if (!isString(str)) {
		return str;
	}

  return str.replace(/'/g, "\\'");
};

export { escapeSquotes };
