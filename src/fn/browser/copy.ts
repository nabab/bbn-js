import { isObject } from '../type/isObject' ;
import { isFunction } from '../type/isFunction' ;

/**
 * Copies to the clipboard the value of the given string. 
 * @method   copy
 * @global   
 * ``` javascript
 * let myVal = 'the value you want to copy to clipbord';
 * bbn.fn.copy(myVal);
 * 
 * ```
 * @memberof bbn.fn
 * @param {String} st The string to copy.
 * @returns  
 */
const copy = function (st) {
	return new Promise((resolve) => {
		if (st) {
			if (navigator && navigator.clipboard) {
				if (st instanceof Blob) {
					navigator.clipboard.write([new ClipboardItem({ [st.type.toString()]: st })]).then(() => {
						resolve(true);
					});
				} else if (isObject(st) && isFunction(st.toBlob)) {
					st.toBlob((blob) => {
						navigator.clipboard.write([new ClipboardItem({ [blob.type.toString()]: blob })]).then(() => {
							resolve(true);
						});
					});
				} else {
					navigator.clipboard.writeText(st);
					resolve(true);
				}
				return;
			}

			let input: HTMLTextAreaElement = document.createElement('textarea');
			input.style.opacity = '0';
			input.value = st;
			document.body.appendChild(input);
			input.select();
			document.execCommand('copy');
			document.body.removeChild(input);
			resolve(true);
		}

		resolve(false);
	});
};

export { copy };
