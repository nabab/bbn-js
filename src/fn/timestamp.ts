const timestamp = function (seconds?: boolean): number
{
	var r = new Date().getTime();
	return seconds ? Math.round(r / 1000) : r;
};

export { timestamp };
