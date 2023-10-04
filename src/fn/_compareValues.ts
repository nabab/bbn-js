
import { getProperty } from './getProperty';
import { isString } from './isString';
import { removeAccents } from './removeAccents';
import { isDate } from './isDate';


const _compareValues = function(a, b, prop, dir = 'asc') {
      let va = getProperty(a, prop),
          vb = getProperty(b, prop),
          ta = (typeof (va)).toLowerCase(),
          tb = (typeof (vb)).toLowerCase();
      if ((dir !== 'asc') && isString(dir) && (dir.toLowerCase() === 'desc')) {
        dir = 'desc';
      }
      if (ta !== tb) {
        va = ta;
        vb = tb;
      }
      else {
        switch (ta) {
          case 'string':
            va = removeAccents(va).toLowerCase();
            vb = removeAccents(vb).toLowerCase();
            break;
          case 'boolean':
            va = va ? 1 : 0;
            vb = vb ? 1 : 0;
            break;
          case 'object':
            if (isDate(va)) {
              va = va.getTime();
              vb = isDate(vb) ? vb.getTime() : 0;
            }
            break;
        }
      }
      if (va < vb) {
        return dir === 'desc' ? 1 : -1;
      }
      if (va > vb) {
        return dir === 'desc' ? -1 : 1;
      }
      return 0;
    };

export {_compareValues}
