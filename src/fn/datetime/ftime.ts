import date from '../../date.js'  ;
import isString from '../type/isString.js'  ;

/**
 * @method   ftime
 * @todo     Add method description for ftime
 * @global   
 * @memberof bbn.fn
 * @returns  {*} 
 */
export default function ftime(d, wrong_result) {
	let r = date(d);
	if (!r.isValid) {
		return wrong_result && isString(wrong_result) ? wrong_result : '';
	}

  return r.ftime();
};
