import parse from './dt/functions/parse.js';
import guessFormat from './dt/functions/guessFormat.js';
declare const dt: {
    (value: any, inputFormat?: null | String, cls?: "auto" | "zoned" | "dateTime" | "date" | "time" | "yearMonth" | "monthDay"): bbnDt<any>;
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
