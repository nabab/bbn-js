import { selector } from './selector';

const outerHeight = function (ele: HTMLElement): number|false
{
	ele = selector(ele);
  if (ele && ('offsetHeight' in ele)) {
    let styles = window.getComputedStyle(ele);
    let margin: number = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);
    return Math.ceil(ele.offsetHeight + margin);
  }
};

export { outerHeight };
