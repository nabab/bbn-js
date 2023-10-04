import { replaceAll } from './replaceAll';

const nl2br = function (st, keepNl) {
	return replaceAll('\n', '<br>' + (keepNl ? '\n' : ''), st);
};

export { nl2br };
