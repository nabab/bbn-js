const isFocused = function (ele: HTMLElement, contain?: boolean): boolean
{
	return ele === document.activeElement || (contain && ele.contains && ele.contains(document.activeElement));
};

export { isFocused };
