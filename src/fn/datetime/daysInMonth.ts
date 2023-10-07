import { date } from './date' ;

/**
 * Returns the number of days of the month given in the date.
 * @method   daysInMonth
 * @global
 *
 * @example
 * ``` javascript
 * //30
 * bbn.fn.daysInMonth(new Date());
 * ```
 *
 * @memberof bbn.fn
 * @param    {String|Date} v
 * @returns  {Number}
 */
const daysInMonth = function (v) {
	let d = date(v);
	if (d) {
		return dayjs(d).daysInMonth();
	}
	return false;
};

export { daysInMonth };
