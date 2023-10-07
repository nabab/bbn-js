import { selector } from '../html/selector.js'  ;

/**
 *
 * @ignore
 * @method   outerHeight
 * @todo     Add method description for outerHeight
 * @global
 * @memberof bbn.fn
 * @returns  {*}
 */
const outerHeight = function (ele: HTMLElement): number | false {
  ele = selector(ele);
  if (ele && "offsetHeight" in ele) {
    let styles = window.getComputedStyle(ele);
    let margin: number =
      parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);
    return Math.ceil(ele.offsetHeight + margin);
  }
};

export { outerHeight };
