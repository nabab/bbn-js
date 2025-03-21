import isNumber from '../type/isNumber.js';
import isString from '../type/isString.js';
import each from '../loop/each.js';

export default function fphone(st) {
  if (isNumber(st)) {
    st = st.toString();
  }

	if (isString(st)) {
		const phoneCodes = bbn.var?.phoneCodes || [];
    let res = '';
    let prefix = '';
    let mask = '';
    if (phoneCodes.length) {
      // Get phone prefix and mask
      each(phoneCodes, c => {
        if (st.startsWith(c.prefix) && (c.prefix.length > prefix.length)) {
          prefix = c.prefix;
          mask = c.mask || '';
        }
      });
    }

    if (!mask.length) {
      if  (st.startsWith('+')) {
        if (!prefix.length) {
          prefix = st.substr(0, 3);
        }

        const tmpSt = st.slice(prefix.length);
        for (let i = 0; i < tmpSt.length; i++) {
          if (((i + 1) <= tmpSt.length) && ((i % 2) === 0)) {
            mask += '0' + (tmpSt[i + 1] ? '0' : '') + ' ';
          }
        }

        mask = mask.trim();
      }
    }

    if (mask.length) {
      if (prefix.length) {
        res = prefix + ' ';
        st = st.slice(prefix.length);
      }

      let i = 0;
      res += mask.replace(/[0-9]/g, () => {
        return st[i++] || '';
      });

      return res;
    }
	}

	return st;
};
