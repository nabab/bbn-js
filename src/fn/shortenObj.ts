import { clone } from './clone';
import { each } from './each';
import { isString } from './isString';
import { shorten } from './shorten';

const shortenObj = function (obj, max = 100): object
{
	let o = clone(obj);
	each(o, (a, n) => {
		if (isString(a) && a.length > max) {
			o[n] = shorten(a, max);
		} else if (a && typeof a === 'object') {
			o[n] = shortenObj(a);
		}
	});
	return o;
};

export { shortenObj };
