import { selector } from '../html/selector.js';
/**
 *
 * @ignore
 * @method   outerHeight
 * @todo     Add method description for outerHeight
 * @global
 * @memberof bbn.fn
 * @returns  {*}
 */
var outerHeight = function (ele) {
    ele = selector(ele);
    if (ele && "offsetHeight" in ele) {
        var styles = window.getComputedStyle(ele);
        var margin = parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);
        return Math.ceil(ele.offsetHeight + margin);
    }
};
export { outerHeight };
