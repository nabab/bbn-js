export default function getScrollBarSize() {
    if (bbn.env.scrollBarSize === undefined) {
        let outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        if ('msOverflowStyle' in outer.style) {
            outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
        }
        document.body.appendChild(outer);
        let widthNoScroll = outer.offsetWidth;
        // force scrollbars
        outer.style.overflow = 'scroll';
        // add innerdiv
        let inner = document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);
        let widthWithScroll = inner.offsetWidth;
        // remove divs
        outer.parentNode.removeChild(outer);
        let sz = widthNoScroll - widthWithScroll;
        bbn.env.scrollBarSize = sz ? sz + 1 : 0;
    }
    return bbn.env.scrollBarSize;
}
;
