/**
 * @ignore
 * @method   selector
 * @todo     Add method description for selector
 * @global
 * @memberof bbn.fn
 * @returns  {HTMLElement | undefined}
 */
var selector = function (ele) {
    return typeof ele === "string" ? document.querySelector(ele) : ele;
};
export { selector };
