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
 * Enumerate common date, time and datetime formats for a locale, by iterating
 * over combinations of:
 *   - weekday / year / month / day
 *   - hour / minute / second / timeZoneName
 *
 * Constraints:
 *   - no minutes/seconds if you don't have hours
 *   - no seconds if you don't have minutes
 *   - no timezone if you don't have time
 */
export declare function getCommonFormatsForLocale(lng: string | string[]): CommonFormats;
export default function buildLocaleFromIntl(): void;
export {};
