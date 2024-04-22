/**
 * If it exsists returns the cookie corresponding to the given name.
 *
 * @method   getCookie
 * @example
 * ``` javascript
 * // 'en'
 * bbn.fn.getCookie('lang');
 * ```
 * @global
 * @memberof bbn.fn
 * @param    {String} name
 * @returns
 */
export default function getCookie(name) {
    var nameEqual = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEqual) == 0) {
            var st = c.substring(nameEqual.length, c.length);
            if (st) {
                return JSON.parse(unescape(st)).value;
            }
        }
    }
    return null;
}
;
