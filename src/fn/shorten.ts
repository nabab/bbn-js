import { isString } from './isString';
import { substr } from './substr';

const shorten = function (st: string, len?: number, adj?: string): string
{
	if (typeof st.toLowerCase() === 'string') {
		if (!len) {
			len = bbn.vars.shortenLen;
		}
		if (adj === undefined || !isString(adj)) {
			adj = '...';
		}
		if (st.length > len) {
			st = substr(st, 0, len) + adj;
		}
	}
	return st;
};

export { shorten };
