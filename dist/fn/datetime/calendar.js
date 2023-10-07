import dayjs from '../../../node_modules/dayjs/dayjs.min.js';
import { fdate } from "./fdate.js";
import { date } from "./date.js";
import { isDate } from "../type/isDate.js";
import { isString } from "../type/isString.js";
dayjs.extend(window['dayjs_plugin_calendar']);
const calendar = function (d, wrong_result = false) {
    if (undefined === dayjs) {
        return fdate(d, wrong_result);
    }
    let r = date(d);
    if (!isDate(r)) {
        return wrong_result && isString(wrong_result) ? wrong_result : '';
    }
    return '';
};
export { calendar };
