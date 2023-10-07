import { selector } from '../html/selector.js';
/**
 * @ignore
 * @method   outerWidth
 * @todo     Add method description for outerWidth
 * @global
 * @memberof bbn.fn
 * @returns  {*}
 */
var outerWidth = function (ele) {
    ele = selector(ele);
    var styles = window.getComputedStyle(ele);
    var margin = parseFloat(styles["marginLeft"]) + parseFloat(styles["marginRight"]);
    return Math.ceil(ele.offsetWidth + margin);
};
export { outerWidth };
