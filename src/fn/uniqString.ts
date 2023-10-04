import { isArray } from './isArray';
import { each } from './each';
import { md5 } from './md5';

const uniqString = function (...args) {
	var st = '';
	for (var i = 0; i < args.length; i++) {
		if (!args[i]) {
			st += '__bbn_empty__';
		} else if (typeof args[i] === 'object') {
			if (isArray(args[i])) {
				st += JSON.stringify(args[i]);
			} else {
				// An object with the same properties, even in different order, should produce the same answer
				let tmp = {};
				let ks = Object.keys(args[i]).sort();
				each(ks, (k) => {
					tmp[k] = args[i][k];
				});
				st += JSON.stringify(tmp);
			}
		} else if (typeof args[i] !== 'string') {
			st += args[i].toString();
		} else {
			st += args[i];
		}
	}
	return md5(st);
};

export { uniqString };
