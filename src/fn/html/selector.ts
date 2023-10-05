/**
 * @ignore
 * @method   selector
 * @todo     Add method description for selector
 * @global
 * @memberof bbn.fn
 * @returns  {*}
 */
const selector = function (ele: string | HTMLElement): HTMLElement | undefined {
  return typeof ele === "string" ? document.querySelector(ele) : ele;
};

export { selector };
