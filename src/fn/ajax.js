/**
 * Created by BBN on 10/02/2017.
 */
;(function($, bbn){
  "use strict";

  $.extend(bbn.fn, {

    /**     AJAX    */

    ajax(url, datatype, data, id, success, failure){
      if ( $.inArray(id, bbn.env.loaders) === -1 ){
        if ( id ){
          bbn.env.loaders.push(id);
          bbn.fn.defaultStartLoadingFunction(url, id, data);
        }
        var o = {
          url: url,
          async: true,
          data: (typeof(data) !== 'object') ? {} : data,
          /** Makes multipart/form-data work! */
          contentType: false,
          datatype: datatype ? datatype : "json",
          success(res){
            if ( id ){
              bbn.fn.defaultEndLoadingFunction(url, id, data, res);
              var idx = $.inArray(id, bbn.env.loaders);
              if ( idx > -1 ){
                bbn.env.loaders.splice(idx, 1);
              }
            }
            if ( $.isFunction(success) ){
              success(res);
            }
          },
          error(xhr, textStatus, errorThrown){
            //alert("no ok " + textStatus);
            if ( id ){
              bbn.fn.defaultEndLoadingFunction(url, id, data, errorThrown);
              var idx = $.inArray(id, bbn.env.loaders);
              if ( idx > -1 ){
                bbn.env.loaders.splice(idx, 1);
              }
            }
            var ok = 1;
            if ( $.isFunction(failure) ){
              ok = failure(xhr, textStatus, errorThrown);
            }
            if ( ok ){
              bbn.fn.defaultAjaxErrorFunction(xhr, textStatus, errorThrown);
            }
          }
        };
        if ( typeof(data) !== 'object'){
          o.data = {};
        }
        o.data = JSON.stringify(o.data);
        o.type = o.datatype === "json" ? "POST" : "GET";
        return $.ajax(o);
      }
      return false;
    },

    /*
     Operates a link, making use of History if available, and triggering special functions
     The possible arguments are:
     - a link or an absolute path
     - a jQuery element to inject html in
     - a callback to be called instead of defaultLinkFunction - the argument is the Ajax return
     - a callback to be called instead of defaultPostLinkFunction - the argument is the url about to be loaded
     - a callback to be called instead of defaultPreLinkFunction - the argument is the Ajax return
     It will post and expects an object with the following properties:
     - prescript: some javascript to execute before the Ajax call is made
     - script: some script to execute just after the Ajax call
     - postscript: some script to execute just after the defaultPostLinkFunction function
     - new_url: the URL to change
     - siteTitle: The title to put in the title tag
     - error: an error message
     - html: an html string to inject
     */
    link(){
      let cfg = bbn.fn.treat_vars(arguments),
          ok = 1,
          id;
      if ( cfg === true ){
        return true;
      }
      /* If we can't find a correct link we load the current URL */
      if ( !cfg ){
        return bbn.fn.link(window.location.href);
      }
      /* Just executing the javascript if there is */
      if ( cfg.url.indexOf('javascript:') === 0 ){
        return true;
      }
      if ( cfg.url.indexOf('#') === 0 ){
        location.href = bbn.env.url + cfg.url;
        if ( window.history ){
          bbn.env.historyDisabled = true;
          let state = bbn.fn.history.getState();
          window.history.replaceState(null, state.title, bbn.env.url);
        }
        bbn.env.historyDisabled = false;
        return true;
      }
      /* Mail link */
      else if ( cfg.url.indexOf('mailto:') === 0 ){
        bbn.env.ignoreUnload = true;
        window.location.href = cfg.url;
        setTimeout(() => {
          bbn.env.ignoreUnload = false;
        }, 0)
        return false;
      }
      /* Opens an external page in a new window */
      if ( ((cfg.url.indexOf("http://") === 0) || (cfg.url.indexOf("https://") === 0)) &&
        (cfg.url.indexOf(bbn.env.host) !== 0) ){
        if ( cfg.e ){
          cfg.e.preventDefault();
        }
        window.open(cfg.url);
        return false;
      }
      /* The URL is fine so go ahead if something is not already loading */
      else if ( (cfg.url !== bbn.env.params.join("/")) || (cfg.force === 1) ){
        /* If a second callback is defined, it is triggered instead of defaultPreLinkFunction */
        if ( cfg.fn1 ){
          ok = cfg.fn1(cfg.url);
        }
        else if ( bbn.fn.defaultPreLinkFunction ){
          ok = bbn.fn.defaultPreLinkFunction(cfg.url, cfg.force, cfg.ele);
          if ( ok.data !== undefined ){
            $.extend(cfg.obj, ok.data);
            ok = 1;
          }
        }
        if ( ok ){
          if ( ok !== 1 && (typeof ok === 'string') ){
            cfg.url = ok;
          }
          id = bbn.fn.uniqString(cfg.url, cfg.obj ? cfg.obj : {});
          return bbn.fn.ajax(cfg.url, cfg.datatype || "json", cfg.obj, id, function(res){
            if ( res && res.new_url ){
              res.old_path = cfg.url;
              cfg.url = res.new_url;
            }
            else if ( res.url && (cfg.url !== res.url) ){
              res.old_path = cfg.url;
            }
            // If there's nothing in the result, just an empty object, the callback stops here and the URL is not changed
            if ( (typeof(res) === 'object') && (Object.keys(res).length === 0) ){
              return;
            }
            if ( bbn.fn.callback(cfg.url, res, cfg.fn, cfg.fn2, cfg.ele) &&
              res &&
              res.noNav === undefined ){

              // This solution is not very clean (we can't shorten a URL)
              if ( bbn.env.path.indexOf(cfg.url) !== 0 ){
                bbn.fn.setNavigationVars(cfg.url, (res.title ? res.title + ' - ' : '' ) + bbn.env.siteTitle);
              }
            }
          });
        }
      }
      return true;
    },

    window(url){
      var data = {},
          w,
          h,
          fn,
          type;
      $.each(arguments, function(i, v){
        if ( i > 0 ){
          if ( $.isFunction(v) ){
            fn = v;
          }
          else{
            type = (typeof(v)).toLowerCase();
            if ( type === 'object' ){
              data = v;
            }
            else if ( (type === 'string') || (type === 'number') ){
              if ( !w ){
                w = v;
              }
              else if ( !h ){
                h = v;
              }
            }
          }
        }
      });
      bbn.fn.post(url, data, function(d){
        var type2 = (typeof(d)).toLowerCase();
        if ( type2 === 'string' ){
          bbn.fn.popup(d, "Returned...", w ? w : "auto", h ? h : "auto", function(ele){
            bbn.fn.callback(url, d, false, false, ele);
            if ( $.isFunction(fn) ){
              eval(fn(ele, d));
            }
          });
        }
        if ( (type2 === 'object') && d.content){
          bbn.fn.popup(d.content, d.title ? d.title : ' ', w ? w : "auto", h ? h : "auto", function(ele){
            bbn.fn.callback(url, d, false, false, ele);
            if ( $.isFunction(fn) ){
              eval(fn(ele, d));
            }
          });
        }
      });
    },

    callback(url, res, fn, fn2, ele){
      if ( res ){
        var tmp = true,
            t = typeof res,
            isObj = t.toLowerCase() === 'object',
            errTitle;
        if ( isObj && res.prescript ){
          /* var ok can be changed to false in prescript execution */
          eval(res.prescript);
        }
        if ( isObj && res.url === undefined ){
          res.url = url;
        }
        /* Case where a callback is defined */
        if ( fn ){
          tmp = fn(res, ele);
        }
        else{
          tmp = bbn.fn.defaultLinkFunction(res, ele);
        }
        if ( ele && isObj && (res.content !== undefined) ){
          if ( ele.is("input,textarea") ){
            ele.val(res.content);
          }
          else{
            bbn.fn.insertContent(res.content, ele);
          }
        }
        if ( tmp && isObj && res.script ){
          if ( $.isFunction(res.script) ){
            tmp = res.script(res.data ? res.data : {}, ele ? ele : false);
          }
          else{
            tmp = (function(data, ele){
              var r = eval(res.script);
              // As new content may have appear in the container we redo the whole analyze
              bbn.fn.analyzeContent(ele, true);
              return r;
            })(res.data ? res.data : {}, ele ? ele : false);
          }
        }
        /* Case where a callback is defined */
        if ( tmp && fn2 ){
          fn2(res);
        }
        else if ( isObj && bbn.fn.defaultPostLinkFunction ){
          bbn.fn.defaultPostLinkFunction(res, ele);
        }
        if ( tmp && isObj && res.postscript ){
          eval(res.postscript);
        }
        if ( isObj && res.error ){
          errTitle = res.errorTitle || bbn.lng.server_response;
          bbn.fn.alert(res.error, errTitle);
        }
      }
      else{
        bbn.fn.alert(bbn.lng.error, bbn.lng.errorText);
      }
      return tmp;
    },

    /* Set the vars bbn.env.url, bbn.env.url and bbn.env.params, and call bbn.fn.history if loaded
     * If a function is passed it will be executed on return instead of bbn.fn.link
     */
    setNavigationVars(url, title, data, repl){
      bbn.env.old_path = bbn.env.path;
      bbn.env.url = url.indexOf('http') > -1 ? url : bbn.env.root + url;
      bbn.env.path = bbn.env.url.substr(bbn.env.root.length);
      var tmp = bbn.env.path.split("/"), state, obj;
      bbn.env.params = [];
      $.each(tmp, function(i, v){
        v = decodeURI(v.trim());
        if ( v !== "" ){
          bbn.env.params.push(v);
        }
      });
      if ( bbn.fn.history ){
        state = bbn.fn.history.getState();
        obj = {
          url: bbn.env.path,
          old_path: bbn.env.old_path || null
        };
        if ( state.url === bbn.env.url ){
          if ( state.data ){
            obj = $.extend({}, state.data, obj);
          }
          if ( state.title && !title ){
            title = state.title;
          }
          repl = 1;
        }
        if ( !title ){
          title = bbn.env.siteTitle;
        }
        else{
          title = bbn.fn.html2text(title);
          if ( title.indexOf(bbn.env.siteTitle) === -1 ){
            title += ' - ' + bbn.env.siteTitle;
          }
        }
        if ( repl ){
          obj.reload = 1;
          bbn.fn.history.replaceState(obj, title, bbn.env.url);
        }
        else{
          bbn.fn.history.pushState(obj, title, bbn.env.url);
        }
      }
    },

    /* Creates a form and send data with it to a new window */
    post_out(action, params, callback){
      var $form = $("form#bbn-form_out"),
          has_bbn = false;
      if ( $form.length === 0 ){
        $form = $('<form id="bbn-form_out" style="display:none"/>').appendTo(document.body);
      }
      $form.empty().attr({
        method: "post",
        action: action,
        target: "_blank"
      });
      if ( params ){
        for ( var i in params ){
          if ( i === 'bbn' ){
            has_bbn = 1;
            break;
          }
        }
        if ( has_bbn ){
          delete params.bbn;
        }
        bbn.fn.add_inputs($form, params);
      }
      if ( !has_bbn ){
        $form.append($("<input>").attr({
          type: "hidden",
          name: "bbn"
        }).val("public"));
      }
      $form.submit();
      if ( callback ){
        callback();
      }
    },

    /* Posting function (with path rewriting) */
    post(){
      var action,
          datatype,
          callback,
          callback2,
          data,
          change = false,
          ele = false,
          i,
          id;
      for (i = 0; i < arguments.length; i++ ){
        if ( !callback && $.isFunction(arguments[i]) ){
          callback = arguments[i];
        }
        else if ( $.isFunction(arguments[i]) ){
          callback2 = arguments[i];
        }
        /* jQuery object */
        else if ( arguments[i] instanceof jQuery ){
          ele = arguments[i];
        }
        else if ( typeof (arguments[i]) === 'object' ){
          data = arguments[i];
        }
        else if ( $.inArray(arguments[i], bbn.var.datatypes) > -1 ){
          datatype = arguments[i];
        }
        else if ( typeof (arguments[i]) === 'string' ){
          action = arguments[i];
        }
      }
      if ( !datatype ){
        datatype = "json";
      }
      if ( typeof(data) !== 'object' ){
        data = {};
      }
      if ( data.bbn_data_checker === undefined ){
        change = 1;
      }
      if ( !bbn.fn.numProperties(data) ){
        data = {bbn: 'public'};
      }
      /*
       * Automatic check for same field values
       * Would be better to put it in the form's data (jquery data)
       else if ( action && data.bbn_data_checkers ){
       for ( var i in data.bbn_data_checkers ){
       if ( (typeof(data[i]) === 'undefined') || (data[i] !== data.bbn_data_checkers) ){
       change = 1;
       break;
       }
       }
       if ( !change ){
       bbn.fn.callback(action, data, callback);
       }
       }
       */
      if ( change && action ){
        id = bbn.fn.uniqString(action, data);
        return bbn.fn.ajax(action, datatype, data, id, function(res){
          bbn.fn.callback(action, res, callback, false, ele);
          if ( res && res.new_url !== undefined ){
            bbn.fn.setNavigationVars(res.new_url, (res.siteTitle || bbn.env.siteTitle), {}, 1);
          }
        }, function(){
          if ( callback2 ){
            callback2();
          }
        });
      }
    },

    treat_vars(args){
      var cfg = {}, t, i;
      for (i = 0; i < args.length; i++ ){
        t = typeof (args[i]);
        /* Callbacks */
        if ( $.isFunction(args[i]) ){
          if ( cfg.fn && !cfg.fn1 ){
            cfg.fn1 = args[i];
          }
          else if ( cfg.fn && cfg.fn1 && !cfg.fn2 ){
            cfg.fn2 = args[i];
          }
          else if ( !cfg.fn ){
            cfg.fn = args[i];
          }
        }
        /* jQuery object */
        else if ( args[i] instanceof jQuery ){
          cfg.ele = args[i];
        }
        else if ( (args[i] === 1) || (args[i] === true) ){
          cfg.force = 1;
        }
        else if ( t.toLowerCase() === 'string' ){
          /* Hash */
          if ( args[i].indexOf('#') === 0 || args[i].indexOf(bbn.env.root + '#') === 0 ){
            cfg.url = args[i].substr(bbn.env.root.length);
          }
          /* Ajax datatype */
          else if ( $.inArray(args[i], bbn.var.datatypes) > -1 ){
            cfg.datatype = args[i];
          }
          /* Link */
          else{
            cfg.url = args[i];
            if ( cfg.url.indexOf(bbn.env.root) === 0 ){
              cfg.url = cfg.url.substr(bbn.env.root.length);
            }
          }
        }
        /* Event */
        else if ( t.toLowerCase() === 'object' ){
          if ( (args[i].type !== undefined) &&
            (args[i].target !== undefined) ){
            cfg.e = args[i];
          }
          /* HTML Element */
          else if ( !cfg.ele && (args[i].nodeType === 1) ){
            cfg.ele = args[i];
          }
          /* An object to post */
          else if ( t.toLowerCase() === 'object' ){
            cfg.obj = args[i];
          }
        }
      }
      if ( cfg.obj === undefined ){
        cfg.obj = {bbn: "public"};
      }
      return cfg;

    },

    /* Extract a parameter from the URL, for when using key pairs parameters */
    getParam(param, num){
      if ( !num ){
        num = 1;
      }
      var i = $.inArray(param, bbn.env.params),
          res = '';
      if ( i > -1 ){
        for ( var a = 1; a <= num; a++ ){
          if ( bbn.env.params[i + a] ){
            if ( res !== '' ){
              res += '/';
            }
            res += bbn.env.params[i + a];
          }
        }
        return res;
      }
      return false;
    },

    /* Adds or replace if exists a parameter in the URL, for when using key pairs parameters */
    setParam(name, value){
      if ( name && value ){
        var toAdd = value.split("/"),
            i = $.inArray(name, bbn.env.params);
        if ( i > -1 ){
          if ( toAdd.length > 1 ){
            bbn.env.params.splice(i + 1, 1000);
          }
        }
        else{
          toAdd.unshift(name);
        }
        $.each(toAdd, function(idx, val){
          bbn.env.params.push(encodeURI(val));
        });
      }
      return false;
    },

    makeURL(st){
      st = bbn.fn.removeAccents(st).replace(/[^a-zA-Z0-9]/g, '-').replace(/--/g, '').toLowerCase();
      if ( st.charAt(st.length - 1) === '-' ){
        st = st.substr(0, st.length - 1);
      }
      return st;
    },

    /* Extracts the URL from the parameters */
    getURL(){
      return bbn.env.root + bbn.env.params.join("/") + "/";
    },

  })

})(jQuery, bbn);