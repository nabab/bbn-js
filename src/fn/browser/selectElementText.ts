/**
 * Selects the content of an element.
 * 
 * @method   selectElementText
 * @global   
 * @example
 * ``` javascript
 * bbn.fn.selectElementText(document.getElementById('my_input_id'));
 * // false
 * bbn.fn.selectElementText(bbn.$('#my_span_id'));
 * // true
 * ```
 * @memberof bbn.fn
 * 
 * @param {Element} ele The element in which the text should be selected
 * @param {Boolean} win The window object
 * 
 * @returns  {Boolean} True if focused
 */
const selectElementText = function (ele: HTMLElement, win?: Window): void
{
	win = win || window;
	if (ele instanceof HTMLInputElement) {
		ele.select();
		return;
	}
	let doc = win.document;
	let sel;
	let range;

	if (win.getSelection && doc.createRange) {
		sel = win.getSelection();
		range = doc.createRange();
		range.selectNodeContents(ele);
		sel.removeAllRanges();
		sel.addRange(range);
	} else if (('createTextRange' in doc.body) && (typeof doc.body.createTextRange === 'function')) {
		range = doc.body.createTextRange();
		range.moveToElementText(ele);
		range.select();
	}
};

export { selectElementText };