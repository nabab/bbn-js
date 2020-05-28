/**
 * @file   Size and resizing.
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
     * Resizes the environment by assigning it the effective height and width of the window.
     * @global   
     * @example 
     * ```javascript
     * bbn.fn.resize();
     * ```
     * @method   resize
     * @memberof bbn.fn
     * @returns  
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
     * Toggles the fullscreen mode.
     * 
     * @method   toggleFullScreen
     * @global   
     * @example 
     * ```javascript
     * bbn.fn.toggle_full_screen();
     * ```
     * @memberof bbn.fn
     * @returns  
     */
    toggleFullScreen(){
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
     * Retutns the size of the scrollbar realative to the current environment.
     * @method   getScrollBarSize
     * @global   
     * @example 
     * ```javascript
     * bbn.fn.getScrollBarSize();
     * ```
     * @memberof bbn.fn
     * @returns  {Number} 
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
     * Adjusts the size of the given elements.
     * 
     * @method   adjustSize
     * @global   
     * @example 
     * ```javascript
     * bbn.fn.adjustSize('height', ['<div><span>Adjusting height</span></div>']);
     * ```
     * @memberof bbn.fn
     * @param    {String} type The dimension to adjust
     * @param    {Array} eles The elements to adjust for the dimension
     * @returns  
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
     * Adjusts the height of the element(s) given as argument.
     * @method   adjustHeight
     * @global   
     * @example 
     * ```javascript
     * bbn.fn.adjustHeight(['<div><span>Adjusting height</span></div>']);
     * ```
     * @memberof bbn.fn
     * @returns  
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
     * Adjusts the width of the element(s) given as argument.
     * 
     * @method   adjustWidth
     * @global   
     * @example
     * ```javascript
     * bbn.fn.adjustWidth('<div><span>Adjusting width</span></div>');
     * ```
     * @memberof bbn.fn
     * @returns  
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
     * @ignore
     * @method   getScrollParent
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
     * Returns the height of the given dom element and force the repaint of the element to trigger animations.
     * 
     * @method   calculateHeight
     * @global   
     * 
     * @example 
     * ```javascript
     * // "17.5px"
     * bbn.fn.calculateHeight(<p>Javascript documentation</p>);
     * ```
     * @memberof bbn.fn
     * @param    {HTMLElement} element 
     * @returns  {String} The height of the element with its unit of measure.              
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

    contentSize(ele){
      const origin = ele.getBoundingClientRect();
      let maxH = 0;
      let maxW = 0;
      bbn.fn.each(ele.children, a => {
        const coord = a.getBoundingClientRect();
        const w = coord.x - origin.x + coord.width;
        if (w > maxW) {
          maxW = w;
        }
        if (a.offsetWidth > maxW) {
          maxW = a.offsetWidth;
        }
        const h = coord.y - origin.y + coord.height;
        if (h > maxH) {
          maxH = h;
        }
        if (a.offsetHeight > maxW) {
          maxW = a.offsetHeight;
        }
      });
      bbn.fn.log("contentSize", maxH)
      return {
        width: maxW,
        height: maxH
      }


    }

  });
})(bbn);
