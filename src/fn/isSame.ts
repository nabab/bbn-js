import { hash } from './hash';
import { each } from './each';

const isSame = function (obj1: any, obj2: any, done?: any[]) {
	if (!done) {
		done = [];
	}

	if (obj1 === obj2) {
		return true;
	}
	if (obj1 && obj2 && typeof obj1 === 'object' && typeof obj2 === 'object') {
		let tmp1 = Object.keys(obj1).sort(),
			tmp2 = Object.keys(obj2).sort();
		// Case where the keys are different
		if (hash(tmp1) !== hash(tmp2)) {
			return false;
		}
		let ok = true;
		if (obj1 && typeof obj1 === 'object') {
			if (done.includes(obj1)) {
				return ok;
			}

			done.push(obj1);
		}

		each(tmp1, (a) => {
			if (!isSame(obj1[a], obj2[a])) {
				ok = false;
				return false;
			}
		});
		return ok;
	}
	return false;
};

export { isSame };
