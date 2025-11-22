import parse from './dt/functions/parse.js';
declare const dt: {
    (value: any, inputFormat?: null | String): void;
    parse: typeof parse;
    time(): void;
    date(): void;
    dateTime(): void;
    duration(): void;
    zoned(): void;
    monthDay(): void;
    yearMonth(): void;
};
export default dt;
