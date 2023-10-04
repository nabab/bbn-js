import { isString } from './isString';
import { log } from './log';

const removeAccents = function (st: string): string
{
	if (!isString(st)) {
		if (st.toString) {
			st = st.toString();
		} else {
			log(st);
			throw new Error(bbn._('removeAccent expects a string'));
		}
	}

	return st.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export { removeAccents };
