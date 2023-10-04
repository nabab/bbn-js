const removeExtraSpaces = function (str: string): string
{
	return str.replace(/\s+/g, ' ').trim();
};

export { removeExtraSpaces };
