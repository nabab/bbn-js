/**
 * Tells if the interface is beeing active for the past x seconds.
 * @method   isActiveInterface
 * @global
 * @example
 * // true
 * ``` javascript
 * bbn.fn.isActiveInterface(54764654);
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
declare const isActiveInterface: (secs?: number) => boolean;
export { isActiveInterface };
