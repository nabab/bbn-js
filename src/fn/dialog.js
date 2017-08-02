/**
 * Created by BBN on 10/02/2017.
 */
;(function($, bbn){
  "use strict";

  $.extend(bbn.fn, {

    /**     POP UPS    */

    /* Sends a message in a modal dialog */
    alert: function(){
      if ( window.kendo !== undefined ){
        var msg,
            title,
            width,
            height,
            callbackOpen,
            callbackClose,
            onOpen,
            options = {},
            onClose,
            has_msg = false,
            has_width = false,
            has_callback = false,
            $d;
        for ( var i = 0; i < arguments.length; i++ ){
          if ( !has_msg ){
            msg = arguments[i];
            has_msg = 1;
          }
          else if ( bbn.fn.isDimension(arguments[i]) || (arguments[i] === 'auto') ){
            if ( has_width ){
              height = arguments[i];
            }
            else{
              width = arguments[i];
              has_width = 1;
            }
          }
          else if ( typeof(arguments[i]) === 'string' ){
            title = arguments[i];
          }
          else if ( $.isFunction(arguments[i]) ){
            if ( has_callback ){
              callbackClose = arguments[i];
            }
            else{
              callbackOpen = arguments[i];
              has_callback = 1;
            }
          }
          else if ( typeof(arguments[i]) === 'object' ){
            options = arguments[i];
          }
        }
        if ( !msg ){
          msg = bbn.lng.errorText;
        }
        if ( !title ){
          title = bbn.lng.error;
        }
        if ( !height ){
          height = "auto";
        }
        $d = $('<div/>').appendTo(document.body);
        onOpen = function(){
          bbn.fn.defaultAlertFunction($d);
          if ( callbackOpen ){
            callbackOpen($d);
          }
          bbn.fn.analyzeContent($d);
        };
        onClose = function(){
          if ( callbackClose ){
            callbackClose($d);
          }
        };
        $d.kendoAlert({
          content: msg,
          title: title,
          maxWidth: options.maxWidth !== undefined ? options.maxWidth : bbn.env.width,
          maxHeight: options.maxHeight !== undefined ? options.maxHeight : bbn.env.height,
          width: width,
          height: height,
          open: function(){
            return onOpen($d);
          },
          close: function(){
            return onClose($d);
          }
        });
      }
    },

    confirm: function(){
      if ( window.kendo !== undefined ){
        var msg,
            title,
            width,
            height,
            callbackYes,
            callbackNo,
            options = {},
            has_msg = false,
            has_width = false,
            has_callback = false,
            $d;
        for ( var i = 0; i < arguments.length; i++ ){
          if ( !has_msg ){
            msg = arguments[i];
            has_msg = 1;
          }
          else if ( bbn.fn.isDimension(arguments[i]) || (arguments[i] === 'auto') ){
            if ( has_width ){
              height = arguments[i];
            }
            else{
              width = arguments[i];
              has_width = 1;
            }
          }
          else if ( typeof(arguments[i]) === 'string' ){
            title = arguments[i];
          }
          else if ( $.isFunction(arguments[i]) ){
            if ( has_callback ){
              callbackNo = arguments[i];
            }
            else{
              callbackYes = arguments[i];
              has_callback = 1;
            }
          }
          else if ( typeof(arguments[i]) === 'object' ){
            options = arguments[i];
          }
        }
        if ( callbackYes ){
          if ( !msg ){
            msg = bbn.lng.errorText;
          }
          if ( !title ){
            title = bbn.lng.confirmation;
          }
          if ( !height ){
            height = "auto";
          }
          if ( !callbackNo ){
            callbackNo = function(){};
          }
          $d = $('<div/>').appendTo(document.body);
          $d.kendoConfirm({
            actions: [
              {text: bbn.lng.yes, action: callbackYes},
              {text: bbn.lng.no, action: callbackNo}
            ],
            content: msg,
            title: title,
            maxWidth: options.maxWidth !== undefined ? options.maxWidth : bbn.env.width,
            maxHeight: options.maxHeight !== undefined ? options.maxHeight : bbn.env.height,
            width: width,
            height: height,
            open: function(e){
              bbn.fn.defaultAlertFunction($d);
              bbn.fn.analyzeContent($d);
            }
          });
        }
      }
    },

    closePopup: function(ele){
      if ( bbn._popups.length > 0 ){
        if ( ele && !bbn._popups[bbn._popups.length - 1].has(ele) ){
          return;
        }
        if ( bbn._popups[bbn._popups.length - 1].data("kendoWindow") ){
          bbn._popups[bbn._popups.length - 1].data("kendoWindow").close();
        }
        else if ( bbn._popups[bbn._popups.length - 1].data("dialog") ){
          bbn._popups[bbn._popups.length - 1].dialog("close");
        }
      }
    },

    /* Sends a message in a modal dialog */
    popup: function(){
      var msg,
          title,
          width,
          height,
          callbackOpen,
          callbackClose,
          onOpen,
          options = {},
          onClose,
          has_msg = false,
          has_width = false,
          has_callback = false,
          i, $d, postLoad;
      for ( i = 0; i < arguments.length; i++ ){
        if ( !has_msg ){
          msg = arguments[i];
          has_msg = 1;
        }
        else if ( bbn.fn.isDimension(arguments[i]) || (arguments[i] === 'auto') ){
          if ( has_width ){
            height = arguments[i];
          }
          else{
            width = arguments[i];
            has_width = 1;
          }
        }
        else if ( typeof(arguments[i]) === 'string' ){
          title = arguments[i];
        }
        else if ( $.isFunction(arguments[i]) ){
          if ( has_callback ){
            callbackClose = arguments[i];
          }
          else{
            callbackOpen = arguments[i];
            has_callback = 1;
          }
        }
        else if ( typeof(arguments[i]) === 'object' ){
          options = arguments[i];
        }
      }
      if ( !msg ){
        msg = bbn.lng.errorText;
      }
      if ( !title ){
        title = bbn.lng.untitled;
      }
      if ( !height ){
        height = false;
      }
      $d = $('<div class="bbn-logger"/>').appendTo(document.body);
      if ( callbackOpen ){
        $d.data("bbn_callbackOpen", callbackOpen);
      }
      if ( callbackClose ){
        $d.data("bbn_callbackClose", callbackClose);
      }
      onOpen = function(ele){
        return bbn.fn.makeDeferred().promise().then(function(){
          bbn._popups.push(ele);
          bbn.fn.defaultAlertFunction(ele);
          if ( ele.data("bbn_callbackOpen") ){
            ele.data("bbn_callbackOpen")(ele);
          }
          bbn.fn.analyzeContent(ele, true);
          bbn.fn.resize_popup();
        })
      };
      onClose = function(ele){
        bbn._popups.pop();
        if ( ele.data("bbn_callbackClose") ){
          return ele.data("bbn_callbackClose")(ele);
        }
      };
      if ( window.kendo !== undefined ){
        var cfg = {
          modal: options.modal !== undefined ? options.modal : true,
          title: title || bbn.lng.untitled,
          maxWidth: options.maxWidth !== undefined ? options.maxWidth : bbn.env.width,
          maxHeight: options.maxHeight !== undefined ? options.maxHeight : bbn.env.height,
          width: width,
          pinned: options.pinned !== undefined ? options.pinned : true,
          resizable: options.resizable !== undefined ? options.resizable : true,
          actions: options.actions !== undefined ? options.actions : ["Maximize", "Close"],
          refresh: function(){
            return this.center();
          },
          deactivate: function(){
            return this.destroy();
          },
          activate: function(){
            return onOpen($d);
          },
          resize: function(){
            return this.refresh();
          },
          close: function(){
            return onClose($d);
          }
        };
        if ( height ){
          cfg.height = height;
        }
        $d.html(msg);
        $d.kendoWindow(cfg);
      }
      else{
        $d.append(msg).dialog({
          width: Math.round(bbn.env.width * 0.4),
          resizable: options.resizable !== undefined ? options.resizable : true,
          stack: false,
          modal: options.modal !== undefined ? options.modal : true,
          close: function(){
            onClose($d);
            $(this).dialog("destroy").remove();
          }
        });
        bbn.fn.analyzeContent($d);
        onOpen($d);
      }
    },

    resize_popup: function(){
      var w = bbn.fn.get_popup();
      if ( w ){
        if ( window.kendo !== undefined ){
          var widget = w.data("kendoWindow");
          if ( widget ){
            widget.setOptions({
              maxHeight: bbn.env.height - w.prev().outerHeight(),
              maxWidth: bbn.env.width,
              minWidth: 100
            });
            widget.center();
          }
        }
        w.bbn("propagateResize")
      }
    },

    get_popup: function(){
      if ( bbn._popups.length > 0 ){
        return bbn._popups[bbn._popups.length-1];
      }
      return false;
    },

  })

})(jQuery, bbn);