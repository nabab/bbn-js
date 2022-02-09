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
     */
    resize(){
      let diffW = bbn.env.width !== window.innerWidth;
      let diffH = bbn.env.height !== window.innerHeight;
      if (diffW || diffH){
        if (diffW) {
          bbn.env.width = window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth;
          document.documentElement.style.setProperty('--vw', (bbn.env.width * 0.01) + 'px');
        }
        if (diffH) {
          bbn.env.height = window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight;
          document.documentElement.style.setProperty('--vh', (bbn.env.height * 0.01) + 'px');
        }

        let smallWidth = bbn.fn.getCssVar('mobile-limit') || 650;
        let newCls = 'bbn-screen-' + (bbn.env.width < parseInt(smallWidth)  ? 'small' : 'regular');
        let classes = (document.body.className || '').split(' ');
        let done = false;
        bbn.fn.each(classes, (cls, idx) => {
          let bits = cls.split('-');
          if ((bits.length === 3) && (cls.indexOf('bbn-screen-') === 0)) {
            done = true;
            if (cls !== newCls) {
              classes.splice(idx, 1, newCls);
            }
            return false;
          }
        });
        if (!done) {
          classes.push(newCls);
        }

        document.body.className = classes.join(' ');
        bbn.fn.defaultResizeFunction();
      }
    },

    /**
     * Returns the value of size for element html
     *
     * If the argument passed is a number it will return the value expressed in 'px' otherwise if string returns this ose nothing is passed it will return 'auto'.
     *
     * @method   formatSize
     * @global
     *
     *
     * @memberof bbn.fn
     * @param    {String|Number} st
     * @returns  {String}
     */
    formatSize(st, noValid){
      if (bbn.fn.isNumber(st)) {
        return st + 'px';
      }
      if (bbn.fn.isString(st)) {
        return st;
      }
      return noValid ? false : 'auto';
    },

    /**
     * Toggles the fullscreen mode.
     * 
     * @method   toggleFullScreen
     * @global   
     * 
     * @example 
     * ```javascript
     * // Straight forward isn't it?
     * bbn.fn.toggleFullScreen();
     * ```
     * @memberof bbn.fn
     */
    toggleFullScreen(){
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
     * // 16
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
     * @todo Take the padding into account
     * @global   
     * @memberof bbn.fn
     * 
     * @example 
     * ```html
     * <div class="container">
     *   <div style="float: left; width: 25%; background-color: red">
     *     This is a random text
     *   </div>
     *   <div style="float: left; width: 25%; background-color: blue">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     *   <div style="float: left; width: 25%; background-color: green">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     *   <div style="float: left; width: 25%; background-color: yellow">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     * </div>
     * <script>
     * bbn.fn.adjustSize('height', document.body.querySelectorAll('.container > div'));
     * </script>
     * ```
     * 
     * @param    {String} type The dimension to adjust
     * @param    {Array} eles The elements to adjust for the dimension
     * 
     * @returns  
     */
    adjustSize(type, eles){
      let max = 0,
          idx;
      bbn.fn.each(eles, (el) => {
        el.style[type] = 'auto';
      });
      bbn.fn.each(eles, (el, i) => {
        let rect = el.getBoundingClientRect(),
            s = rect[type] % 1 ? (rect[type] - (rect[type] % 1) + 1) : rect[type];
            //s = rect[type];
        if (s > max) {
          max = s;
          idx = i;
        }
      });
      bbn.fn.each(eles, (el, i) => {
        if (max){
          el.style[type] = max + 'px';
        }
      });
    },

    /**
     * Adjusts the height of the element(s) given as argument.
     * @method   adjustHeight
     * @global   
     * @memberof bbn.fn
     * 
     * @example 
     * ```html
     * <div class="container">
     *   <div style="float: left; width: 25%; background-color: red">
     *     This is a random text
     *   </div>
     *   <div style="float: left; width: 25%; background-color: blue">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     *   <div style="float: left; width: 25%; background-color: green">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     *   <div style="float: left; width: 25%; background-color: yellow">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     * </div>
     * <script>
     * bbn.fn.adjustHeight(document.body.querySelectorAll('.container > div'));
     * </script>
     * ```
     * 
     * @returns  
     */
    adjustHeight(){
      let args = arguments;
      if ( (args.length === 1) && bbn.fn.isIterable(args[0]) ){
        args = args[0];
      }
      return bbn.fn.adjustSize('height', args);
    },

    /**
     * Adjusts the width of the element(s) given as argument.
     * 
     * @method   adjustWidth
     * @global   
     * @memberof bbn.fn
     * 
     * @example 
     * ```html
     * <div class="container">
     *   <div style="float: left; background-color: red">
     *     This is a random text
     *   </div>
     *   <div style="float: left; background-color: blue">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     *   <div style="float: left; background-color: green">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     *   <div style="float: left; background-color: yellow">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     * </div>
     * <script>
     * bbn.fn.adjustWidth(document.body.querySelectorAll('.container > div'));
     * </script>
     * ```
     * 
     * @returns  
     */
    adjustWidth(){
      let args = arguments;
      if ( (args.length === 1) && bbn.fn.isIterable(args[0]) ){
        args = args[0];
      }
      return bbn.fn.adjustSize('width', args);
    }
  });
})(bbn);
