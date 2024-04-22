import log from '../browser/log.js';
export default function getHTMLOfSelection() {
    var range;
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
        range = selection.getRangeAt(0);
        log('RANGE', range);
        var clonedSelection = range.cloneContents();
        log('clonedSelection', clonedSelection);
        var div = document.createElement('div');
        div.appendChild(clonedSelection);
        return div.innerHTML;
    }
    else {
        return '';
    }
}
;
