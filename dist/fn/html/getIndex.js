/**
 * Gets all the tag names present in the DOM
 * @returns array
 */
export default function getIndex(element, selector = '') {
    if (!element.parentElement) {
        return -1; // Element has no parent, return -1
    }
    if (!selector) {
        Array.from(element.parentElement.children).indexOf(element);
    }
    const siblings = Array.from(element.parentElement.children);
    const filteredSiblings = siblings.filter((el) => el.matches(selector));
    return filteredSiblings.indexOf(element);
}
;
