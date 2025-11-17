import yieldToBrowser from './yieldToBrowser.js';

/**
 * Executes a function on each element of an array slowly, yielding to the browser in between.
 * @param arr The array to iterate over.
 * @param fn The function to execute on each element. If the function returns false, the iteration stops.
 * @returns A promise that resolves to true if the iteration completed, or false if it was stopped early.
 */
export default async function executeSlowly(arr: any[], fn: Function) {
  for (let i = 0; i < arr.length; i++) {
    await yieldToBrowser();
    let res = fn(arr[i], i);
    if (res instanceof Promise) {
      res = await res;
    }

    if (res === false) {
      return false;
    }
  }

  return true;
}
