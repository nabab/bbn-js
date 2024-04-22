/**
 * Returns a promise having the event's data as argument.
 * @method   getEventData
 * @global
 * @example
 * ``` javascript
 * let type = e.type;
 *   bbn.fn.getEventData(e).then((data) => {
 *     bbn.fn.log("DATA FROM " + type, data);
 *   });
 * ```
 * @memberof bbn.fn
 * @returns  {Promise}
 */
export default function getEventData(e: any): Promise<unknown>;
