/**
 * Checks whether the given elemet is focused or not.
 * 
 * @method   isFocused
 * @global   
 * @example
 * ``` javascript
 * bbn.fn.isFocused(document.getElementById('input_name'));
 * // false
 * bbn.fn.isFocused(bbn.sel('.container'));
 * // true
 * ```
 * @memberof bbn.fn
 * 
 * @param {Element} ele     The element to be checked for focus
 * @param {Boolean} contain If true will check if the focused element is contained in the given element
 * 
 * @returns  {Boolean} True if focused
 */
const isFocused = function (ele: HTMLElement, contain?: boolean): boolean
{
	return ele === document.activeElement || (contain && ele.contains && ele.contains(document.activeElement));
};

export { isFocused };