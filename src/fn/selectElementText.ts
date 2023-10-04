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
