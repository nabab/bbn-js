import isString from '../type/isString.js'  ;

export default function removeHtmlComments(str: string): string {
	if (!isString(str)) {
		return str;
	}
	return str.replace(/<!--[\s\S]*?-->/g, '');
};
