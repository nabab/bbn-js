const setCssVar = function (varname, value) {
	if (varname.indexOf('--') !== 0) {
		varname = '--' + varname;
	}

	/** @todo To Fix */
	//document.documentElement.setProperty(varname, value);
};

export { setCssVar };
