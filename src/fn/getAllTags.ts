import { unique } from './unique';

const getAllTags = function () {
	return unique(Array.prototype.map.apply(document.all, [(a) => a.tagName.toLowerCase()]));
};

export { getAllTags };
