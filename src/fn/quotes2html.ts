import { replaceAll } from './replaceAll';

const quotes2html = function (st: string, type?: string): string
{
	if (!type || type.toLowerCase().indexOf('s') === 0) {
		st = replaceAll("'", '&#39;', st);
	}
	if (!type || type.toLowerCase().indexOf('d') === 0) {
		st = replaceAll('"', '&quot;', st);
	}
	return st;
};

export { quotes2html };
