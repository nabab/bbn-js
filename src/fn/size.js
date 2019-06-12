/**
 * Created by BBN on 10/02/2017.
 */
;(($, bbn) => {
  "use strict";

  $.extend(bbn.fn, {

    resize(){
      var w = window.innerWidth,
          h = window.innerHeight;
      //bbn.fn.log("resize");
      if ( (bbn.env.width !== w) || (bbn.env.height !== h) ){
        bbn.env.width = w;
        bbn.env.height = h;
      }
      //$(".bbn-sensor", document.body).not(".bbn-sensor .bbn-sensor").bbn("propagateResize");
      bbn.fn.defaultResizeFunction();
    },

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

    adjustHeight(){
      let maxH = 0,
          idx,
          args = arguments;
      if ( (args.length === 1) && bbn.fn.isArray(args[0]) ){
        args = args[0];
      }
      bbn.fn.each(args, (el, i) => {
        let h = el.clientHeight;
        if ( h > maxH ){
          maxH = h;
          idx = i;
        }
      });
      bbn.fn.each(args, (el, i) => {
        if ( maxH && (i !== idx) ){
          el.style.height = maxH + 'px';
        }
      });
    },

    adjustWidth(){
      let maxW = 0;
      bbn.fn.each(arguments, (el, i) => {
        let w = $(el).width();
        if ( w > maxW ){
          maxW = w;
        }
      });
      bbn.fn.each(arguments, (el, i) => {
        if ( maxW ){
          $(el).width(maxW);
        }
      });
    },

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

})(jQuery, bbn);
