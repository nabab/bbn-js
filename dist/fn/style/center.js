/**
 * Centers the given element by giving it a position absolute.
 *
 * @method   center
 * @global
 * @example
 * ```javascript
 * //<div style="position: absolute; top: 73px; left: 0px;">Documentation</div>
 * bbn.fn.center('<div>Documentation</div>')
 * ```
 * @memberof bbn.fn
 * @param    {HTMLElement} ele
 * @returns  {HTMLElement} The dom element with the new style.
 */
export default function center(ele) {
    //ele = $(ele);
    var parent = ele.parentNode, 
    //w = parent.width(),
    w = parent.clientWidth, 
    //h = parent.height();
    h = parent.clientHeight;
    while (parent && (!w || !h)) {
        /*parent = parent.parent(),
              w = parent.width(),
              h = parent.height();*/
        parent = ele.parentNode;
        w = parent.clientWidth;
        h = parent.clientHeight;
    }
    //ele.css("position","absolute");
    ele.style.position = "absolute";
    //ele.css("top", Math.max(0, ((h - ele.outerHeight()) / 2) + parent.scrollTop()) + "px");
    ele.style.top =
        Math.max(0, (h - ele.offsetHeight) / 2 + parent.scrollTop) + "px";
    //ele.css("left", Math.max(0, ((w - ele.outerWidth()) / 2) + parent.scrollLeft()) + "px");
    ele.style.left =
        Math.max(0, (h - ele.offsetWidth) / 2 + parent.scrollLeft) + "px";
    return ele;
}
;
