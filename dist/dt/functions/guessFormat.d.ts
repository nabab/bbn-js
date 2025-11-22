/**
 * Guess a date format string for the given input.
 *
 * - If `formats` is provided, it will try those formats in order and return
 *   the first one that successfully parses.
 * - If `formats` is not provided, it will try a set of built-in common formats
 *   (MySQL, ISO/JS, EU/US, full-text using bbn.dt.locales).
 * - Returns `null` if no format matches.
 *
 * NOTE: It relies on `this.parse(input, format)` NOT throwing when the format is correct.
 */
export default function guessFormat(input: string, formats?: string[] | string): string | null;
