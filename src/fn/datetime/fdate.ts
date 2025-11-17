import date from '../../date.js'  ;
import isString from '../type/isString.js'  ;

/**
 * @method   fdate
 * @todo     Add method description for fdate
 * @global   
 * @memberof bbn.fn
 * @param    {String|Date} d 
 * @param    {String}      wrong_result
 * @returns                
 */
export default function fdate(d, wrong_result = false) {
	let r = date(d);
  let time = false;
	// Retro compatibility
	if (wrong_result === true) {
		time = true;
	}
  
  if (!r.isValid) {
		return wrong_result && isString(wrong_result) ? wrong_result : '';
	}

  return r.fdate(true, time);
};
