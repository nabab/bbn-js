/**
 * Created by BBN on 10/02/2017.
 */
;(($, bbn) => {
  "use strict";

  Object.assign(bbn.fn, {

    /**     STYLING     */
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
        });
      }
    },

    cssExists(f ){
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

    animateCss(ele, animationName, callback ){
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(ele).addClass('animated ' + animationName).one(animationEnd, function(){
        if ( typeof callback == 'function' ){ // make sure the callback is a function
          callback.call(this); // brings the scope to the callback
        }
        $(this).removeClass('animated ' + animationName);
      });
      
      /*
      ele.className = 'animated ' + animationName;  
      ele.classList.add('animated ' + animationName);  
      ele.addEventListener( 'animationEnd', e => {
        //for trigger
        if( e.currentTarget.dataset.triggered ) return;
        if ( typeof callback == 'function' ){ // make sure the callback is a function
          callback.call(this); // brings the scope to the callback
        }
        ele.removeClass('animated ' + animationName);        
      });
      */
      
    },

    addStyle(ele, o){
      if ( bbn.fn.isObject(o) ){
        bbn.fn.iterate(o, (v, k) => {
          ele.style[k] = v;
        });
      }
    }

  })

})(jQuery, bbn);