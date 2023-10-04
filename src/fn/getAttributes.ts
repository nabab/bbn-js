import { error } from './error';

const getAttributes = function (ele) {
	if (!ele.getAttributeNames) {
		error('The element is not a proper HTML Element');
	}

	let res = Object.create(null);
	ele.getAttributeNames().forEach((name) => {
		res[name] = ele.getAttribute(name);
	});
	return res;
};

export { getAttributes };
