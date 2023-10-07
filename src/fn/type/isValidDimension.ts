import { isNumber } from './isNumber' ;
import { substr } from '../string/substr' ;

/**
 * Returns true if the given value is a valid CSS dimension string, false otherwise.
 *
 * @method   isValidDimension
 * @global
 * @memberof bbn.fn
 * @param    {String} st
 * @returns
 */
const isValidDimension = function (st) {
  if (
    typeof st === "string" &&
    st.length > 0 &&
    (st.indexOf("calc") === 0 || isNumber(substr(st, 0, 1)))
  ) {
    let el = document.createElement("div");
    el.style.width = st;
    let res = !!el.style.width.length;
    el.remove();
    return res;
  }
  return false;
};

export { isValidDimension };
