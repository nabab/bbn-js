export default function replaceSelection(html, selectInserted) {
    var sel, range, fragment;
    sel = window.getSelection();
    // Test that the Selection object contains at least one Range
    if (sel.getRangeAt && sel.rangeCount) {
        // Get the first Range (only Firefox supports more than one)
        range = window.getSelection().getRangeAt(0);
        range.deleteContents();
        // Create a DocumentFragment to insert and populate it with HTML
        // Need to test for the existence of range.createContextualFragment
        // because it's non-standard and IE 9 does not support it
        if (range.createContextualFragment) {
            fragment = range.createContextualFragment(html);
        }
        else {
            // In IE 9 we need to use innerHTML of a temporary element
            var div = document.createElement('div');
            var child = void 0;
            div.innerHTML = html;
            fragment = document.createDocumentFragment();
            while ((child = div.firstChild)) {
                fragment.appendChild(child);
            }
        }
        var firstInsertedNode = fragment.firstChild;
        var lastInsertedNode = fragment.lastChild;
        range.insertNode(fragment);
        sel.removeAllRanges();
        if (selectInserted) {
            if (firstInsertedNode) {
                range.setStartBefore(firstInsertedNode);
                range.setEndAfter(lastInsertedNode);
            }
            sel.addRange(range);
        }
        else {
            range.setStartAfter(lastInsertedNode);
            sel.addRange(range);
        }
    }
}
;
