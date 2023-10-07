/**
 * Returns a function to give to JSON.stringify in order to avoid circular values.
 *
 * @returns Function
 */
declare const circularReplacer: () => (key: any, value: any) => any;
export { circularReplacer };
