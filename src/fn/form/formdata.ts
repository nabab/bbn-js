import each from '../loop/each.js'  ;
import fieldValue from './fieldValue.js'  ;
import replaceAll from '../string/replaceAll.js'  ;
import substr from '../string/substr.js'  ;

/**
 * Returns all the data contained in a form as a single object.
 * 
 * @method   formdata
 * @global   
 * @memberof bbn.fn
 * @fires    {*}            
 * 
 * @example
 * ```javascript
 * // <form id="myform">
 * // <input type="hidden" name="bbn[name]" value="Smith">
 * // <input type="hidden" name="bbn[fname]" value="John">
 * // </form>
 * bbn.fn.formdata(document.getElementById('myform'));
 * // {name: "Smith", fname: "John"};
 * 
 * ```
 * 
 * @example
 * ```javascript
 * // <form id="myform">
 * // <input type="hidden" name="People[0][name]" value="Smith">
 * // <input type="hidden" name="People[0][fname]" value="John">
 * // <input type="hidden" name="People[1][name]" value="Smith">
 * // <input type="hidden" name="People[1][fname]" value="Eileen">
 * // <input type="hidden" name="Dates[0]" value="2021-08-25">
 * // <input type="hidden" name="Dates[1]" value="2021-09-06">
 * // </form>
 * bbn.fn.formdata(document.getElementById('myform'));
 * // {
 * //   People: [
 * //     {name: "Smith", fname: "John"},
 * //     {name: "Smith", fname: "Eileen"}
 * //   ],
 * //   Dates: ['2021-08-25', '2021-09-06']
 * // }
 * ```
 * 
 * @param    {HTMLElementL} form 
 * 
 * @returns  {Object}
 */
export default function formdata(form) {
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
