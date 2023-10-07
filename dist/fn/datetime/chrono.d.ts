/**
 * Starts a timer and gives it a name.
 * @method   startChrono
 * @global
 * ``` javascript
 * bbn.fn.startChrono('myChrono');
 * ```
 * @memberof bbn.fn
 * @returns
 */
declare const startChrono: (name: any) => void;
/**
 * @method   stopChrono
 * @global
 * @example
 * ``` javascript
 * bbn.fn.stopChrono('myChrono');
 * // 20162
 * ```
 * @memberof bbn.fn
 * @param {String} name
 * @returns  {Number}
 */
declare const stopChrono: (name: any) => number;
export { startChrono, stopChrono };
