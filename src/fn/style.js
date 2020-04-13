/**
 * @file   Styling functions.
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
     * @method   center
     * @todo     Add method description for center
     * @global   
     * @memberof bbn.fn
     * @param    {HTMLElement} ele 
     * @returns                
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
     * @method   addColors
     * @todo     Add method description for addColors
     * @global   
     * @memberof bbn.fn
     * @param    {Object} colors 
     * @returns  {*}      
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
          sheet.insertRule('.bbn-' + n + '{color: ' + v + ' !important;}', i);
          i++;
          sheet.insertRule('.bbn-bg-' + n + '{background-color: ' + v + ' !important;}', i);
          i++;
          sheet.insertRule('.bbn-border-' + n + '{border-color: ' + v + ' !important;}', i);
          i++;
          sheet.insertRule('.bbn-color-' + n + '{border-color: ' + v + '; background-color: ' + v + '; color: ' + v + ';}', i);
          i++;
        });
      }
    },

    /**
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
     * @method   selector
     * @todo     Add method description for selector
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    selector(ele) {
      return (typeof el === 'string') ? document.querySelector(el) : el;
    },

    /**
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
     * @method   colorToHex
     * @todo     Add method description for colorToHex
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    colorToHex(color){
      let canvas = document.createElement("canvas").getContext("2d");
	    canvas.fillStyle = color;
	    return canvas.fillStyle;
    },

  });
})(bbn);
