import { substr } from './substr';

const removePrivateProp = function (obj: object, deep: boolean = false) {
	let r = null;
	if (typeof obj === 'object') {
		r = {};
		for (var n in obj) {
			if (substr(n, 0, 1).match(/^[A-z0-9]$/) && (n in obj)) {
				if (deep && typeof obj[n] === 'object') {
					r[n] = removePrivateProp(obj[n], true);
				} else {
					r[n] = obj[n];
				}
			}
		}
	}

  return r || false;
};

export { removePrivateProp };
