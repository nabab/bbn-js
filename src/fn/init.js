/**
 * Created by BBN on 10/02/2017.
 */
;((bbn) => {
  "use strict";

  Object.assign(bbn.fn, {

    /* Onload functions: keep the var screen width and height up-to-date and binds history if enabled */
    init(cfg){
      let parts;
      if ( !bbn.env.isInit ){
        bbn.env.width = window.innerWidth;
        bbn.env.height = window.innerHeight;
        bbn.env.root = document.baseURI.length > 0 ? document.baseURI : bbn.env.host;
        /* The server's path (difference between the host and the current dir */
        bbn.env.path = bbn.env.url.substr(bbn.env.root.length);
        parts = bbn.env.path.split("/");
        //$.each(parts, function(i, v){
        bbn.fn.each(parts, (v, i) => {  
          v = decodeURI(v.trim());
          if ( v !== "" ){
            bbn.env.params.push(v);
          }
        });
        if ( typeof (cfg) === 'object' ){
         bbn.fn.extend(true, window.bbn, cfg);
        }
        if ( bbn.var.colors ){
          bbn.fn.addColors(bbn.var.colors)
        }
        document.addEventListener("focus", e => {
          bbn.env.focused = e.target;
          bbn.env.last_focus = new Date().getTime();
          bbn.fn.log(e.target);
        });
/*              
        $(window.document).on("click", "a:not(.bbn-no)", function(e){
          if (
            this.href &&
            !this.getAttribute("target")
          ){
            e.preventDefault();
            return bbn.fn.link(this.href);
          }
        }).on("submit", "form:not(.bbn-no,.bbn-form)", function(e){
          bbn.fn.submit(this, e);
        });
*/
        document.addEventListener('click', (e) => {
          let target = e.target;
          if ( target.tagName !== 'A' ){
            let p = target;
            while ( p && (p.tagName !== 'A') ){
              if ( p.tagName === 'BODY' ){
                break;
              }
              p = p.parentNode;
            }
            if ( p && (p.tagName === 'A') ){
              target = p;
            }
            else{
              target = false;
            }
          }
          if ( target && !target.classList.contains('bbn-no') ){
            e.preventDefault();
            return bbn.fn.link(target.href);
          }
        });
        bbn.fn.each(document.querySelectorAll("form:not(.bbn-no), form:not(.bbn-form)"), (ele, i) =>{ 
          ele.addEventListener("submit", e =>{
            bbn.fn.submit(ele, e);
          })  
        }); 


        let doResize;
       // $(window)
       //   .on("resize orientationchange", function() {
        window.addEventListener("resize", bbn.fn.resize);
        window.addEventListener("orientationchange", bbn.fn.resize);
        window.addEventListener("beforeunload", e =>{
            if ( !bbn.env.ignoreUnload ){
              bbn.env.is_checking = 1;
              bbn.env.is_loading = 1;
              e = e || window.event;
              //if ( $(".bbn-tabnav-unsaved").length ){
              if ( document.getElementsByClassName("bbn-tabnav-unsaved").length ){  
                let st = bbn._('You have unsaved data, are you sure you want to leave?');
                // For IE and Firefox prior to version 4
                if (e) {
                  e.returnValue = st;
                }
                // For Safari
                return st;
              }
              else{
                //$(document.body).fadeOut();                
                document.body.style.opacity = 0;
              }
            }
          });

        bbn.fn.resize();

        if ( bbn.fn.history && bbn.fn.history.Adapter ){

          bbn.fn.history.clearAllIntervals();
          //window.localStorage.clear();
          //window.sessionStorage.clear();
          bbn.fn.history.Adapter.bind(window, 'statechange', function(e){
            if ( !bbn.env.historyDisabled ){
              let state = bbn.fn.history.getState();
              if ( state !== undefined ){
                if ( bbn.fn.defaultHistoryFunction(state) ){
                  //bbn.fn.link(state.url.substr(bbn.env.root.length), $.extend({title: state.title}, state.data));
                  bbn.fn.link(state.url.substr(bbn.env.root.length), bbn.fn.extend({title: state.title}, state.data));
                }
                else{
                  if ( bbn.fn.isFunction(state.data.script) ){
                    state.data.script();
                  }
                }
              }
            }
            return false;
          });
        }
        bbn.env.isInit = true;
      }
    }
  })



  var items = document.querySelectorAll('#iwal');
  for (var i = 0, len = items.length; i < len; i++) {
    (function(){
      bbn.fn.init();
      this.innerHTML = '<bbn-button text="Test" icon="fa fa-eye"></bbn-button>';
      new Vue({
        el: this}
      )
    }.bind(items[i]))();
  }

})(bbn);
