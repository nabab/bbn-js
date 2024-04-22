/**
 * Returns a function to give to JSON.stringify in order to avoid circular values.
 *
 * @returns Function
 */
export default function circularReplacer(): (key: any, value: any) => any;
