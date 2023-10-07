/**
 * Erase the cookie corresponding to the given name;
 *
 * @method   eraseCookie
 * @global
 * @example
 * ``` javascript
 * // 'en'
 * bbn.fn.erase('lang');
 * ```
 * @memberof bbn.fn
 * @returns  {*}
 */
const eraseCookie = function (name) {
    document.cookie = name + '=; Max-Age=-99999999;';
};
export { eraseCookie };
