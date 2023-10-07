/**
 * Initializes the library bbn basing on the given configuration object.
 * - Gives to the environment the dimension of the window.innerWidth and window.innerHeight
 * - Defines the server's path (difference between the host and the current dir)
 * - Adds the colors contained in bbn.var.colors to define the css classes for background and colors.
 * - Adds the event listener to the document
 * - Activates the history
 * @method   init
 * @global
 * @memberof bbn.fn
 * @param    {Object} cfg
 * @returns
 */
declare const init: (cfg: any, force: any) => void;
export { init };
