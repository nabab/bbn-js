const isActiveInterface = function (secs: number = 600): boolean
{
	if (!bbn.env.last_focus) {
		return false;
	}

	let t = new Date().getTime();
	return t - bbn.env.last_focus < secs * 1000;
};

export { isActiveInterface };
