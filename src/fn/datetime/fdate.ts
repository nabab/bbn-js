import { fdatetime } from './fdatetime';
import { date } from './date';
import { isDate } from '../type/isDate';
import { isString } from '../type/isString';

/**
 * @method   fdate
 * @todo     Add method description for fdate
 * @global   
 * @memberof bbn.fn
 * @param    {String|Date} d 
 * @param    {String}      wrong_result
 * @returns                
 */
const fdate = function (d: Date|number|string, wrong_result?: boolean|string) {
	// Retro compatibility
	if (wrong_result === true) {
		return fdatetime(d);
	}
	let r = date(d);
	if (!isDate(r)) {
		return wrong_result && isString(wrong_result) ? wrong_result : '';
	}
	if (undefined !== dayjs) {
		return dayjs(r).format('L');
	}
	return r.toLocaleDateString();
};

export { fdate };
