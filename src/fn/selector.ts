const selector = function (ele: string|HTMLElement): HTMLElement|undefined
{
	return typeof ele === 'string' ? document.querySelector(ele) : ele;
};

export { selector };
