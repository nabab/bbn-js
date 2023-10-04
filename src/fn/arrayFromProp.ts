import { each } from './each';
import { getProperty } from './getProperty';

const arrayFromProp = function (arr, prop) {
	let r = [];
	each(arr, (a, i) => {
		r.push(getProperty(a, prop));
	});
	return r;
};

export { arrayFromProp };
