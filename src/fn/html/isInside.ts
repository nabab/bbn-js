import { getAncestors } from './getAncestors';
import { isString } from '../type/isString';
import { each } from '../loop/each';

const isInside = function (ele, ancestor) {
	let ancestors = getAncestors(ele);
	if (ancestors.length) {
		if (isString(ancestor)) {
			let ok = false;
			each(ancestors, (a) => {
				if (a.matches && a.matches(ancestor)) {
					ok = true;
					return false;
				}
			});
			return ok;
		}
		if (ancestor instanceof HTMLElement) {
			return ancestors.indexOf(ancestor) > -1;
		}
	}

	return false;
};

export { isInside };
