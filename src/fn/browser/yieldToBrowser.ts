/**
 * Yields execution to the browser to allow it to process pending UI updates.
 * Uses `window.scheduler.yield()` if available, otherwise falls back to `requestAnimationFrame`.
 * @method   yieldToBrowser
 * @global
 * @example
 * ``` javascript
 * await bbn.fn.yieldToBrowser();
 * ```
 * @memberof bbn.fn
 * @returns  {Promise}
 */
export default async function yieldToBrowser() {
  if (window.scheduler?.yield) {
    await window.scheduler.yield(); // cooperative yield
  }
  else {
    await new Promise(requestAnimationFrame);
  }
};
