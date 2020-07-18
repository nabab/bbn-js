/**
 * Routing and navigation.
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

module.exports = {

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
   * 
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
   * 
   * @param    {String}   url      The URL to be requested by XHR
   * @param    {String}   datatype The type of data expected
   * @param    {Object}   data     The data to send through POST
   * @param    {Function} success  The function to execute if the request goes well (200)
   * @param    {Function} failure  The function to execute if the request goes bad
   * @param    {Function} abort    The function to execute if the request is aborted
   * 
   * @returns  {Promise}  The Promise created by the generated XHR.
   */
  ajax(url, datatype, data, success, failure, abort){
    if (!url) {
      url = bbn.env.path;
    }
    if ( url ){
      if ( !datatype ){
        datatype = 'json';
      }
      let requestId = bbn.fn.getRequestId(url, data, datatype);
      let loaderObj = bbn.fn.getLoader(requestId);
      //bbn.fn.log("IN AJAX", loaderObj? loaderObj.loader : "NO LOADER")
      if ( loaderObj && loaderObj.loader ){
        return loaderObj.loader;
      }
      if ( bbn.env.token ){
        bbn.fn.extend(data || {}, {_bbn_token: bbn.env.token});
      }
      let cancelToken = axios.CancelToken;
      let source = cancelToken.source();
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
          bbn.fn._deleteLoader(requestId, res);
          bbn.fn.defaultEndLoadingFunction(url, tst, data, res);
          switch (res.status) {
            case 200:
              if (bbn.fn.isFunction(success)) {
                success(res.data, res.headers);
              }
              break;
            default:
              bbn.fn.defaultAjaxErrorFunction(loader, res)
          }
          return res;
        })
        .catch((err) => {
          let isAbort = axios.isCancel(err);
          bbn.fn._deleteLoader(requestId, err.message || err.response.data, isAbort);
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
      let tst = bbn.fn._addLoader(requestId, loader, source);
      bbn.fn.defaultStartLoadingFunction(url, tst, data, requestId);
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
   * 
   * If no object is given the _bbn property will be added in order to always post something 
   * and let the bbn server scripts know if a whole DOM is requested or a JSON answer
   *
   * @method   treatAjaxArguments
   * @global   
   * @memberof bbn.fn
   * 
   * @example
   * ```javascript
   * bbn.fn.treatAjaxArguments(['my/script', 'json', {a:1, b:2}, () => bbn.fn.log('Hi'), () => bbn.fn.log('Bye'), () => bbn.fn.log('Argh'), true])
   * // {
   * //   "url": "my/script",
   * //   "datatype": "json",
   * //   "obj": {
   * //     "a": 1,
   * //     "b": 2
   * //   },
   * //   "successFn": () => bbn.fn.log('Hi'),
   * //   "errorFn": () => bbn.fn.log('Bye'),
   * //   "abortFn": () => bbn.fn.log('Argh'),
   * //   "force": true
   * // }
   * 
   * bbn.fn.treatAjaxArguments(['my/script?id=1'])
   * // {
   * //   "url": "my/script?id=1",
   * //   "obj": {
   * //     "_bbn": "public"
   * //   },
   * //   "datatype": "json"
   * // }
   * ```
   * 
   * @param    {*}      args 
   * 
   * @returns  {Object} The configuration object
   */
  treatAjaxArguments(args){
    let cfg = {}, t, i;
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
        cfg.force = true;
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
      cfg.obj = {_bbn: "public"};
    }
    if ( !cfg.datatype ){
      cfg.datatype = "json";
    }
    return cfg;
  },

  /**
   * Creates a POST XHR through bbn.fn.ajax then launches bbn.fn.callback with the result.
   * 
   * URL is the only mandatory argument (see treatAjaxArguments for the arguments).
   * 
   * @method   post
   * @global   
   * @memberof bbn.fn
   * 
   * @example
   * ```javascript
   * bbn.fn.post('logout').then(() => {
   *   document.location.reload();
   * });
   * // With data
   * bbn.fn.post('login', {user: 'tn', pass: 'xxx'}).then((d) => {
   *  if (d && d.success) {
   *    alert('Welcome!');
   *  }
   * });
   * // With the callback as argument
   * bbn.fn.post('login', {user: 'tn', pass: 'xxx'}, (d) => {
   *  if (d && d.success) {
   *    alert('Welcome!');
   *  }
   * }, (err) => {
   *   bbn.fn.log(err);
   *   mySpecialErrorFunction(err);
   * });
   * ```
   * 
   * @returns  {undefined|Promise}
   */
  post(){
    let cfg = bbn.fn.treatAjaxArguments(arguments);
    if ( cfg.url ){
      return bbn.fn.ajax(cfg.url, cfg.datatype, cfg.obj, (res) => {
        bbn.fn.callback(cfg.url, res, cfg.successFn, false, cfg.ele);
      }, cfg.errorFn, cfg.abortFn);
    }
  },

  /**
   * Follows a link and if needed by sending the corresponding Ajax request and executing bbn.fn.defaultPreLinkFunction.
   * 
   * Once bbn has been initiated this function will be triggered every time a link is clicked.  
   * It accepts the same arguments as seen in treatAjaxArguments but will tipically just be called with a URL,
   * the defaultLinkURL functions being in charge of loading the content
   * 
   * @method   link
   * @todo     Manage anchors + returned data unclear
   * @global   
   * @memberof bbn.fn
   * 
   * @example
   * ```javascript
   * // Will open in a new window/tab
   * bbn.fn.link('https://nytimes.com');
   * // Will send an Ajax request
   * bbn.fn.link('my/page');
   * // Will open your default email program
   * bbn.fn.link('mailto:postmaster@test.com');
   * ```
   * 
   * @returns   
   */
  link(){
    let cfg = bbn.fn.treatAjaxArguments(arguments),
        ok = 1;
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
   * Executes a serie of predefined actions once an Ajax request has been done.
   * 
   * Used to treat all the requests functions results, it expects at least url and res to be defined;
   * The following properties from the object res have direct effects:
   * - __url__ {String}: if not given it will be automatically defined by the url parameter;  
   *   __the given URL will be passed to location.href (without reloading)__
   * - __prescript__ {String}: if defined it will attempt to evaluate the code contained in the property
   * - __content__ {String}: if defined and ele is defined too, the string will be inserted as content in the element
   * - __script__ {String}: if defined it will be evaluated, executed, and its result will be returned
   * - __data__ {Object}:
   * - __postscript__ {String}: if defined it will be evaluated and executed
   * - __error__ {String}: if defined it will be trigger bbn.fn.defaultAlertFunction  
   *
   * If fn is defined it will be executed after prescript, otherwise it will be bbn.fn.defaultLinkFunction.  
   * 
   * The rest of the function comes executed if either of these results is not empty.  
   * 
   * If fn2 is defined it will be executed after script, otherwise it will be bbn.fn.defaultPostLinkFunction.
   * 
   * Although not private this function should only be used internally.
   * 
   * @method   callback
   * @todo     Add method description for callback
   * @global   
   * @memberof bbn.fn
   * 
   * @param    {String}      url The URL that has been called
   * @param    {Object}      res The object returned by the request
   * @param    {Function}    fn  A first callback function to execute
   * @param    {Function}    fn2 A second callback function to execute
   * @param    {HTMLElement} ele A DOM element where the content will be inserted
   * 
   * @returns  {*} The result of the main callback function: res.script, fn, or bbn.fn.defaultLinkFunction
   */
  callback(url, res, fn, fn2, ele){
    let tmp = false;
    if ( res ){
      tmp = true;
      let t = typeof res;
      let isObj = t.toLowerCase() === 'object';
      let errTitle;
      if ( isObj && res.prescript ){
        /* var ok can be changed to false in prescript execution */
        try {
          eval(res.prescript);
        }
        catch (e) {
          bbn.fn.error(e.message || '')
        }
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
      bbn.fn.defaultAlertFunction(bbn.lng.errorText, bbn.lng.error);
    }
    return tmp;
  },

  /**
   * Changes the URL and the associated variables and updates the history.
   * 
   * @method   setNavigationVars
   * @todo     Add method description for setNavigationVars
   * @global   
   * @memberof bbn.fn
   * 
   * @example
   * ```javascript
   * // Changing URL
   * bbn.fn.setNavigationVars('my/page', 'My page');
   * // Replacing the previous state
   * bbn.fn.setNavigationVars('my/page/deeper', 'My deeper page', null, true);
   * ```
   * 
   * @param    {String}  url   The URL which will become the location.href
   * @param    {String}  title The title corresponding to the given URL
   * @param    {Object}  data  The data if any
   * @param    {Boolean} repl  If true the history state object will replace the current one, will be added otherwise
   * 
   * @returns  {undefined}
   */
  setNavigationVars(url, title, data, repl) {
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
    let h = window.history;
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

  /**
   * Posts a request in a new window.
   * 
   * @method   postOut
   * @global   
   * @memberof bbn.fn
   * 
   * @example
   * ```javascript
   * bbn.fn.postOut('https://external-service.com/download/account-2019-06.pdf', {clientId: 547912, token: xxx});
   * ```
   * 
   * @param    {String}   url     The url to which the request should be sent
   * @param    {Object}   data    The data to be sent
   * @param    {Function} success A function to execute in case of success
   * @param    {String}   target  The target attribute of the form
   * 
   * @returns  {undefined}  
   */
  postOut(url, data, success, target) {
    let form = document.getElementById("bbn-form_out");
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
    form.setAttribute('action', url);
    form.setAttribute('target', target || "_blank");
    if (!data) {
      data = {};
    }
    data = bbn.fn.extend({}, data, true);
    if (!data.bbn) {
      data.bbn = 'public';
    }
    bbn.fn.addInputs(form, data);
    form.submit();
    if (success) {
      success();
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
   * 
   * @example
   * ```javascript
   * bbn.fn.post('my/script', {a: 1, b: 2});
   * let requestId = bbn.fn.getRequestId('my/script', {a: 1, b: 2});
   * if (requestId) {
   *   bbn.fn.abort(requestId);
   * }
   * ```
   * 
   * @param    {String} requestId An ID generated by getRequestId
   * 
   * @returns  {undefined}  
   */
  abort(requestId){
    let loader = bbn.fn.getLoader(requestId);
    if (loader && loader.source) {
      loader.source.cancel('Operation canceled by the user.');
    }
    else {
      throw new Error("Impossible to find the loader " + requestId);
    }
  },

  /**
   * Downloads a file with given filename from the given content.
   * 
   * Creates a link putting in href a URL Object Blob made of the given content,
   * which can be a canvas, a file or a blob object, or just a string.
   * 
   * @method   downloadContent
   * @global   
   * @memberof bbn.fn
   * 
   * @example
   * ```javascript
   * // Download from a string
   * bbn.fn.downloadContent('myTextFile.txt', 'Just a string\nThat we can save directly in a file', 'text/plain');
   * 
   * // Download from a file
   * let file = new File(["foo"], "foo.txt", {type: "text/plain"});
   * bbn.fn.downloadContent('foo.txt', file);
   * ```
   * 
   * @param    {String}                        filename The name for the downloaded file
   * @param    {HTMLCanvasElement|File|String} content  A Canvas, a File object or a String
   * @param    {String}                        type     The type of file to be made
   * 
   * @returns  {undefined}
   */
  downloadContent(filename, content, type) {
    if (bbn.fn.isCanvas(content)) {
      content.toBlob((blob) => {
        // blob ready, download it
        let a = document.createElement('a');
        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.className = 'bbn-no';
        a.click();
      
        // delete the internal blob reference, to let the browser clear memory from it
        window.URL.revokeObjectURL(a.href);
      }, type || 'image/png');
      return;
    }
    if ( !type ){
      type = bbn.fn.isObject(content) && content.type ? content.type : 'octet/stream';
    }
    else if ( type.indexOf('/') === -1 ){
      type = 'text/' + type;
    }
    let a = window.document.createElement('a');
    a.className = 'bbn-no';
    let src = null;
    if (bbn.fn.isString(content)) {
      src = new Blob([content], {type: type})
    }
    else {
      try {
        src = content;
      }
      catch(e) {
        bbn.fn.log(e);
      }
    }
    a.href = window.URL.createObjectURL(src);
    a.download = filename;
    // Append anchor to body.
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(a.href);
    // Remove anchor from body
    document.body.removeChild(a);
  },

  /**
   * Downloads a file with given filename from a URL.
   * 
   * Gets the file's content as Blob through XHR, then sends it to bbn.fn.downloadContent.  
   * __Attention__ The CORS policy applies
   * 
   * @method   download
   * @global   
   * @memberof bbn.fn
   * 
   * @example
   * ```javascript
   * // Forcing the download of an image
   * bbn.fn.download('/bbn/js-title-black.png');
   * 
   * // Forcing the download of a PDF
   * bbn.fn.download('/files/my-document.pdf');
   * 
   * // Changing the name as it is downloaded
   * bbn.fn.download('/files/f4b1092d71aefd96458feaa71d170f69.pdf', 'myDocument_' + bbn.fn.dateSQL() + '.pdf');
   * ```
   * 
   * @param    {String} url      The URL from which the file will be requested
   * @param    {String} filename The name for the downloaded file (otherwise it will take the basename of the url)
   * @param    {Object} params   A data object to send with the request
   * 
   * @returns  {undefined}
   */
  download(url, filename, params) {
    // We can intervert the arguments
    if (bbn.fn.isObject(filename)) {
      params = filename;
      filename = null;
    }
    return bbn.fn.ajax(
      url,
      'blob',
      params || {_bbn_download: 1},
      (d, headers) => {
        if (!filename) {
          let cd = 'attachment; filename=';
          if (headers && headers['content-disposition'] && (headers['content-disposition'].indexOf(cd) === 0)) {
            filename = headers['content-disposition'].substr(cd.length + 1, headers['content-disposition'].length - cd.length - 2);
          }
          else {
            filename = bbn.fn.baseName(url)
          }
        }
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
   * @todo examples
   * @global   
   * @memberof bbn.fn
   * 
   * @param {String}   url      The URL to which the file should be uploaded
   * @param {File}     file     A File object or an array of data
   * @param {Function} success  A function to execute after success
   * @param {Function} failure  A function to execute after failure
   * @param {Function} progress A function to execute during progress
   * 
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
   * Finds the loader object corresponding to the given unique ID and returns it if found.
   * 
   * The loader is an object representing an Ajax request, with the following properties:
   * * _key_ is the unique ID (_requestId_) of the loader
   * * _url_ is the URL called by the request
   * * _loader_ is the Promise from the Axios XHR
   * * _source_ is the source object for aborting the request
   * * _start_ is the timestamp of the moment the request was sent
   * 
   * @method   getLoader
   * @global   
   * @memberof bbn.fn
   * 
   * @example
   * ```javascript
   * bbn.fn.post('my/script', {a: 1, b: 2});
   * let requestId = bbn.fn.getRequestId('my/script', {a: 1, b: 2});
   * if (requestId) {
   *   let loader = bbn.fn.getLoader(requestId);
   *   console.log(loader);
   *   // {
   *   //    key: "my/script:af27f0e81533ae2bae3c25dea67359f6",
   *   //    url: "my/script",
   *   //    loader: {Promise},
   *   //    source: {token: {CancelToken}, cancel: {Function}},
   *   //    start: 1591804716757
   *   // }
   * }
   * ```
   * 
   * @param    {String} requestId The unique ID of the request as used in bbn.env.loaders
   * 
   * @returns  {false|Object} The corresponding loader Object if it exists, false otherwise
   */
  getLoader(requestId) {
    let idx = bbn.fn.search(bbn.env.loaders, {key: requestId});
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
   * @method   getRequestId
   * @global   
   * 
   * @example 
   * ```javascript
   * // The URL is the first part of the key
   * bbn.fn.getRequestId('my/location', {a: 1, b: 2});
   * // my/location:af27f0e81533ae2bae3c25dea67359f6
   * bbn.fn.getRequestId('my/other/location', {a: 1, b: 2});
   * // my/other/location:af27f0e81533ae2bae3c25dea67359f6
   * ```
   * 
   * @example 
   * ```javascript
   * // A change of value will not change the requestId
   * bbn.fn.getRequestId('my/location', {a: 1, b: 3});
   * // my/location:af27f0e81533ae2bae3c25dea67359f6
   * // A change of key will
   * bbn.fn.getRequestId('my/location', {a: 1, c: 3});
   * // my/location:fde97ca7c6c998c911f4ab481a136d5f
   * ```
   * 
   * @example 
   * ```javascript
   * // Same with nested object
   * bbn.fn.getRequestId('my/location', {data: {a: 1, b: 3}});
   * // my/location:a7a58435275054106c4e4c9fb0cea5e5
   * bbn.fn.getRequestId('my/location', {data: {a: 1, b: 2}});
   * // my/location:a7a58435275054106c4e4c9fb0cea5e5
   * bbn.fn.getRequestId('my/location', {data: {a: 1, c: 3}});
   * // my/location:730da481e30d421afbadf1f1282dabb7
   * ```
   * 
   * @memberof bbn.fn
   * 
   * @param    {String} url      The URL used by the request
   * @param    {Object} data     The data sent to the URL
   * @param    {String} datatype The type of data requested (JSON by default)
   * 
   * @returns  {String} The unique ID
   */
  getRequestId(url, data, datatype){
    let d = [];
    if (data) {
      let fn = (data) => {
        let r = [];
        let keys = Object.keys(data).sort();
        bbn.fn.each(keys, (n) => {
          if (n.indexOf('_bbn') !== 0) {
            r.push(n);
            if (bbn.fn.isObject(data[n])) {
              r.push(fn(data[n]));
            }
          }
        });
        return r;
      }
      d = fn(data);
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
   * 
   * @param    {String}  requestId  
   * @param    {Promise} prom 
   * @param    {Object}  source 
   * 
   * @returns  {Number}  The timestamp (in ms)          
   */
  _addLoader(requestId, prom, source) {
    /** @var {Number} tst Current timestamp */
    let tst = (new Date()).getTime();
    /** @var {String} url The original URL (part of requestId before : and md5) */
    let url = requestId.substr(0, requestId.length - 33);
    /** @var {Object} loader The loader object */
    let loader = {
      key: requestId,
      url: url,
      loader: prom,
      source: source,
      start: tst
    };
    // Adding the loader in bbn.env.loaders
    bbn.env.loaders.push(loader);
    // Adding an object with this loader info in bbn.env.loadersHistory
    bbn.env.loadersHistory.unshift({
      key: requestId,
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
   * 
   * @param    {String}  requestId   The unique ID of the request sent
   * @param    {*}       res     The result of the request
   * @param    {Boolean} isAbort True if the deletion comes from abortion
   * 
   * @returns  {Boolean} True if the loader was found
   */
  _deleteLoader(requestId, res, isAbort) {
    let idx = bbn.fn.search(bbn.env.loaders, {key: requestId});
    if (idx > -1) {
      let loader = bbn.env.loaders.splice(idx, 1)[0];
      let history = bbn.fn. getRow(bbn.env.loadersHistory, {key: requestId, start: loader.start});
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

};
