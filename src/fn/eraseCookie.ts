const eraseCookie = function (name) {
	document.cookie = name + '=; Max-Age=-99999999;';
};

export { eraseCookie };
