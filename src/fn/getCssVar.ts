const getCssVar = function (varname) {
	if (varname.indexOf('--') !== 0) {
		varname = '--' + varname;
	}

	return getComputedStyle(document.documentElement).getPropertyValue(varname);
};

export { getCssVar };