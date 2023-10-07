import { unique } from '../object/unique';
/**
 * Gets all the tag names present in the DOM
 * @returns array
 */
const getAllTags = function () {
    return unique(Array.prototype.map.apply(document.all, [(a) => a.tagName.toLowerCase()]));
};
export { getAllTags };
