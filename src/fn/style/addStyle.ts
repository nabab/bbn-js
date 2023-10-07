import { isObject } from '../type/isObject.js'  ;
import { iterate } from '../loop/iterate.js'  ;

/**
 * @ignore
 * @method   addStyle
 * @todo     Add method description for addStyle
 * @global
 * @memberof bbn.fn
 * @param    {HTMLElement} ele
 * @param    {Object}      o
 * @returns  {*}
 */
const addStyle = function (ele, o) {
  if (isObject(o)) {
    iterate(o, (v, k) => {
      ele.style[k] = v;
    });
  }
};

export { addStyle };
