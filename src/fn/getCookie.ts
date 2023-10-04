const getCookie = function (name) {
	let nameEqual = name + '=';
	let ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1, c.length);
		}
		if (c.indexOf(nameEqual) == 0) {
			let st = c.substring(nameEqual.length, c.length);
			if (st) {
				return JSON.parse(unescape(st)).value;
			}
		}
	}
	return null;
};

export { getCookie };
