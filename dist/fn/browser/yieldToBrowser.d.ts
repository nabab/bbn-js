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
export default function yieldToBrowser(): Promise<void>;
