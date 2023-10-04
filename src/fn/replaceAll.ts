import { isObject } from './isObject';
import { escapeRegExp } from './escapeRegExp';

const replaceAll = function (find: string, replace: string, str: string, flags: string = ''): string
{
  return str.toString().replace(isObject(find) ? find : new RegExp(escapeRegExp(find), 'g' + flags), replace);
};

export { replaceAll };
