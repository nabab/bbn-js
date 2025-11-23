import bbnDtZoned from '../classes/zoned.js';
import bbnDtDateTime from '../classes/dateTime.js';
import bbnDtDate from '../classes/date.js';
import bbnDtTime from '../classes/time.js';
import bbnDtYearMonth from '../classes/yearMonth.js';
import bbnDtMonthDay from '../classes/monthDay.js';
export default function parse(input: string, format: string | string[], cls?: 'auto' | 'zoned' | 'dateTime' | 'date' | 'time' | 'yearMonth' | 'monthDay', locale?: {
    monthsLong?: string[];
    monthsShort?: string[];
    weekdaysLong?: string[];
    weekdaysShort?: string[];
}): bbnDtZoned | bbnDtDateTime | bbnDtDate | bbnDtTime | bbnDtYearMonth | bbnDtMonthDay;
