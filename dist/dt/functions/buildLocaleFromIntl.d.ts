type CommonFormats = {
    date: Array<{
        pattern: string;
        sample: string;
        options: Intl.DateTimeFormatOptions;
    }>;
    time: Array<{
        pattern: string;
        sample: string;
        options: Intl.DateTimeFormatOptions;
    }>;
    datetime: Array<{
        pattern: string;
        sample: string;
        options: Intl.DateTimeFormatOptions;
    }>;
};
/**
 * Get a curated set of *common* date, time and datetime formats
 * for the given locale, without exploding into thousands of combos.
 *
 * Rules:
 *  - Date: only sensible combos (Y-M-D ± weekday, Y-M, M-D).
 *  - Time: hour / hour:minute / hour:minute:second (+ optional TZ).
 *  - Datetime: only full dates (Y-M-D ± weekday) combined with time.
 */
export declare function getCommonFormatsForLocale(lng: string | string[]): CommonFormats;
export default function buildLocaleFromIntl(): void;
export {};
