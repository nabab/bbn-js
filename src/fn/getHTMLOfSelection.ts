import { log } from './log';

const getHTMLOfSelection = function () {
	let range;
  let selection = window.getSelection();
  if (selection.rangeCount > 0) {
    range = selection.getRangeAt(0);
    log('RANGE', range);
    let clonedSelection = range.cloneContents();
    log('clonedSelection', clonedSelection);
    let div = document.createElement('div');
    div.appendChild(clonedSelection);
    return div.innerHTML;
  } else {
    return '';
  }
};

export { getHTMLOfSelection };
