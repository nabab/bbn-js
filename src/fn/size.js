/**
 * @file   Sizing functions.
 * @author BBN Solutions <info@bbn.solutions>
 * @since  12/04/2020
 */

;((bbn) => {
  "use strict";

  /**
   * @var {Object} _private Misc variable for internal use
   */
  let _private = {};

  Object.assign(bbn.fn, {
    /**
     * @method   resize
     * @todo     Add method description for resize
     * @global   
     * @memberof bbn.fn
     * @fires    {*} 
     * @returns  {*} 
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
     * @method   toggle_full_screen
     * @todo     Add method description for toggle_full_screen
     * @global   
     * @memberof bbn.fn
     * @fires    {*} 
     * @fires    {*} 
     * @fires    {*} 
     * @fires    {*} 
     * @fires    {*} 
     * @fires    {*} 
     * @fires    {*} 
     * @fires    {*} 
     * @fires    {*} 
     * @fires    {*} 
     * @returns  {*} 
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
     * @method   getScrollBarSize
     * @todo     Add method description for getScrollBarSize
     * @global   
     * @memberof bbn.fn
     * @returns   
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

    /**
     * @method   adjustSize
     * @todo     Add method description for adjustSize
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
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
     * @method   adjustHeight
     * @todo     Add method description for adjustHeight
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
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
     * @method   adjustWidth
     * @todo     Add method description for adjustWidth
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
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
     * @method   getScrollParent
     * @todo     Add method description for getScrollParent
     * @global   
     * @memberof bbn.fn
     * @param    {HTMLElement} node 
     * @returns                
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
     * @method   calculateHeight
     * @todo     Add method description for calculateHeight
     * @global   
     * @memberof bbn.fn
     * @param    {HTMLElement} element 
     * @returns                
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
    },

  });
})(bbn);
