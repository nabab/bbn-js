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
var setCookie = function (name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    var st = escape(JSON.stringify({ value: value }));
    document.cookie = name + '=' + st + expires + '; path=/';
};
export { setCookie };
