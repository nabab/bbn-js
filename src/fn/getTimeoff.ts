const getTimeoff = function (): number
{
	if (!bbn.env.isFocused) {
		return Math.round(new Date().getTime() / 1000 - bbn.env.timeoff);
	}

	return 0;
};

export { getTimeoff };
