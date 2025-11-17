import isObject from '../type/isObject.js'  ;
import isFunction from '../type/isFunction.js'  ;

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
const fire = (st, type = 'text/plain') => {
  const transfer = new DataTransfer();
  transfer.setData(type, st);
  const copyEvent = new ClipboardEvent('copy', {
    bubbles: true,
    cancelable: true,
    clipboardData: transfer
  });
  document.dispatchEvent(copyEvent);
};
export default function copy(st, noDispatch) {
	return new Promise((resolve) => {
		if (st) {
			if (navigator && navigator.clipboard) {
				if (st instanceof Blob) {
					navigator.clipboard.write([new ClipboardItem({ [st.type.toString()]: st })]).then(() => {
						resolve(true);
					});
          if (!noDispatch) {
            fire(st, st.type.toString());
          }
				} else if (isObject(st) && isFunction(st.toBlob)) {
					st.toBlob((blob) => {
            const item = new ClipboardItem({ [blob.type.toString()]: blob });
						navigator.clipboard.write([item]).then(() => {
              if (!noDispatch) {
                fire(st, blob.type.toString());
              }
							resolve(true);
						});
					});
				} else {
					navigator.clipboard.writeText(st);
          if (!noDispatch) {
            fire(st);
          }
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
      if (!noDispatch) {
        fire(st);
      }
			resolve(true);
		}

		resolve(false);
	});
};
