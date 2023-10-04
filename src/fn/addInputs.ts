import { iterate } from './iterate';

const addInputs = function (form: HTMLFormElement, params: object = null, prefix: string = '') {
	if (form && form.tagName === 'FORM') {
		let appendToForm = (name, val) => {
			let input = document.createElement('input');
			input.setAttribute('type', 'hidden');
			input.setAttribute('name', name);
			input.setAttribute('value', val);
			form.appendChild(input);
		};
		params = JSON.parse(JSON.stringify(params || {}));
		prefix = prefix || '';

		if (params) {
			iterate(params, (param, key) => {
				let name = prefix ? `${prefix}[${key}]` : key;
				if (param instanceof Date) {
					appendToForm(name, param.toISOString());
				} else if (param instanceof Array) {
					param.forEach((e, i) => {
						const tempName = `${name}[${i}]`;
						if (typeof e === 'object') {
							addInputs(form, e, tempName);
						} else {
							appendToForm(tempName, e.toString());
						}
					});
				} else if (typeof param === 'object' && !(param instanceof File)) {
					addInputs(form, param, name);
				} else {
					appendToForm(name, param.toString());
				}
			});
		}
	}
};

export { addInputs };
