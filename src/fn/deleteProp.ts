import { checkType } from './checkType';

const deleteProp = function (obj: object, prop: string) {
	checkType(obj, 'object', bbn._('The obj must be an object in setProp'));
	checkType(prop, 'string', bbn._('The prop must be a string in setProp'));
	delete obj[prop];
};

export { deleteProp };
