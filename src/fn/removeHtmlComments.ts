import { isString } from './isString';

const removeHtmlComments = function (str: string): string {
	if (!isString(str)) {
		return str;
	}
	return str.replace(/<!--[\s\S]*?-->/g, '');
};

export { removeHtmlComments };
