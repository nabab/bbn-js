/**
 * Follows a link and if needed by sending the corresponding Ajax request and executing bbn.fn.defaultPreLinkFunction.
 *
 * Once bbn has been initiated this function will be triggered every time a link is clicked.
 * It accepts the same arguments as seen in treatAjaxArguments but will tipically just be called with a URL,
 * the defaultLinkURL functions being in charge of loading the content
 *
 * @method   link
 * @todo     Manage anchors + returned data unclear
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * // Will open in a new window/tab
 * bbn.fn.link('https://nytimes.com');
 * // Will send an Ajax request
 * bbn.fn.link('my/page');
 * // Will open your default email program
 * bbn.fn.link('mailto:postmaster@test.com');
 * ```
 *
 * @returns
 */
declare const link: (...args: any[]) => any;
export { link };
