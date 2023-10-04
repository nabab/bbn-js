const fieldValue = function (field) {
	let v;
	if (field.type === 'checkbox') {
		if (field.checked) {
			v = field.value;
			if (!v) {
				v = 1;
			}
		} else {
			v = 0;
		}
	} else if (field.type === 'radio') {
		if (field.checked) {
			v = field.value;
		}
	} else {
		v = field.value;
	}
	return v;
};

export { fieldValue };
