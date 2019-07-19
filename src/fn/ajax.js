/**
 * Created by BBN on 10/02/2017.
 */
;((bbn) => {
  "use strict";

  axios.defaults.headers.post['Content-Type'] = 'text/json';

  Object.assign(bbn.fn, {

    /**     AJAX    */
    /**
     * @method getLoader
     * @param {String} idURL 
     */
    getLoader(idURL){
      let idx = bbn.fn.search(bbn.env.loaders, {key: idURL});
      if ( idx > -1 ){
        return bbn.env.loaders[idx];
      }
      return false;
    },
    /**
     * @method _makeIdURL
     * @param {String} url 
     * @param {Object} data 
     * @param {String} datatype 
     */
    _makeIdURL(url, data, datatype){
      return url + bbn.fn.md5(datatype + (data ? JSON.stringify(data) : ''));
    },
    /**
     * @method _deleteLoader
     * @param {String} idURL 
     * @param {String|Object} res 
     * @param {Boolean} isAbort 
     * @return {Boolean}
     */  
    _deleteLoader(idURL, res, isAbort){
      let idx = bbn.fn.search(bbn.env.loaders, {key: idURL});
      if ( idx > -1 ){
        let loader = bbn.env.loaders.splice(idx, 1)[0];
        let history = bbn.fn.get_row(bbn.env.loadersHistory, {key: idURL, start: loader.start});
        if ( history ){
          history.loading = false;
          history.duration = (new Date()).getTime() - loader.start;
          if ( typeof res === 'string' ){
            history.errorMessage = res;
            history.error = !isAbort;
            history.abort = isAbort;

          }
          else if ( bbn.fn.isObject(res) ){
            history.success = true;
          }
        }
        return true;
      }
      return false;
    },
    /**
     * @method _addLoader
     * @param {String} idURL 
     * @param {Object} loader 
     * @param {} source 
     * @return {Number}
     */
    _addLoader(idURL, loader, source){
       let tst = (new Date()).getTime()
      bbn.env.loaders.push({
        key: idURL,
        url: idURL.substr(0, idURL.length - 32),
        loader: loader,
        source: source,
        start: tst
      });
      bbn.env.loadersHistory.unshift({
        key: idURL,
        url: idURL.substr(0, idURL.length - 32),
        loading: true,
        start: tst,
        error: false,
        abort: false,
        errorMessage: false,
        success: false
      });
      while ( bbn.env.loadersHistory.length > bbn.env.maxLoadersHistory ){
        bbn.env.loadersHistory.pop();
      }
      return tst;
    },
    /**
     * @method ajax
     * @param {String} url 
     * @param {String} datatype 
     * @param {Object} data 
     * @param {Function} success 
     * @param {Function} failure 
     * @param {Function} abort 
     * @return {Object}
     */
    ajax(url, datatype, data, success, failure, abort){
      if ( url ){
        if ( !datatype ){
          datatype = 'json';
        }
        let idURL = this._makeIdURL(url, data, datatype);
        let loaderObj = bbn.fn.getLoader(idURL);
        if ( loaderObj && loaderObj.loader ){
          return loaderObj.loader;
        }
        if ( bbn.env.token ){
          bbn.fn.extend(data || {}, {_bbn_token: bbn.env.token});
        }
        let CancelToken = axios.CancelToken;
        let source = CancelToken.source();
        let options = {
          responseType: datatype,
          cancelToken: source.token
        };
        let args = [url];
        if ( bbn.fn.isObject(data) && (bbn.fn.numProperties(data) > 0) ){
          args.push(data);
        }
        args.push(options);
        let loader = axios[args.length === 2 ? 'get' : 'post'].apply(axios, args)
          .then((res) => {
            bbn.fn._deleteLoader(idURL, res);
            bbn.fn.defaultEndLoadingFunction(url, tst, data, res);
            if ( bbn.fn.isFunction(success) ){
              success(res.data);
            }
            return res;
          })
          .catch((err) => {
            let isAbort = axios.isCancel(err);
            bbn.fn._deleteLoader(idURL, err.message || err.response.data, isAbort);
            bbn.fn.defaultEndLoadingFunction(url, tst, data, err);
            if ( isAbort ){
              let ok = 1;
              if ( bbn.fn.isFunction(abort) ){
                ok = abort(err.message, url);
              }
              if ( ok ){
                bbn.fn.defaultAjaxAbortFunction(err.message, url);
              }
            }
            else{
              let ok = 1;
              if ( bbn.fn.isFunction(failure) ){
                ok = failure(err.request, err);
              }
              if ( ok ){
                bbn.fn.defaultAjaxErrorFunction(err.request, err.response ? err.response.data : '', err.response ? err.response.status : err);
              }
            }
          });
        let tst = bbn.fn._addLoader(idURL, loader, source);
        bbn.fn.defaultStartLoadingFunction(url, tst, data);
        return loader;
      }
    },

    abort(idURL){
      let last = idURL.substr(-1);
      /** @todo */
      if ( last === '*' ){

      }
      let loader = bbn.fn.getLoader(idURL);
      if ( loader ){
        loader.source.cancel('Operation canceled by the user.');
      }
    },

    /**
     *
     * Operates a link, making use of History if available, and triggering special functions
     * The possible arguments are:
     * - a link or an absolute path
     * - a callback to be called instead of defaultLinkFunction - the argument is the Ajax return
     * - a callback to be called instead of defaultPostLinkFunction - the argument is the url about to be loaded
     * - a callback to be called instead of defaultPreLinkFunction - the argument is the Ajax return
     * It will post and expects an object with the following properties:
     * - prescript: some javascript to execute before the Ajax call is made
     * - script: some script to execute just after the Ajax call
     * - postscript: some script to execute just after the defaultPostLinkFunction function
     * - new_url: the URL to change
     * - siteTitle: The title to put in the title tag
     * - error: an error message
     * - html: an html string to inject
     * @method link
     * @return {Boolean}
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
      if ( cfg.url.indexOf('data:') === 0 ){
        return true;
      }
      if ( cfg.url.indexOf('#') === 0 ){
        location.href = bbn.env.url + cfg.url;
        if ( window.history ){
          bbn.env.historyDisabled = true;
          let state = h.state;
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
      if ( bbn.fn.getLoader(cfg.url) ){
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
        if ( cfg.successFn ){
          ok = cfg.successFn(cfg.url);
        }
        else if ( bbn.fn.defaultPreLinkFunction ){
          ok = bbn.fn.defaultPreLinkFunction(cfg.url, cfg.force, cfg.ele);
          if ( ok.data !== undefined ){
            bbn.fn.extend(cfg.obj, ok.data);
            ok = 1;
          }
        }
        if ( ok ){
          if ( ok !== 1 && (typeof ok === 'string') ){
            cfg.url = ok;
          }
          /** todo Do we keep obj in the unique string or do we make that only one concurrent connection to the same address can occur at the same time? */
          let errSt = bbn._("The Ajax call to") + ' ' + cfg.url + ' ';
          return bbn.fn.ajax(cfg.url, cfg.datatype, cfg.obj, function(res){
            if ( !res ){
              bbn.fn.log(errSt + bbn._("returned no answer"));
            }
            if ( bbn.fn.isObject(res) ){
              // If there's nothing in the result, just an empty object, the callback stops here and the URL is not changed
              if ( (Object.keys(res).length === 0) ){
                bbn.fn.log(errSt + bbn._("returned an empty object"));
              }
              if ( res.new_url ){
                res.old_path = cfg.url;
                cfg.url = res.new_url;
              }
              else if ( res.url && (cfg.url !== res.url) ){
                res.old_path = cfg.url;
              }
            }
            if (
              bbn.fn.callback(cfg.url, res, cfg.successFn, null, cfg.ele) &&
              res.noNav === undefined
            ){
              // This solution is not very clean (we can't shorten a URL)
              if ( bbn.env.path.indexOf(cfg.url) !== 0 ){
                bbn.fn.setNavigationVars(cfg.url, (res.title ? res.title + ' - ' : '' ) + bbn.env.siteTitle);
              }
            }
          }, cfg.errorFn || null);
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
      bbn.fn.each(arguments, function(v, i){
        if ( i > 0 ){
          if ( bbn.fn.isFunction(v) ){
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
            bbn.fn.callback(url, d, fn, false, ele);
          });
        }
        if ( (type2 === 'object') && d.content){
          bbn.fn.popup(d.content, d.title ? d.title : ' ', w ? w : "auto", h ? h : "auto", function(ele){
            bbn.fn.callback(url, d, fn, false, ele);
          });
        }
      });
    },
    /**
     * @method callback
     * @param {String} url 
     * @param {Object} res 
     * @param {Function} fn 
     * @param {Function} fn2 
     * @param {HTMLElement} ele 
     */
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
          if ( bbn.fn.isFunction(res.script) ){
            tmp = res.script(res.data ? res.data : {}, ele ? ele : false);
          }
          else{
            tmp = (function(data, ele){
              var r = eval(res.script);
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
          bbn.fn.defaultAlertFunction(res.error, errTitle);
        }
      }
      else{
        bbn.fn.info("THIS IS AN ERROR");
        bbn.fn.defaultAlertFunction(bbn.lng.errorText, bbn.lng.error);
      }
      return tmp;
    },

    /**
     * Set the vars bbn.env.url, bbn.env.path and bbn.env.params, and call bbn.fn.history if loaded
     * If a function is passed it will be executed on return instead of bbn.fn.link
     * @method setNavigationVars
     * @param {String} url 
     * @param {String} title 
     * @param {Object} data 
     * @param {Boolean} repl 
     */
    setNavigationVars(url, title, data, repl){
      // Current path becomes old path
      bbn.env.old_path = bbn.env.path;
      // URL includes the domain
      bbn.env.url = ['https:/', 'http://'].includes(url.substr(0, 7)) ? url : bbn.env.root + url;
      // Path does not
      bbn.env.path = bbn.env.url.substr(bbn.env.root.length);
      // Params will include each part of the URL
      bbn.env.params = bbn.fn.filter(bbn.env.path.split("/"), (v) => {
        return v !== '';
      });
      // Managing history
      let h = bbn.fn.history();
      if ( h ){
        // Current state
        let state = h.state;
        // Future state
        let  obj = {
          url: bbn.env.path,
          old_path: bbn.env.old_path || null,
          data: data || {}
        };
        // If same URL we replace
        if (state && (state.url === bbn.env.path)) {
          if ( state.data ){
            bbn.fn.extend(obj.data, state.data);
          }
          if ( state.title && !title ){
            title = state.title;
          }
          repl = 1;
        }
        // If no title the global title
        if (!title) {
          title = bbn.env.siteTitle;
        }
        // Otherwise we add the global title at the end
        else {
          title = bbn.fn.html2text(title);
          if (title.indexOf(' - ' + bbn.env.siteTitle) === -1) {
            title += ' - ' + bbn.env.siteTitle;
          }
        }
        // Replacing state
        if ( repl ){
          obj.reload = 1;
          h.replaceState(obj, title, bbn.env.url);
        }
        // Adding state
        else{
          h.pushState(obj, title, bbn.env.url);
        }
      }
    },
    
    download2(url, filename, params){
      var iframe = document.getElementById("bbn-iframe-download"),
          par = '';
      if ( !iframe ){
        iframe = document.createElement('iframe');
        iframe.setAttribute('id', 'bbn-iframe-download');
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }
      if ( bbn.fn.isObject(params) ){
        bbn.fn.iterate(params, (v, k) => {
          par += '&' + k + '=' + v;
        });
      }
      else {
        par = '';
      }
      iframe.setAttribute('src', url + '?filename=' + filename + par);
    },

    /**
     * Creates a form and send data with it to a new window
     * @function post_out
     * @param {String} action 
     * @param {Object} params 
     * @param {Function} successFn 
     * @param {String} target 
     */
    post_out(action, params, successFn, target){
      var form = document.getElementById("bbn-form_out"),
          has_bbn = false;
      if ( !form ){
        form = document.createElement('form');
        form.classList.add('bbn-no');
        form.setAttribute('id', 'bbn-form_out');
        form.setAttribute('method', 'post');
        form.setAttribute('enctype', 'multipart/form-data-encoded');
        form.style.display = 'none';
        document.body.appendChild(form);
      }
      form.innerHTML = '';
      form.setAttribute('action', action);
      form.setAttribute('target', target || "_blank");
      if ( !params ){
        params = {};
      }
      //params = bbn.fn.extend(true, {}, params);
      params = bbn.fn.extend({}, params, true);
      if ( !params.bbn ){
        params.bbn = 'public';
      }
      bbn.fn.add_inputs(form, params);
      form.submit();
      if ( successFn ){
        successFn();
      }
    },

    /**
     * Posting function (with path rewriting) 
     * @method post
     */
    post(){
      let change = false,
          i,
          cfg = bbn.fn.treat_vars(arguments);
      if ( !bbn.fn.numProperties(cfg.obj) ){
        cfg.obj = {bbn: true}
      }
      if ( cfg.obj.bbn_data_checker === undefined ){
        change = 1;
      }
      if ( change && cfg.url ){
        return bbn.fn.ajax(cfg.url, cfg.datatype, cfg.obj, (res) => {
          bbn.fn.callback(cfg.url, res, cfg.successFn, false, cfg.ele);
        }, cfg.errorFn, cfg.abortFn);
      }
    },
    /**
     * @method treat_vars
     * @param {Mixed} args 
     * @return {Object}
     */
    treat_vars(args){
      var cfg = {}, t, i;
      for (i = 0; i < args.length; i++ ){
        t = typeof (args[i]);
        /* Callbacks */
        if ( bbn.fn.isFunction(args[i]) ){
          if ( cfg.errorFn && !cfg.abortFn ){
            cfg.abortFn = args[i];
          }
          if ( cfg.successFn && !cfg.errorFn ){
            cfg.errorFn = args[i];
          }
          else if ( !cfg.successFn ){
            cfg.successFn = args[i];
          }
        }
        /* Force */
        else if ( (args[i] === 1) || (args[i] === true) ){
          cfg.force = 1;
        }
        else if ( t.toLowerCase() === 'string' ){
          /* Hash */
          if ( args[i].indexOf('#') === 0 || args[i].indexOf(bbn.env.root + '#') === 0 ){
            cfg.url = args[i].substr(bbn.env.root.length);
          }
          /* Ajax datatype */
          else if ( bbn.var.datatypes.indexOf(args[i]) > -1 ){
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
            (args[i].target !== undefined) &&
            (args[i].preventDefault !== undefined)
          ){
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
      if ( !cfg.datatype ){
        cfg.datatype = "json";
      }
      return cfg;

    },

    /**
     * Extract a parameter from the URL, for when using key pairs parameters.
     * @method getParam
     * @param {Object}
     * @return {Object}
     */
    getParam(param, num){
      if ( !num ){
        num = 1;
      }
      var i = bbn.env.params.indexOf(param),
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
            i = bbn.env.params.indexOf(name);
        if ( i > -1 ){
          if ( toAdd.length > 1 ){
            bbn.env.params.splice(i + 1, 1000);
          }
        }
        else{
          toAdd.unshift(name);
        }
        bbn.fn.each(toAdd, (val) => {
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

})(bbn);