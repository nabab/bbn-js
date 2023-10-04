const camelToCss = function (str) {
	return str
		.replace(/([A-Z])/g, function (st) {
			return '-' + st.toLowerCase();
		})
		.replace('/^./', function (st) {
			return st.toLowerCase();
		});
};

export { camelToCss };
