/**
 * Created by BBN on 10/02/2017.
 */
;((bbn) => {
  "use strict";

  Object.assign(bbn.fn, {
    /**
     * Resizes the environment and fires the default resize function.
     * @method resize
     * @fires bbn.fn.defaultResizeFunction
     */
    resize(){
      var w = window.innerWidth,
          h = window.innerHeight;
      if ( (bbn.env.width !== w) || (bbn.env.height !== h) ){
        bbn.env.width = w;
        bbn.env.height = h;
      }
      //$(".bbn-sensor", document.body).not(".bbn-sensor .bbn-sensor").bbn("propagateResize");
      bbn.fn.defaultResizeFunction();
    },
    /**
     * Toggles the browser fullscreen.
     * @method toggle_full_screen 
     * @fires window.document.mozCancelFullScreen
     * @fires window.document.documentElement.mozRequestFullScreen
     * @fires window.document.webkitCancelFullScreen
     * @fires window.document.documentElement.webkitRequestFullScreen
     * @fires window.document.msExitFullscreen
     * @fires window.document.documentElement.msRequestFullScreen
     * @fires window.document.exitFullscreen
     * @fires window.document.exitFullscreen()
     * @fires window.document.documentElement.requestFullscreen
     * @fires bbn.fn.resize
     */
    toggle_full_screen(){
      var wscript;
      if ( window.document.documentElement.mozRequestFullScreen ){
        if ( window.document.mozFullScreen ){
          window.document.mozCancelFullScreen();
        }
        else{
          window.document.documentElement.mozRequestFullScreen();
        }
      }
      else if ( window.document.documentElement.webkitRequestFullScreen ){
        if ( window.document.webkitIsFullScreen ){
          window.document.webkitCancelFullScreen();
        }
        else{
          window.document.documentElement.webkitRequestFullScreen();
        }
      }
      else if ( window.document.msRequestFullScreen ){
        if ( window.document.msFullscreenEnabled ){
          window.document.msExitFullscreen();
        }
        else{
          window.document.documentElement.msRequestFullScreen();
        }
      }
      else if ( window.document.requestFullscreen ){
        if ( window.document.fullscreenEnabled ){
          window.document.exitFullscreen();
        }
        else{
          window.document.documentElement.requestFullscreen();
        }
      }
      setTimeout(function(){
        bbn.fn.resize();
      }, 0);
    },
    /**
     * Gets the scrollbar size.
     * @method getScrollBarSize
     * @return {Number}
     */
    getScrollBarSize(){
      if ( bbn.env.scrollBarSize === undefined ){
        let outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

        document.body.appendChild(outer);

        let widthNoScroll = outer.offsetWidth;
        // force scrollbars
        outer.style.overflow = "scroll";

        // add innerdiv
        let inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);

        let widthWithScroll = inner.offsetWidth;

        // remove divs
        outer.parentNode.removeChild(outer);

        let sz = widthNoScroll - widthWithScroll;
        bbn.env.scrollBarSize = sz ? sz + 1 : 0;
      }
      return bbn.env.scrollBarSize;
    },
    adjustSize(type, eles){
      let max = 0,
          idx;
      bbn.fn.each(eles, (el, i) => {
        el.style[type] = 'auto';
      });
      bbn.fn.each(eles, (el, i) => {
        let s = parseFloat(getComputedStyle(el)[type]);
        if ( s > max ){
          max = s;
          idx = i;
        }
      });
      bbn.fn.each(eles, (el, i) => {
        if ( max && (idx !== i)){
          el.style[type] = max + 'px';
        }
      });
    },
    /**
     * Adjusts the height of the given element(s).
     * @method adjustHeight
     */
    adjustHeight(){
      let maxH = 0,
          idx,
          args = arguments;
      if ( (args.length === 1) && bbn.fn.isArray(args[0]) ){
        args = args[0];
      }
      return bbn.fn.adjustSize('height', args);
    },
    /**
     * Adjusts the width of the given element(s).
     * @method adjustWidth
     */
    adjustWidth(){
      let maxW = 0,
          idx,
          args = arguments;
      if ( (args.length === 1) && bbn.fn.isArray(args[0]) ){
        args = args[0];
      }
      return bbn.fn.adjustSize('width', args);
    },
    /**
     * Returns the scorll parent of the given node.
     * @method getScrollBarSize
     * @param {HTMLElement} node 
     * @return {HTMLElement}
     */
    getScrollParent(node) {
      if ( node == null ){
        return null;
      }
    
      if ( node.clientHeight && (node.scrollHeight > node.clientHeight) ){
        return node;
      }
      else {
        return bbn.fn.getScrollParent(node.parentNode);
      }
    },
    /**
     * Returns the height of the given element.
     * @method calculateHeight
     * @param {HTMLElement} element 
     * @return {String}
     */
    calculateHeight(element){
      const oldVis = element.style.visibility;
      element.style.visibility = 'hidden';
      const oldDisp = element.style.display;
      if ( oldDisp === 'none' ){
        element.style.display = 'block';
      }
      const width = getComputedStyle(element).width;
      const oldWidth = element.style.width;
      const oldHeight = element.style.height;
      const oldPos = element.style.position;
      element.style.width = width;
      element.style.position = 'absolute';
      element.style.height = 'auto';
      const height = getComputedStyle(element).height;
      element.style.width = oldWidth || null;
      element.style.position = oldPos || null;
      element.style.visibility = oldVis || null;
      element.style.display = oldDisp || null;
      element.style.height = oldHeight || null;
      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;
      return height;
    }
  })

})(bbn);
