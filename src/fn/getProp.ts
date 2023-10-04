import { checkType } from './checkType';

const getProp = function (obj, prop) {
	checkType(obj, 'object', bbn._('The obj must be an object in setProp'));
	checkType(prop, 'string', bbn._('The prop must be a string in setProp'));
	return obj[prop];
};

export { getProp };
