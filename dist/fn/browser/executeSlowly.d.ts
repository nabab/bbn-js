/**
 * Executes a function on each element of an array slowly, yielding to the browser in between.
 * @param arr The array to iterate over.
 * @param fn The function to execute on each element. If the function returns false, the iteration stops.
 * @returns A promise that resolves to true if the iteration completed, or false if it was stopped early.
 */
export default function executeSlowly(arr: any[], fn: Function): Promise<boolean>;
