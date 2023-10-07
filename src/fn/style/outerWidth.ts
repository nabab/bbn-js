import { selector } from '../html/selector.js'  ;

/**
 * @ignore
 * @method   outerWidth
 * @todo     Add method description for outerWidth
 * @global
 * @memberof bbn.fn
 * @returns  {*}
 */
const outerWidth = function (ele: HTMLElement): number | false {
  ele = selector(ele);
  let styles = window.getComputedStyle(ele);
  let margin =
    parseFloat(styles["marginLeft"]) + parseFloat(styles["marginRight"]);
  return Math.ceil(ele.offsetWidth + margin);
};

export { outerWidth };
