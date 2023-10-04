import { removePrivateProp } from './removePrivateProp';
import { each } from './each';

const iterate = function (
	obj: object,
	fn: (a: any, b: string) => any,
	noPrivate: boolean = false,
	reverse: boolean = false
) {
	if (obj !== null && typeof obj === 'object') {
		let iter = Object.keys(noPrivate ? removePrivateProp(obj) : obj);
		if (reverse) {
			iter.reverse();
		}

		for (let prop of iter) {
			if (fn(obj[prop], prop) === false) {
				break;
			}
		}
	}

	return obj;
};

export { iterate };
