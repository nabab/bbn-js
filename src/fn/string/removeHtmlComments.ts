import { isString } from '../type/isString.js'  ;

const removeHtmlComments = function (str: string): string {
	if (!isString(str)) {
		return str;
	}
	return str.replace(/<!--[\s\S]*?-->/g, '');
};

export { removeHtmlComments };
