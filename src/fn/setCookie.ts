const setCookie = function (name, value, days) {
	let expires = '';
	if (days) {
		let date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
	}
	let st = escape(JSON.stringify({ value: value }));
	document.cookie = name + '=' + st + expires + '; path=/';
};

export { setCookie };
