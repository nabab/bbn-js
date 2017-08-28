/**
 * Created by BBN on 10/02/2017.
 */
;(function($, bbn){
  "use strict";

  $.extend(bbn.fn, {

    /* Onload functions: keep the var screen width and height up-to-date and binds history if enabled */
    init: function(cfg){
      var parts;
      if ( !bbn.env.isInit ){
        if ( window.kendo ){
          window.kendo.culture(bbn_language ? bbn_language : "en_EN");
        }
        else{
          throw new Error("Kendo is undefined");
        }
        bbn.env.width = bbn.env.win.width();
        bbn.env.height = bbn.env.win.height();
        bbn.env.root = $("head base").length > 0 ? $("head base").attr("href") : bbn.env.host;
        /* The server's path (difference between the host and the current dir */
        bbn.env.path = bbn.env.url.substr(bbn.env.root.length);
        parts = bbn.env.path.split("/");
        $.each(parts, function(i, v){
          v = decodeURI(v.trim());
          if ( v !== "" ){
            bbn.env.params.push(v);
          }
        });
        if ( typeof (cfg) === 'object' ){
          $.extend(true, window.bbn, cfg);
        }
        $(window.document).on("focus", "*", function(e){
          bbn.env.focused = $(e.target);
          bbn.env.last_focus = new Date().getMilliseconds();
        }).on("click", "a:not(.bbn-no)", function(e){
          if (
            this.href &&
            !this.getAttribute("target") &&
            window.Modernizr.history &&
            (this.href !== '#')
          ){
            e.preventDefault();
            return bbn.fn.link(this.href);
          }
        }).on("submit", "form:not(.bbn-no,.bbn-form)", function(e){
          bbn.fn.submit(this, e);
        }).keyup(function(e){
          if ( (e.key === 'Esc') || (e.key === 'Escape') ){
            bbn.fn.closePopup();
          }
        });

        var doResize;
        $(window)
          .on("resize orientationchange", function() {
            clearTimeout(doResize);
            doResize = setTimeout(bbn.fn.resize, 0);
          })
          .bind("beforeunload", function(e){
            bbn.env.is_checking = 1;
            bbn.env.is_loading = 1;
            $(document.body).html('<div class="bbn-100"><h1 class="bbn-c" style="position: absolute; bottom: 3em; right: 3em">' + bbn._("Leaving page...") + '</h1></div>');
          })
          .focus(() => {
            bbn.fn.redraw(document.body, true);
          });

        bbn.fn.resize();

        if ( bbn.fn.history ){
          //bbn.fn.history.clearAllIntervals();
          //window.localStorage.clear();
          //window.sessionStorage.clear();
          bbn.fn.history.Adapter.bind(window, 'statechange', function(){
            var state = bbn.fn.history.getState();
            if ( state !== undefined ){
              if ( bbn.fn.defaultHistoryFunction(state) ){
                bbn.fn.link(state.url.substr(bbn.env.root.length), $.extend({title: state.title}, state.data));
              }
              else{
                if ( $.isFunction(state.data.script) ){
                  state.data.script();
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

})(jQuery, bbn);