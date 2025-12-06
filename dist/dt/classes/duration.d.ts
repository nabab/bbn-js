import { Temporal } from 'temporal-polyfill';
export default class bbnDtDuration {
    #private;
    static fromUnit(value: number, unit: string): bbnDtDuration;
    constructor(y: Temporal.Duration | number | object, m?: number, w?: number, d?: number, h?: number, i?: number, s?: number, ms?: number, unit?: string);
    setValid(isValid: boolean): void;
    get value(): Temporal.Duration;
    years(remaining?: boolean): number;
    months(remaining?: boolean): number;
    weeks(remaining?: boolean): number;
    days(remaining?: boolean): number;
    hours(remaining?: boolean): number;
    minutes(remaining?: boolean): number;
    seconds(remaining?: boolean): number;
    toJSON(): string;
    /**
     * Returns the full duration expressed as X (float), like Day.js.
     */
    asYears(): number;
    asMonths(): number;
    asWeeks(): number;
    asDays(): number;
    asHours(): number;
    asMinutes(): number;
    asSeconds(): number;
    /**
     * Add any unit (or instance default).
     */
    add(value: number, unit?: string): bbnDtDuration;
    subtract(value: number, unit?: string): bbnDtDuration;
    toMilliseconds(): number;
}
