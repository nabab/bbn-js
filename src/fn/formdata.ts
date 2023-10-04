import { each } from './each';
import { fieldValue } from './fieldValue';
import { replaceAll } from './replaceAll';
import { substr } from './substr';

const formdata = function (form: HTMLFormElement) {
	let $inputs = form.querySelectorAll('input[name],select[name],textarea[name],button[name]');
	let res = {};
	let n;
	let v;
	each($inputs, (input, i) => {
		v = fieldValue(input);
		if (v !== undefined && !input.disabled) {
			let name = input.name;
			if (
				name.indexOf('[]') === -1 &&
				name.indexOf('[') > -1 &&
				name.indexOf(']') > -1 &&
				name.lastIndexOf(']') === name.length - 1
			) {
				name = replaceAll('][', '.', name);
				name = replaceAll('[', '.', name);
				name = replaceAll(']', '', name);
			}
			if (name.length > 2 && name.indexOf('[]') === name.length - 2) {
				n = substr(name, 0, name.length - 2);
				if (res[n] === undefined) {
					res[n] = [];
				}
				res[n].push(v);
			} else if (name.indexOf('.') > -1) {
				let tmp,
					parts = name.split('.');
				tmp = res;
				for (let i = 0; i < parts.length; i++) {
					if (res[parts[i]] === undefined) {
						if (i < parts.length - 1) {
							tmp[parts[i]] = {};
						} else {
							tmp[parts[i]] = v;
						}
					}
					tmp = tmp[parts[i]];
				}
			} else {
				res[name] = v;
			}
		}
	});
	// return num_changes ? res : false;
	return res;
};

export { formdata };
