import { date } from './date';
/**
 * @method   getDay
 * @ignore
 * @todo     Add method description for getDay
 * @global
 * @memberof bbn.fn
 * @param    {String|Date} v
 * @returns
 */
const getDay = function (v) {
    const biss = 1972;
    let d = date(v);
    if (d) {
        let t = d.getTime(), y = d.getYear(), m = d.getMonth(), days = (y - 1970) * 365;
        if (m < 2) {
            y--;
        }
        for (var i = biss; i <= y; i += 4) {
            days++;
        }
        return days + Math.floor(t / (24 * 3600000));
    }
    return false;
};
export { getDay };
