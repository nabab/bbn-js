/**
 * Returns true if the given argument is a date object.
 * @method   isDataURL
 * @global
 * @example
 * ```javascript
 * console.log(isDataURL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...")); // true
 * console.log(isDataURL("data:text/plain,HelloWorld"));                      // true
 * console.log(isDataURL("https://example.com/image.png"));                   // false
 * console.log(isDataURL("data:,Hello%2C%20World!"));                         // true
 * console.log(isDataURL("data:image/png;xyz,"));                             // false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isDataURL(...args: any[]): boolean;
