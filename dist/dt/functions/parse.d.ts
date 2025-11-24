export default function parse(input: string, format: string | string[], cls?: 'auto' | 'zoned' | 'dateTime' | 'date' | 'time' | 'yearMonth' | 'monthDay', locale?: {
    monthsLong?: string[];
    monthsShort?: string[];
    weekdaysLong?: string[];
    weekdaysShort?: string[];
}): bbnDt<any>;
