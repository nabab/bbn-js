import bbnDtDateTime from './dt/classes/dateTime.js';
import parse from './dt/functions/parse.js';
import guessFormat from './dt/functions/guessFormat.js';
declare const dt: {
    (value: any, inputFormat?: null | String, cls?: "auto" | "zoned" | "dateTime" | "date" | "time" | "yearMonth" | "monthDay"): import("./dt/classes/zoned.js").default | import("./dt/classes/date.js").default | import("./dt/classes/time.js").default | import("./dt/classes/yearMonth.js").default | import("./dt/classes/monthDay.js").default | bbnDtDateTime;
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
