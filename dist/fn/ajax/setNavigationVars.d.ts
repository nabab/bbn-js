/**
 * Changes the URL and the associated variables and updates the history.
 *
 * @method   setNavigationVars
 * @todo     Add method description for setNavigationVars
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * // Changing URL
 * bbn.fn.setNavigationVars('my/page', 'My page');
 * // Replacing the previous state
 * bbn.fn.setNavigationVars('my/page/deeper', 'My deeper page', null, true);
 * ```
 *
 * @param    {String}  url   The URL which will become the location.href
 * @param    {String}  title The title corresponding to the given URL
 * @param    {Object}  data  The data if any
 * @param    {Boolean} repl  If true the history state object will replace the current one, will be added otherwise
 *
 * @returns  {void}
 */
declare const setNavigationVars: (url: any, title: any, data?: any, repl?: boolean) => void;
export { setNavigationVars };
