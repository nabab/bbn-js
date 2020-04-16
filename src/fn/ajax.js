/**
 * Routing and Navigation.
 * 
 * These functions are meant to be used in a configured BBN environment,
 * i.e. a single page application where callback functions are already defined
 * and bbn has been initiated through bbn.fn.init.
 * 
 * @file
 * @author BBN Solutions <info@bbn.solutions>
 * @todo Get rid of Axios
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
     * Creates an XHR object and returns the Promise.
     * 
     * Checks the URL, makes an ID, creates a loader, sets the general callbacks,
     * makes a POST if data is given a GET otherwise (GET data should be added
     * directly in the URL), and returns the Promise.
     * 
     * @method   ajax
     * @global   
     * @memberof bbn.fn
     * @example
     * ```javascript
     * // Promise
     * bbn.fn.ajax(
     *   'my/location',
     *   'json',
     *   {id: 7},
     *   d => {
     *     console.log(d);
     *     alert("Success!");
     *   },
     *   err => {
     *     console.log(err);
     *     alert("Failure!");
     *   },
     *   () => {
     *     alert("Request aborted!");
     *   }
     * )
     * ```
     * @example
     * ```javascript
     * // Promise
     * bbn.fn.ajax('my/location')
     *   .then(
     *     d => {
     *       console.log(d);
     *       alert("Success!");
     *     }
     *   )
     *   .catch(
     *     err => {
     *     }
     *   )
     * ```
     * @param    {String}   url      The URL to be requested by XHR
     * @param    {String}   datatype The type of data expected
     * @param    {Object}   data     The data (sent th)
     * @param    {Function} success  
     * @param    {Function} failure  
     * @param    {Function} abort    
     * @returns  {Promise} The Promise created by the generated XHR.
     */
    ajax(url, datatype, data, success, failure, abort){
      if (!url) {
        url = bbn.env.path;
      }
      if ( url ){
        if ( !datatype ){
          datatype = 'json';
        }
        let idURL = bbn.fn.getIdURL(url, data, datatype);
        let loaderObj = bbn.fn.getLoader(idURL);
        //bbn.fn.log("IN AJAX", loaderObj? loaderObj.loader : "NO LOADER")
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
            switch (res.status) {
              case 200:
                if (bbn.fn.isFunction(success)) {
                  success(res.data);
                }
                break;
              default:
                bbn.fn.defaultAjaxErrorFunction(loader, res)
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
        bbn.fn.defaultStartLoadingFunction(url, tst, data, idURL);
        return loader;
      }
    },

    /**
     * Transforms unordered arguments into a configuratiuon object for Ajax shortcut functions.
     * 
     * The final object will have the following arguments: url, obj, datatype, force, successFn,
     * errorFn, abortFn, e, and ele; The rules are:
     * * The first string found is the URL
     * * The second string found is the datatype
     * * The first function is successFn
     * * The second function is errorFn
     * * The third function is abortFn
     * * A boolean true is force
     * * An Event is e
     * * An HTML element is ele
     * * 
     * @method   treat_vars
     * @global   
     * @memberof bbn.fn
     * @param    {*}      args 
     * @returns  {Object} The configuration object
     */
    treat_vars(args){
      var cfg = {}, t, i;
      if ( bbn.fn.isObject(args[0]) && (args.length === 1) ){
        return args[0];
      }
      for (i = 0; i < args.length; i++ ){
        t = typeof(args[i])
        t = t.toLowerCase();
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
        else if (t === 'string') {
          if (!cfg.url) {
            /* Hash */
            if ( args[i].indexOf('#') === 0 || args[i].indexOf(bbn.env.root + '#') === 0 ){
              cfg.url = args[i].substr(bbn.env.root.length);
            }
            /* Link */
            else{
              cfg.url = args[i];
              if ( cfg.url.indexOf(bbn.env.root) === 0 ){
                cfg.url = cfg.url.substr(bbn.env.root.length);
              }
            }
          }
          /* Ajax datatype */
          else {
            cfg.datatype = args[i];
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
      if (!cfg.url && bbn.fn.numProperties(cfg)) {
        cfg.url = bbn.env.path;
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
     * Creates a POST XHR through bbn.fn.ajax then launches bbn.fn.callback with the result.
     * 
     * URL is the only mandatory argument (see treat_vars for the arguments).
     * 
     * @method   post
     * @global   
     * @memberof bbn.fn
     * @returns  {undefined|Promise}
     */
    post(){
      let cfg = bbn.fn.treat_vars(arguments);
      if ( cfg.url ){
        return bbn.fn.ajax(cfg.url, cfg.datatype, cfg.obj, (res) => {
          bbn.fn.callback(cfg.url, res, cfg.successFn, false, cfg.ele);
        }, cfg.errorFn, cfg.abortFn);
      }
    },

    /**
     * Follows a link by sending the corresponding Ajax request and executing bbn.fn.defaultPreLinkFunction.
     * 
     * Once bbn has been initiated this funciton will be triggered every time a link is clicked 
     * (see treat_vars for the arguments).
     * 
     * @method   link
     * @todo     Manage anchors
     * @global   
     * @memberof bbn.fn
     * @returns   
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
        /*
        if ( window.history ){
          bbn.env.historyDisabled = true;
          let state = h.state;
          window.history.replaceState(null, state.title, bbn.env.url);
        }
        bbn.env.historyDisabled = false;
        */
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

    /**
     * @method   window
     * @todo     Add method description for window
     * @global   
     * @memberof bbn.fn
     * @returns   
     */
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
     * Executes a serie of predefined actions once a content has been loaded.
     * 
     * @method   callback
     * @todo     Add method description for callback
     * @global   
     * @memberof bbn.fn
     * @param    {String}      url 
     * @param    {Object}      res 
     * @param    {Function}    fn  
     * @param    {Function}    fn2 
     * @param    {HTMLElement} ele 
     * @returns                
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
     * @method   setNavigationVars
     * @todo     Add method description for setNavigationVars
     * @global   
     * @memberof bbn.fn
     * @param    {String}  url   
     * @param    {String}  title 
     * @param    {Object}  data  
     * @param    {Boolean} repl  
     * @returns            
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

    post_out(action, params, successFn, target) {
      var form=document.getElementById("bbn-form_out"),
          has_bbn=false;
      if (!form) { 
        form = document.createElement('form');
        form.classList.add('bbn-no');
        form.setAttribute('id','bbn-form_out');
        form.setAttribute('method','post');
        form.setAttribute('enctype','multipart/form-data-encoded');
        form.style.display = 'none';
        document.body.appendChild(form);
      }
      form.innerHTML = '';
      form.setAttribute('action',action);
      form.setAttribute('target',target || "_blank");
      if (!params){ 
        params={};
      }
      params = bbn.fn.extend({}, params, true);
      if (!params.bbn) {
        params.bbn='public';
      }
      bbn.fn.add_inputs(form,params);
      form.submit();
      if (successFn) {
        successFn();
      }
    },

    /**
     * Aborts (client side) the XHR corresponding to the given ID if it still exists.
     * 
     * This will throw an error if the loader can't be found.
     * 
     * @method   abort
     * @global   
     * @memberof bbn.fn
     * @param    {String} idURL An ID generated by getIdURL
     * @returns  {undefined}  
     */
    abort(idURL){
      let loader = bbn.fn.getLoader(idURL);
      if (loader && loader.source) {
        loader.source.cancel('Operation canceled by the user.');
      }
      else {
        throw new Error("Impossible to find the loader " + idURL)

      }
    },

    /**
     * Downloads a file with given filename from its content.
     * 
     * Creates a link putting in href a URL Object Blob made of the given content.
     * 
     * @method   downloadContent
     * @global   
     * @memberof bbn.fn
     * @param    {String}        filename 
     * @param    {String}        content     
     * @param    {String}        type     
     * @returns           
     */
    downloadContent(filename, content, type){
      if ( !type ){
        type = bbn.fn.isObject(content) && content.type ? content.type : 'octet/stream';
      }
      else if ( type.indexOf('/') === -1 ){
        type = 'text/' + type;
      }
      let a = window.document.createElement('a');
      a.className = 'bbn-no';
      a.href = window.URL.createObjectURL(bbn.fn.isString(content) ? new Blob([content], {type: type}) : content);
      a.download = filename;
      // Append anchor to body.
      document.body.appendChild(a);
      a.click();
      // Remove anchor from body
      document.body.removeChild(a);
    },

    /**
     * Downloads a file with given filename from a URL.
     * 
     * Gets the file's content as Blob through XHR, then sends it to bbn.fn.downloadContent.
     * 
     * @method   download
     * @global   
     * @memberof bbn.fn
     * @param    {String} url
     * @param    {String} filename 
     * @param    {Object} params     
     * @returns  {undefined}
     */
    download(url, filename, params){
      return bbn.fn.ajax(
        url,
        'blob',
        params || {_bbn_download: 1},
        d => {
          bbn.fn.log(d);
          if (bbn.fn.isBlob(d)) {
            let extension = bbn.fn.fileExt(filename);
            let htmlExtensions = ['php', 'html'];
            if ((d.type !== 'text/html') || htmlExtensions.includes(extension)) {
              bbn.fn.downloadContent(filename, d);
              return;
            }
          }
          bbn.fn.defaultAjaxErrorFunction(e)
        },
        e => {
          bbn.fn.defaultAjaxErrorFunction(e)
        }
      );
    },

    /**
     * Uploads a file synchronously through an XHR indicating progress.
     * 
     * @method   upload
     * @global   
     * @memberof bbn.fn
     * @param {String} url
     * @param {File} file
     * @param {Function} success
     * @param {Function} failure
     * @param {Function} progress
     * @returns  {Promise}
     */
    upload(url, file, success, failure, progress){
      let fn = () => {
        return axios.post(url || bbn.env.path, bbn.fn.objectToFormData(file), {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress(progressEvent) {
            if (progress) {
              let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
              progress(percentCompleted, progressEvent.loaded, progressEvent.total);
            }
          }
        });
      };
      if (!success && !failure) {
        return fn();
      }
      else{
        return fn()
          .then(res => {
            if ( success ){
              bbn.fn.log("SUCCESS", res);
              success(res);
            }
          })
          .catch(err => {
            if ( failure ){
              bbn.fn.log("ERROR", err);
              failure(err)
            }
          });
      }
    },

    /**
     * Finds the loader corresponding to the given unique ID and returns it if found.
     * 
     * The loader is an object with the following properties:
     * * _loader_ is the Promise from the Axios XHR
     * *
     * 
     * @method   getLoader
     * @global   
     * @memberof bbn.fn
     * @example
     * ```javascript
     * 
     * ```
     * @param    {String} idURL The unique ID of the request as used in bbn.env.loaders
     * @returns  {false|Promise} The corresponding Promise if it exists
     */
    getLoader(idURL){
      let idx = bbn.fn.search(bbn.env.loaders, {key: idURL});
      if ( idx > -1 ){
        return bbn.env.loaders[idx];
      }
      return false;
    },

    /**
     * Returns a unique ID for a "loader" based on the URL, the data keys and the datatype.
     * 
     * The routing functions don't allow to send the same request at the same moment,
     * therefore a unique ID is generated to identify them, based on the URL,
     * the keys of the data sent, and the expected returned data type.
     * 
     * @method   getIdURL
     * @global   
     * @example 
     * ```javascript
     * // my/location:59990af62ba3ebdd54a4ebecafc2faa1
     * bbn.fn.getIdURL('my/location', {id: 1, test: 2});
     * ```
     * @example 
     * ```javascript
     * // my/other/location:59990af62ba3ebdd54a4ebecafc2faa1
     * bbn.fn.getIdURL('my/other/location', {id: 1, test: 2});
     * ```
     * @example 
     * ```javascript
     * // my/location:ec60cdf5001208a1fc5fbae05ac94a55
     * bbn.fn.getIdURL('my/location', {data: {a: 1, b: 2}});
     * ```
     * @memberof bbn.fn
     * @param    {String} url      
     * @param    {Object} data     The data sent to the URL
     * @param    {String} datatype The type of data requested (JSON by default)
     * @returns  {String} The unique ID
     */
    getIdURL(url, data, datatype){
      let d = {};
      if (data) {
        let keys = Object.keys(data).sort();
        bbn.fn.each(keys, (n) => {
          if (n.indexOf('_bbn') !== 0) {
            d[n] = data[n];
          }
        });
      }
      return url + ':' + bbn.fn.md5((datatype || 'json') + JSON.stringify(d));
    },

    /**
     * Creates and adds a "loader" object to the property bbn.env.loaders.
     * 
     * @method   _addLoader
     * @global   
     * @ignore   
     * @memberof bbn.fn
     * @param    {String}  idURL  
     * @param    {Promise} prom 
     * @param    {Object}  source 
     * @returns  {Number}  The timestamp (in ms)          
     */
    _addLoader(idURL, prom, source) {
      /** @var {Number} tst Current timestamp */
      let tst = (new Date()).getTime();
      /** @var {String} url The original URL (part of IdURL before : and md5) */
      let url = idURL.substr(0, idURL.length - 33);
      /** @var {Object} loader The loader object */
      let loader = {
        key: idURL,
        url: url,
        loader: prom,
        source: source,
        start: tst
      };
      // Adding the loader in bbn.env.loaders
      bbn.env.loaders.push(loader);
      // Adding an object with this loader info in bbn.env.loadersHistory
      bbn.env.loadersHistory.unshift({
        key: idURL,
        url: url,
        loading: true,
        start: tst,
        error: false,
        abort: false,
        errorMessage: false,
        success: false
      });
      /** @var {Number} idx A pointer starting at the end of  array loadersHistory */
      let idx = bbn.env.loadersHistory.length;
      // Removing elements from the loadersHistory object if their number is higher
      // than bbn.env.maxLoadersHistory
      while (idx && (bbn.env.loadersHistory.length > bbn.env.maxLoadersHistory)) {
        idx--;
        // Not removing the ones still loading
        if (!bbn.env.loadersHistory.loading) {
          bbn.env.loadersHistory.splice(idx, 1);
        }
      }
      return tst;
    },

    /**
     * Deletes a loader and changes its history state after the promise is fullfilled.
     * 
     * @method   _deleteLoader
     * @global   
     * @ignore   
     * @memberof bbn.fn
     * @param    {String}  idURL   The unique ID of the request sent
     * @param    {*}       res     The result of the request
     * @param    {Boolean} isAbort True if the deletion comes from abortion
     * @returns  {Boolean} True if the loader was found
     */
    _deleteLoader(idURL, res, isAbort) {
      let idx = bbn.fn.search(bbn.env.loaders, {key: idURL});
      if (idx > -1) {
        let loader = bbn.env.loaders.splice(idx, 1)[0];
        let history = bbn.fn.get_row(bbn.env.loadersHistory, {key: idURL, start: loader.start});
        if (history) {
          history.loading = false;
          history.duration = (new Date()).getTime() - loader.start;
          if (typeof res === 'string') {
            history.errorMessage = res;
            history.error = !isAbort;
            history.abort = isAbort;
          }
          else if (bbn.fn.isObject(res)) {
            history.success = true;
          }
        }
        return true;
      }
      return false;
    },

  });
})(bbn);
