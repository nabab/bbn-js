/**
 * Creates a cookie and assigns it to document.cookie.
 * @method   setCookie
 * @global
 * @example
 * ``` javascript
 * bbn.fn.setCookie('lang', 'en', 2);
 * ```
 * @memberof bbn.fn
 * @param    {String} name  The name of the cookie.
 * @param    {String} value The value of the cookie.
 * @param    {Number} days  The days before expiration of the cookie.
 * @returns
 */
declare const setCookie: (name: any, value: any, days: any) => void;
export { setCookie };
