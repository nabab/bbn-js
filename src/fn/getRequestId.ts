import { iterate } from './iterate';
import { md5 } from './md5';

const getRequestId = function (url, data, datatype): string
{
	let d = {};
	if (data) {
		iterate(data, (a, n) => {
			if (n.indexOf('_bbn') === -1) {
				d[n] = a;
			}
		});
	}

	return url + ':' + md5((datatype || 'json') + JSON.stringify(d));
};

export { getRequestId };
