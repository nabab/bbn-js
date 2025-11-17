import unique from '../object/unique.js';
/**
 * Gets all the tag names present in the DOM
 * @returns array
 */
export default function getAllTags() {
    return unique(Array.prototype.map.apply(document.all, [(a) => a.tagName.toLowerCase()]));
}
;
