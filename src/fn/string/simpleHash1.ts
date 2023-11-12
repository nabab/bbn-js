const simpleHash1 = function (str: string): string
{
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash |= 0; // Convert to 32-bit integer
	}

  return Math.abs(hash).toString(16);
};

export { simpleHash1 };
