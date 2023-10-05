import { iterate } from '../loop/iterate';

/**
 * Adds the given data to the given form by inserting hidden inputs.
 * 
 * @method   addInputs
 * @global   
 * @memberof bbn.fn
 * 
 * @example
 * ```javascript
 * let o = {name: "Smith", fname: "John"};
 * bbn.fn.addInputs(document.getElementById('myform'), o, 'bbn');
 * // Will write at the end of the given form:
 * // <input type="hidden" name="bbn[name]" value="Smith">
 * // <input type="hidden" name="bbn[fname]" value="John">
 * 
 * ```
 * 
 * @example
 * ```javascript
 * let o = {
 *   People: [
 *     {name: "Smith", fname: "John"},
 *     {name: "Smith", fname: "Eileen"}
 *   ],
 *   Dates: ['2021-08-25', '2021-09-06']
 * };
 * bbn.fn.addInputs(document.getElementById('myform'), o);
 * // Will write at the end of the given form:
 * // <input type="hidden" name="People[0][name]" value="Smith">
 * // <input type="hidden" name="People[0][fname]" value="John">
 * // <input type="hidden" name="People[1][name]" value="Smith">
 * // <input type="hidden" name="People[1][fname]" value="Eileen">
 * // <input type="hidden" name="Dates[0]" value="2021-08-25">
 * // <input type="hidden" name="Dates[1]" value="2021-09-06">
 * ```
 * 
 * @param    {HTMLElement} form   The form to which the inputs should be added
 * @param    {Object}      params The data which will be added
 * @param    {String}      prefix The optional object's name of the fields in the form
 * @returns  {undefined}
 */
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
