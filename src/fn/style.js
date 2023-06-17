/**
 * @file   Styling.
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
    center(ele){
      //ele = $(ele);
      let parent = ele.parentNode,
          //w = parent.width(),
          w = parent.clientWidth,
          //h = parent.height();
          h = parent.clientHeight;
      while ( parent && (!w || !h) ){
        /*parent = parent.parent(),
          w = parent.width(),
          h = parent.height();*/
        parent = ele.parentNode;        
        w = parent.clientWidth;
        h = parent.clientHeight;  
      }
      bbn.fn.log("BBN_CENTER", w, h);

      //ele.css("position","absolute");
      ele.style.position = "absolute";
      //ele.css("top", Math.max(0, ((h - ele.outerHeight()) / 2) + parent.scrollTop()) + "px");
      ele.style.top = Math.max(0, ((h - ele.offsetHeight) / 2) + parent.scrollTop) + "px";
      //ele.css("left", Math.max(0, ((w - ele.outerWidth()) / 2) + parent.scrollLeft()) + "px");
      ele.style.left = Math.max(0, ((h - ele.offsetWidth) / 2) + parent.scrollLeft) + "px";
      return ele;
    },

    /**
     * Adds the given color to the object bbn.var.colors in order to be able to use 
     * the css classes bbn-bg-myColor for the background and bbn-myColor for the text color.
     * 
     * @method   addColors
     * @global   
     * @example 
     * ```javascript
     * //<div class="bbn-bg-maroon">background</div> <span class="bbn-maroon">text color</span>
     * bbn.fn.addColors({maroon: '#800000'});
     * ```
     * @memberof bbn.fn
     * @param    {Object} colors 
     * @returns  
     */
    addColors(colors){
      let st = '';
      if ( bbn.fn.numProperties(colors) ){
        if ( !bbn.var.colors ){
          bbn.var.colors = {};
        }
        let element = document.createElement('style');
        document.head.appendChild(element);
        let sheet = element.sheet;
        // Append style element to head
        let i = 0;
        bbn.fn.iterate(colors, (v, n) => {
          bbn.var.colors[n] = v;
          sheet.insertRule('.bbn-' + n + ', .bbn-color-text-' + n + ' {color: ' + v + ' !important;}', i);
          sheet.insertRule('.bbn-bg-' + n + ', .bbn-color-bg-' + n + ', .bbn-color-background-' + n + ' {background-color: ' + v + ' !important;}', i);
          sheet.insertRule('.bbn-border-' + n + ', .bbn-color-border-' + n + ' {border-color: ' + v + ' !important;}', i);
          sheet.insertRule('.bbn-color-' + n + ' {border-color: ' + v + '; background-color: ' + v + '; color: ' + v + ';}', i);
        });
      }
    },

    /**
     * not used
     * @ignore
     * @method   cssExists
     * @todo     Add method description for cssExists
     * @global   
     * @memberof bbn.fn
     * @param    {String} f 
     * @returns           
     */
    cssExists(f){
      var ok, rules, css = document.styleSheets;
      for (var sx = 0; sx < css.length; sx++ ){
        ok = 1;
        try{
          rules = css[sx].rules || css[sx].cssRules;
        }
        catch (e){
          ok = false;
          if ( e.name !== 'SecurityError' ){
            throw e;
          }
        }
        if ( ok ){
          //bbn.fn.log(rules);
          for (var cx = 0; cx < rules.length; cx++ ){
            //bbn.fn.log(rules[cx].selectorText);
            if ( new RegExp("(^|\\s)" + bbn.fn.escapeRegExp(f) + "(\\{|\\s)", "g").test(rules[cx].selectorText) ){
              return true;
            }
          }
        }
      }
      return false;
    },

    /**
     * @ignore
     * @method   animateCss
     * @todo     Add method description for animateCss
     * @global   
     * @memberof bbn.fn
     * @param    {HTMLElement} ele           
     * @param    {String}      animationName 
     * @param    {Function}    callback      
     * @returns  {*}           
     */
    animateCss(ele, animationName, callback ){
      let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';                
      /*$(ele).addClass('animated ' + animationName).one(animationEnd, function(){
        if ( typeof callback == 'function' ){ // make sure the callback is a function
          callback.call(this); // brings the scope to the callback
        }
        $(this).removeClass('animated ' + animationName);
      })*/       
      ele.classList.add('animated');
      ele.classList.add(animationName);
      ele.addEventListener(animationEnd, (e) => {
        e.target.removeEventListener(e.type, arguments.callee);
        if ( typeof callback == 'function' ){ // make sure the callback is a function          
          callback.call(this); // brings the scope to the callback
        }
        this.classList.remove(animation);      
      });
    },

    /**
     * @ignore
     * @method   addStyle
     * @todo     Add method description for addStyle
     * @global   
     * @memberof bbn.fn
     * @param    {HTMLElement} ele 
     * @param    {Object}      o   
     * @returns  {*}           
     */
    addStyle(ele, o){
      if ( bbn.fn.isObject(o) ){
        bbn.fn.iterate(o, (v, k) => {
          ele.style[k] = v;
        });
      }
    },

    /**
     * @ignore
     * @method   selector
     * @todo     Add method description for selector
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    selector(ele) {
      return (typeof el === 'string') ? document.querySelector(ele) : ele;
    },

    /**
     * @ignore
     * @method   outerWidth
     * @todo     Add method description for outerWidth
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    outerWidth(ele){
      ele = bbn.fn.selector(ele); 
      let styles = window.getComputedStyle(ele);
      let margin = parseFloat(styles['marginLeft']) +
                   parseFloat(styles['marginRight']);
      return Math.ceil(ele.offsetWidth + margin);
    },

    /**
     * 
     * @ignore
     * @method   outerHeight
     * @todo     Add method description for outerHeight
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    outerHeight(ele){
      ele = bbn.fn.selector(ele); 
      let styles = window.getComputedStyle(ele);
      let margin = parseFloat(styles['marginTop']) +
                   parseFloat(styles['marginBottom']);
      return Math.ceil(ele.offsetHeight + margin);
    },

    /**
     * Returns the hex color of the given rgb or color name.
     * @method   colorToHex
     * @global   
     * @example 
     * ```javascript
     * //"#ff0000"
     * bbn.fn.colorToHex('red');
     * ```
     * 
     * @example 
     * ```javascript
     * //"#ff0000"
     * bbn.fn.colorToHex('rgb(255,0,0)');
     * ```
     * @memberof bbn.fn
     * @returns  {String} 
     */
    colorToHex(color){
      let canvas = document.createElement("canvas").getContext("2d");
	    canvas.fillStyle = color;
	    return canvas.fillStyle;
    },

    /**
     * Takes color in hex format and lightens or darkens it with the given value.
     * @method   lightenDarkenHex
     * @global
     * @example
     * ```javascript
     * //"#eccb28"
     * bbn.fn.lightenDarkenHex('#c4a300', 40);
     * ```
     *
     * @example
     * ```javascript
     * //"#9c7b00"
     * bbn.fn.lightenDarkenHex(#c4a300', -40);
     * ```
     * @memberof bbn.fn
     * @returns  {String}
     */
    lightenDarkenHex(hex, amt){
      if ( hex && amt ){
        let ht = hex[0] === "#";
        hex = ht ? hex.slice(1) : hex;
        let num = parseInt(hex, 16),
            r = (num >> 16) + amt,
            b = ((num >> 8) & 0x00FF) + amt,
            g = (num & 0x0000FF) + amt;
        if ( r > 255 ){
          r = 255;
        }
        else if  ( r < 0 ){
          r = 0;
        }
        if ( b > 255 ){
          b = 255;
        }
        else if  ( b < 0 ){
          b = 0;
        }
        if ( g > 255 ){
          g = 255;
        }
        else if ( g < 0 ){
          g = 0;
        }
        return (ht ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
      }
    },

    /**
     * Gets a CSS variable value
     * @param {String*} varname 
     * @returns 
     */
    getCssVar(varname) {
      if (varname.indexOf('--') !== 0) {
        varname = '--' + varname;
      }

      return getComputedStyle(document.documentElement).getPropertyValue(varname);
    },

    /**
     * Creates a CSS variable
     * @param {String*} varname 
     * @param {String*} value
     * @returns 
     */
     setCssVar(varname, value) {
      if (varname.indexOf('--') !== 0) {
        varname = '--' + varname;
      }

      document.documentElement.setProperty(varname, value);
    },


  });
})(bbn);
