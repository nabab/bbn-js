import { Temporal } from 'temporal-polyfill';
import bbnDtDateTime from './dt/classes/dateTime.js';
import parse from './dt/functions/parse.js';
import guessFormat from './dt/functions/guessFormat.js';
declare const dt: {
    (value: any, inputFormat?: null | String): bbnDtDateTime | Temporal.PlainDateTime | Temporal.Instant | Temporal.PlainDate | Temporal.PlainTime | Temporal.PlainYearMonth | Temporal.PlainMonthDay;
    locales: any;
    parse: typeof parse;
    guessFormat: typeof guessFormat;
    time(): void;
    date(): void;
    dateTime(): void;
    duration(): void;
    zoned(): void;
    monthDay(): void;
    yearMonth(): void;
};
export default dt;
