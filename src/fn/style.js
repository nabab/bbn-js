/**
 * Created by BBN on 10/02/2017.
 */
;((bbn) => {
  "use strict";

  Object.assign(bbn.fn, {

    /**     STYLING     */
    /**
     * Centers the given element and give it absolute position.
     * @method center
     * @param {HTMLElement} ele 
     * @return {HTMLElement}
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
     * Adds the given colors to the available colors in bbn.var.colors and creates the corresponding css classes bbn-(color) and bbn-bg-(color).
     * ```javascript
     * bbn.fn.addColors({fuxia: 'rgb(221, 66, 245)', darkPurple: '#4b0f54'});
     * Creates the css classes 'bbn-fuxia' and 'bbn-darkPurple' for the css property color and the classes 'bbn-bg-fuxia' and 'bbn-bg-darkPurple' for backgrounds.
     * ```
     * @method addColors
     * @param {Object} colors 
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
     * Returns true if the given css selector exists in the styleSheets of the document.
     * ```javascript
     * bbn.fn.cssExists('.bbn-calendar .bbn-calendar-container .bbn-calendar-item-box')
     * // true
     * ```
     * @method cssExists
     * @param {String} f The css selector
     * @return {Boolean}
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
     * Adds the given animation to the given element.
     * @method animateCss
     * @param {HTMLElement} ele 
     * @param {String} animationName 
     * @param {Function} callback 
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
     * Adds the given css rule(s) to the given html element.
     * ```javascript
     * bbn.fn.addStyle($0, {color:'black'});
     * ```
     * @method addStyle
     * @param {HTMLElement} ele 
     * @param {Object} o The rule(s) to add to the element
     */
    addStyle(ele, o){
      if ( bbn.fn.isObject(o) ){
        bbn.fn.iterate(o, (v, k) => {
          ele.style[k] = v;
        });
      }
    }

  });

})(bbn);