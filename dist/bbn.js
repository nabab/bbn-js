/*
 *
 *  Appui the App-UI library
 *  Copyright 2012 Thomas Nabet
 *  v 0.2
 *
 *  bbn is a window object containing elements dispatched in 3 sub-objects:
 *  - functions (f),
 *  - variables (v),
 *  - language (l)
 */
(function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  }
  else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
  else {
    global.bbn = factory();
    global.exports = global;
  }
}(
  this,
  () => {
    "use strict";
    /*
    if (axios) {
      axios.defaults.headers.post['Content-Type'] = 'text/json';
    }
    */
    return {
      version: "1.0.1",
      opt: {
        _cat: {}
      },
      /**
       * Translate an expression using the object bbn.lng
       * 
       * @param {String} st 
       * @returns {String}
       */
      _(st) {
        let res = bbn.lng[st] || st;
        let args = Array.prototype.slice.call(arguments, 1);
        if (args.length) {
          let i = 0;
          return res.replace(/\%([d|s])/g, (match, type) => {
            let tmp = args[i++];
            bbn.fn.checkType(tmp, type === 'd' ? 'number' : 'string');
            return tmp;
          });
        }

        return res;
      },
      $(selector, context) {
        if (context && context.querySelectorAll) {
          return context.querySelectorAll(selector);
        }
        return document.body.querySelectorAll(selector);
      },
      _popups: [],
      lng: {
        /* User-defined languages elements */
        select_unselect_all: "Select/Clear all",
        select_all: "Select all",
        search: 'Search',
        loading: 'Loading...',
        choose: 'Choose',
        error: 'Error',
        server_response: 'Server response',
        reload: 'Reload',
        errorText: 'Something went wrong',
        closeAll: "Close all",
        closeOthers: "Close others",
        pin: "Pin",
        arrange: "Arrange",
        cancel: "Cancel",
        unpin: "Unpin",
        yes: "Yes",
        no: "No",
        unknown: "Unknown",
        untitled: "Untitled",
        confirmation: "Confirmation",
        Today: "Today",
        Tomorrow: "Tomorrow",
        Yesterday: "Yesterday"
      },
      app: {
        popups: [],
      }
    };
  }
));



/**
 * Created by BBN on 10/02/2017.
 */
(() => {
  "use strict";
  /*global window */
  /*global jQuery */
  /*global bbn */

  if ('jQuery' in window) {
    jQuery.fn.extend({
      bbn: function (fnName, params){
        var args = [];
        for ( var i = 0; i < arguments.length; i++ ){
          args.push(arguments[i]);
        }
        if ( bbn && bbn.fn && bbn.fn.isFunction(bbn.fn[fnName]) ){
          return this.each(function (){
            var args2 = args.slice();
            args2.splice(0, 1, jQuery(this));
            bbn.fn[fnName].apply(bbn, args2);
          });
        }
      }
    });
    if ( jQuery.fn.reverse === undefined ){
      jQuery.fn.reverse = [].reverse;//save a new function from Array.reverse
    }
  }
})();


/**
 * Created by BBN on 10/02/2017.
 */
;(function(){
  "use strict";

  bbn.env = {
    siteTitle: window.document.title,
    /* This variable should be set to true in debugging mode only */
    logging: false,
    /* Address of the CDN (where this file should be hosted) */
    cdn: '',
    /* Default language */
    lang: 'en',
    host: window.location.protocol + '//' + window.location.hostname,
    url: window.location.href,
    old_path: null,
    /* True when non asynchronous Ajax loads */
    loading: false,
    /* Window width */
    width: 0,
    /* Window height */
    height: 0,
    /* Element currently focused (Element object) */
    focused: false,
    /* Last time user has been active */
    last_focus: (new Date()).getTime(),
    /* Sleep mode (tab or window unfocused */
    sleep: false,
    /**
     *  @var bbn.env.loaders Object where the props are MD5 of data and url while the values are the requests,
     *  for preventing the same call to be made at the same time
     **/
    loaders: [],
    loadersHistory: [],
    maxLoadersHistory: 20,
    /* bbn.env.params is an array of each element of the path */
    resizeTimer: false,
    hashChanged: 0,
    params: [],
    isInit: false,
    isFocused: false,
    timeoff: Math.round((new Date()).getTime() / 1000),
    loggingLevel: 5,
    ignoreUnload: false,
    historyDisabled: false,
    nav: 'ajax'
  };

})();


/**
 * Created by BBN on 10/02/2017.
 */
;(function(bbn){
  "use strict";

  bbn.var = {
    loggers: {
      _num: 0
    },
    /* Usable datatypes through Ajax function */
    datatypes: ['xml', 'html', 'script', 'json', 'jsonp', 'text', 'blob'],
    /* The default value used by the function shorten */
    shortenLen: 30,
    /* Categorizing keyboard map */
    keys: {
      upDown: [33, 34, 35, 36, 38, 40],
      leftRight: [36, 35, 37, 39],
      dels: [8, 46, 45],
      confirm: [13, 9],
      alt: [20, 16, 17, 18, 144],
      numbers: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105],
      numsigns: [109, 110, 189, 190]
    },
    comparators: [">=", "<=", ">", "<", "="],
    operators: ["+", "-", "/", "*"],
    tags: ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'slot', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr'],
    colors: {
	    darkgrey: '#5a6a62',
	    black: '#000000',
	    anthracite: '#454545',
      grey: '#d3d3d3',
	    white: '#ffffff',
	    beige: '#fdfdfd',
	    lightgrey: '#dcdcdc',
	    pastelblue: '#ddebf6',
      cyan: '#00c8f8',
	    blue: '#6e9ecf',
	    indigo: '#3f51b5',
	    navy: '#354458',
	    webblue: '#2196f3',
	    teal: '#009688',
	    turquoise: '#1fda9a',
      pastelgreen: '#e2efda',
	    palegreen: '#ccffcc',
	    green: '#00a03e',
	    olive: '#92b06a',
	    pastelorange: '#fff2cc',
	    yellow: '#fdf200',
	    orange: '#ff9900',
	    pink: '#eb65a0',
	    purple: '#a333c8',
	    red: '#db3340',
	    brown: '#8c6954'
    },
    mockText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    regexp: {
      url: new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$', 'i'),
      ip: new RegExp("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"),
      hostname: new RegExp("^[a-z\\d]([a-z\\d\\-]{0,61}[a-z\\d])?(\\.[a-z\\d]([a-z\\d\\-]{0,61}[a-z\\d])?)*$", 'i'),
    }
  };

})(bbn);



/**
 * Created by BBN on 10/02/2017.
 */
;(function(bbn){
  "use strict";

  Object.assign(bbn.var, {})
})(bbn);


/**
 * Created by BBN on 10/02/2017.
 */
;((bbn) => {
  "use strict";

  bbn.fn = {
    /* Predefined callback functions for bbn.fn.link function */
    defaultAjaxErrorFunction(jqXHR, textStatus, errorThrown){
      bbn.fn.log(textStatus, errorThrown);
    },

    defaultAjaxAbortFunction(message, url){
      bbn.fn.log(message);
    },

    defaultPreLinkFunction(url, ele){
      return true;
    },

    defaultErrorFunction(message){
      bbn.fn.log(message);
    },

    defaultLinkFunction(responseObj, ele){
      return true;
    },

    defaultPostLinkFunction(r){
      return true;
    },

    defaultStartLoadingFunction(url, data){
      return true;
    },

    defaultEndLoadingFunction(url, data, res){
      return true;
    },

    defaultHistoryFunction(obj){
      return true;
    },

    defaultResizeFunction(){
      return true;
    },

    defaultAlertFunction(text, title){
      alert(text);
    },

    defaultConfirmFunction(text, yesFn, noFn){
      let ok = 0;
      if ( confirm(text) ){
        if ( bbn.fn.isFunction(yesFn) ){
          yesFn();
          ok = 1;
        }
      }
      if ( !ok && bbn.fn.isFunction(noFn) ){
        noFn();
      }
    }
  };

})(bbn);


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
      if ((arguments.length === 1) && bbn.fn.isObject(url) && url.url) {
        if (url.abort) {
          abort = url.abort;
        }
        if (url.failure) {
          failure = url.failure;
        }
        if (url.success) {
          success = url.success;
        }
        if (url.data) {
          data = url.data;
        }
        if (url.datatype) {
          datatype = url.datatype;
        }
        url = url.url;
      }

      if (!url) {
        return;
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
        if (datatype === 'text') {
          options.headers = {
            accept: 'text/javascript',
            'Content-Type': 'text/javascript'
          };
        }

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
        t = typeof(args[i]);
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
              cfg.url = bbn.fn.substr(args[i], bbn.env.root.length);
            }
            /* Link */
            else{
              cfg.url = args[i];
              if ( cfg.url.indexOf(bbn.env.root) === 0 ){
                cfg.url = bbn.fn.substr(cfg.url, bbn.env.root.length);
              }
            }
          }
          /* Ajax datatype */
          else {
            cfg.datatype = args[i];
          }
        }
        /* Event */
        else if (args[i] && (t === 'object')) {
          if (args[i] instanceof Event) {
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
            tmp = ((data, ele) => {
              let r = null;
              try {
                r = eval(res.script);
                if (bbn.fn.isFunction(r)) {
                  r = r(data, ele);
                }
              }
              catch (e) {
                bbn.fn.log(e, res);
                bbn.fn.error(bbn.fn.isFunction(e.getMessage) ? e.getMessage() : null);
              }

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
      bbn.env.url = ['https:/', 'http://'].includes(bbn.fn.substr(url, 0, 7)) ? url : bbn.env.root + url;
      // Path does not
      bbn.env.path = bbn.fn.substr(bbn.env.url, bbn.env.root.length);
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
      data = bbn.fn.createObject(data);
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
        //this._deleteLoader(requestId);
        loader.source.cancel('Operation canceled by the user.');
      }
      /*
      else {
        throw new Error("Impossible to find the loader " + requestId);
      }
      */
    },

    /**
     * Aborts (client side) all the XHR using the given URL if it still exists.
     * 
     * This will throw an error if the loader can't be found.
     * 
     * @method   abortURL
     * @global   
     * @memberof bbn.fn
     * 
     * @example
     * ```javascript
     * bbn.fn.post('my/script', {a: 1, b: 2});
     * bbn.fn.post('my/script', {c: 1, d: 2});
     * bbn.fn.abortURL('my/script');
     * ```
     * 
     * @param    {String} requestId An ID generated by getRequestId
     * 
     * @returns  {undefined}  
     */
     abortURL(url) {
      bbn.fn.each(bbn.fn.filter(bbn.env.loaders, {url: url}), a => {
        if (a && a.source) {
          a.source.cancel('Operation canceled by the user.');
        }
        else {
          throw new Error("Impossible to find the loader with URL " + url);
        }
      });
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
              filename = bbn.fn.substr(headers['content-disposition'], cd.length + 1, headers['content-disposition'].length - cd.length - 2);
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
    getRequestId(url, data, datatype) {
      let d = {};
      if (data) {
        bbn.fn.iterate(data, (a, n) => {
          if (n.indexOf('_bbn') === -1) {
            d[n] = a;
          }
        })
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
      let url = bbn.fn.substr(requestId, 0, requestId.length - 33);
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

  });
})(bbn);



/**
 * @file   Forms and data.
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
     * Adds the given data to the given form by inserting hidden inputs.
     * 
     * @method   addInputs
     * @global   
     * @memberof bbn.fn
     * 
     * @example
     * ```javascript
     * let o = {name: "Smith", fname: "John"};
     * bbn.fn.addInputs(document.getElementById('myform'), o, 'bbn');
     * // Will write at the end of the given form:
     * // <input type="hidden" name="bbn[name]" value="Smith">
     * // <input type="hidden" name="bbn[fname]" value="John">
     * 
     * ```
     * 
     * @example
     * ```javascript
     * let o = {
     *   People: [
     *     {name: "Smith", fname: "John"},
     *     {name: "Smith", fname: "Eileen"}
     *   ],
     *   Dates: ['2021-08-25', '2021-09-06']
     * };
     * bbn.fn.addInputs(document.getElementById('myform'), o);
     * // Will write at the end of the given form:
     * // <input type="hidden" name="People[0][name]" value="Smith">
     * // <input type="hidden" name="People[0][fname]" value="John">
     * // <input type="hidden" name="People[1][name]" value="Smith">
     * // <input type="hidden" name="People[1][fname]" value="Eileen">
     * // <input type="hidden" name="Dates[0]" value="2021-08-25">
     * // <input type="hidden" name="Dates[1]" value="2021-09-06">
     * ```
     * 
     * @param    {HTMLElement} form   The form to which the inputs should be added
     * @param    {Object}      params The data which will be added
     * @param    {String}      prefix The optional object's name of the fields in the form
     * @returns  {undefined}
     */
    addInputs(form, params, prefix){
      if ( form && (form.tagName === 'FORM') ){
        let appendToForm = (name, val) => {
          let input = document.createElement('input');
          input.setAttribute('type', 'hidden');
          input.setAttribute('name', name);
          input.setAttribute('value', val);
          form.appendChild(input);
        };
        params = JSON.parse(JSON.stringify(params || {}));
        prefix = prefix || '';
        
        if ( params ){
          bbn.fn.iterate(params, (param, key) => {
            let name = prefix ? `${prefix}[${key}]` : key;
            if ( param instanceof Date ){
              appendToForm(form, name, param.toISOString());
            }
            else if ( param instanceof Array ){
              param.forEach((e, i) => {
                const tempName = `${name}[${i}]`;
                if ( typeof e === 'object' ){
                  bbn.fn.addInputs(form, e, tempName);
                }
                else {
                  appendToForm(tempName, e.toString());
                }
              });
            }
            else if (
              (typeof param === 'object') &&
              !(param instanceof File)
            ){
              bbn.fn.addInputs(form, param, name);
            }
            else {
              appendToForm(name, param.toString());
            }
          });
        }
      }
    },

    /**
     * Submit a form's data through an Ajax request.
     * 
     * It will also prevent the event if given, and execute the given callback, 
     * or look for one in the data-script attribute.
     * 
     * @method   submit
     * @global   
     * @memberof bbn.fn
     * @fires    {*}           
     * @fires    {*}           
     * 
     * @param    {HTMLElement} form The form to submit
     * @param    {Event}       e    The optional submit event - which will be prevented
     * @param    {Function}    fn   An optional callback function
     * 
     * @returns  {*}           
     */
    submit(form, e, fn){
      let url = form.getAttribute("action") || bbn.env.path,
          data;
      if ( url === '' ){
        url = '.';
      }
      
      //if ( (typeof(url) === 'string') && (url.indexOf("http") !== 0 || url.indexOf(window.document.location.hostname) !== -1) && !form.is("[target]") ){
      if ( (typeof(url) === 'string') && (url.indexOf("http") !== 0 || url.indexOf(window.document.location.hostname) !== -1) && !form.getAttribute("target") ){  
        if ( e ){
          e.preventDefault();
        }
        data = bbn.fn.formdata(form);
        if ( data ){
          //$form.attr("action", null);
          form.setAttribute('action', null);          
          //$form.data("bbnSubmit", 1);
          form.dataset.bbnSubmit = 1;
          //var script = $form.data("script");
          let script = form.dataset.script;

          if ( bbn.fn.isFunction(script) ){
            /*$form.data("script", function(d){
              $form.attr("action", url);
              script(d);
            })*/
            form.dataset.script = d =>{
              form.setAttribute("action", url);
              script(d);
            };
          }
          if (!fn) {
            fn = form.getAttribute("data-script");
          }
          if (fn) {
            if (bbn.fn.isString(fn)) {
              fn = eval(fn);
            }
            bbn.fn.post(url, data, fn);
          }
          else{
            bbn.fn.post(url, data);
          }
        }
      }
    },

    /**
     * Returns the value of a form's input, differenciating between checkboxes, radio and other inputs.
     * 
     * @method   fieldValue
     * @global   
     * @memberof bbn.fn
     * @param    {HTMLElement} field The input element
     * 
     * @returns  {Mixed}       The value
     */
    fieldValue(field){
      let  v;
      if ( field.type === "checkbox" ){
        if ( field.checked ){
          v = field.value;
          if ( !v ){
            v = 1;
          }
        }
        else{
          v = 0;
        }
      }
      else if ( field.type === "radio" ){      
        if ( field.checked ){  
          v = field.value;
        }
      }
      else{
        v = field.value;
      }
      return v;
    },

    /**
     * Returns all the data contained in a form as a single object.
     * 
     * @method   formdata
     * @global   
     * @memberof bbn.fn
     * @fires    {*}            
     * 
     * @example
     * ```javascript
     * // <form id="myform">
     * // <input type="hidden" name="bbn[name]" value="Smith">
     * // <input type="hidden" name="bbn[fname]" value="John">
     * // </form>
     * bbn.fn.formdata(document.getElementById('myform'));
     * // {name: "Smith", fname: "John"};
     * 
     * ```
     * 
     * @example
     * ```javascript
     * // <form id="myform">
     * // <input type="hidden" name="People[0][name]" value="Smith">
     * // <input type="hidden" name="People[0][fname]" value="John">
     * // <input type="hidden" name="People[1][name]" value="Smith">
     * // <input type="hidden" name="People[1][fname]" value="Eileen">
     * // <input type="hidden" name="Dates[0]" value="2021-08-25">
     * // <input type="hidden" name="Dates[1]" value="2021-09-06">
     * // </form>
     * bbn.fn.formdata(document.getElementById('myform'));
     * // {
     * //   People: [
     * //     {name: "Smith", fname: "John"},
     * //     {name: "Smith", fname: "Eileen"}
     * //   ],
     * //   Dates: ['2021-08-25', '2021-09-06']
     * // }
     * ```
     * 
     * @param    {HTMLElement} form 
     * 
     * @returns  {Object}
     */
    formdata(form){
      let $inputs = form.querySelectorAll('input[name],select[name],textarea[name],button[name]');
      let res = {};
      let n;
      let v;
      bbn.fn.each($inputs, ( input, i ) => {
        v = bbn.fn.fieldValue(input);
        if ( (v !== undefined) && !input.disabled ){  
          let name = input.name;
          if (
            (name.indexOf("[]") === -1) &&
            (name.indexOf("[") > -1) &&
            (name.indexOf("]") > -1) &&
            (name.lastIndexOf("]") === name.length-1)
          ){
            name = bbn.fn.replaceAll("][", ".", name);
            name = bbn.fn.replaceAll("[", ".", name);
            name = bbn.fn.replaceAll("]", "", name);
          }
          if (
            (name.length > 2) &&
            (name.indexOf("[]") === (name.length - 2))
          ){
            n = bbn.fn.substr(name, 0, name.length - 2);
            if ( res[n] === undefined ){
              res[n] = [];
            }
            res[n].push(v);
          }
          else if ( name.indexOf(".") > -1 ){
            let tmp, parts = name.split(".");
            tmp = res;
            for ( let i = 0; i < parts.length; i++ ){
              if ( res[parts[i]] === undefined ){
                if ( i < (parts.length-1) ){
                  tmp[parts[i]] = {};
                }
                else{
                  tmp[parts[i]] = v;
                }
              }
              tmp = tmp[parts[i]];
            }
          }
          else{
            res[name] = v;
          }
        }
      });
      // return num_changes ? res : false;
      return res;
    },

    /**
     * @method   objectToFormData
     * @todo     Add method description for objectToFormData
     * @global   
     * @memberof bbn.fn
     * @param    {Object|Array|File} obj        
     * @param    {String}            key        
     * @param    {Array}             ignoreList 
     * @returns                      
     */
    objectToFormData(obj, key, ignoreList){
      let formData = new FormData();
      let appendFormData = (data, key = '') => {
        if ( !ignoreList || (bbn.fn.isArray(ignoreList) && !ignoreList.includes(key)) ){
          if ( data instanceof File ){
            formData.append(key, data);
          } 
          else if (bbn.fn.isArray(data)) {
            bbn.fn.each(data, (v, i) => {
              appendFormData(v, key + '[' + i + ']');
            })
          } 
          else if ( bbn.fn.isObject(data) && Object.keys(data).length ){
            bbn.fn.iterate(data, (v, i) => {
              if ( Object.hasOwn(data, i) ){
                appendFormData(v, !key ? i : key + '[' + i + ']');
              }
            })
          } 
          else {
            if ( !bbn.fn.isNull(data) && (data !== undefined) ){
              formData.append(key, data);
            }
          }
        }
      }
      appendFormData(obj, key);
      return formData;
    },

  });
})(bbn);



/**
 * @file   History.
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
     * @method   history
     * @todo     Add method description for history
     * @global   
     * @memberof bbn.fn
     * @returns   
     */
    history(){
      return window.history || false;
    },

  });
})(bbn);



/**
 * @file   Initialization.
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
     * Initializes the library bbn basing on the given configuration object.
     * - Gives to the environment the dimension of the window.innerWidth and window.innerHeight
     * - Defines the server's path (difference between the host and the current dir)
     * - Adds the colors contained in bbn.var.colors to define the css classes for background and colors.
     * - Adds the event listener to the document
     * - Activates the history
     * @method   init
     * @global   
     * @memberof bbn.fn
     * @param    {Object} cfg 
     * @returns 
     */
    init(cfg, force){
      let parts;
      if ( !bbn.env.isInit || force){
        bbn.env.root = document.baseURI.length > 0 ? document.baseURI : bbn.env.host;
        if (bbn.env.root.length && (bbn.fn.substr(bbn.env.root, -1) !== '/')) {
          bbn.env.root += '/';
        }
        if (!bbn.env.isInit && (typeof dayjs !== 'undefined')) {
          bbn.fn.each([
            'advancedFormat',
            'arraySupport',
            'badMutable',
            'buddhistEra',
            'calendar',
            'customParseFormat',
            'dayOfYear',
            'devHelper',
            'duration',
            'isBetween',
            'isLeapYear',
            'isSameOrAfter',
            'isSameOrBefore',
            'isToday',
            'isTomorrow',
            'isYesterday',
            'isoWeek',
            'isoWeeksInYear',
            'localeData',
            'localizedFormat',
            'minMax',
            'objectSupport',
            'pluralGetSet',
            'quarterOfYear',
            'relativeTime',
            'timezone',
            'toArray',
            'toObject',
            'updateLocale',
            'utc',
            'weekOfYear',
            'weekYear',
            'weekday'
          ], plugin => {
            if (window['dayjs_plugin_' + plugin]) {
              dayjs.extend(window['dayjs_plugin_' + plugin]);
            }
          });
        }
        /* The server's path (difference between the host and the current dir */
        if ( typeof (cfg) === 'object' ){
         bbn.fn.extend(true, window.bbn, cfg);
        }
        bbn.env.path = bbn.fn.substr(bbn.env.url, bbn.env.root.length);
        parts = bbn.env.path.split("/");
        //$.each(parts, function(i, v){
        bbn.fn.each(parts, (v, i) => {
          v = decodeURI(v.trim());
          if ( v !== "" ){
            bbn.env.params.push(v);
          }
        });

        if ( bbn.var.colors ){
          bbn.fn.addColors(bbn.var.colors);
        }

        if ( bbn.env.lang && (undefined !== dayjs) ){
          dayjs.locale(bbn.env.lang);
        }

        window.onfocus = () => {
          bbn.env.isFocused = true;
        };
        window.onblur = () => {
          bbn.env.isFocused = false;
          bbn.env.timeoff = Math.round((new Date()).getTime() / 1000);
        };

        document.addEventListener("focusin", e => {
          if (!e.target.classList.contains('bbn-no')) {
            bbn.env.focused = e.target;
          }
          bbn.env.last_focus = (new Date()).getTime();
        });
        document.addEventListener('click', (e) => {
          bbn.env.last_focus = (new Date()).getTime();
          if (bbn.env.nav !== 'ajax') {
            return;
          }
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
          if (target && target.href && !target.target && !target.classList.contains('bbn-no')) {
            e.preventDefault();
            e.stopPropagation();
            bbn.fn.link(target.href);
            return false;
          }
        });
        bbn.fn.each(document.querySelectorAll("form:not(.bbn-no), form:not(.bbn-form)"), (ele, i) =>{ 
          ele.addEventListener("submit", e =>{
            bbn.fn.submit(ele, e);
          })  
        }); 


        window.addEventListener('hashchange', () => {
          bbn.env.hashChanged = (new Date()).getTime();
        }, false);
        window.addEventListener("resize", () => {
          bbn.fn.resize();
        });
        window.addEventListener("orientationchange", () => {
          bbn.fn.resize();
        });

        bbn.fn.resize();
        if (bbn.fn.isMobile()) {
          document.body.classList.add('bbn-mobile');
          if ( bbn.fn.isTabletDevice() ){
            document.body.classList.add('bbn-tablet');
          }
        }

        if (window.history) {
          window.onpopstate = function(e){
            let h = window.history;
            if (!bbn.env.historyDisabled && h) {
              //e.preventDefault();
              let state = h.state;
              if (state) {
                if (bbn.fn.defaultHistoryFunction(state)) {
                  //bbn.fn.link(bbn.fn.substr(state.url, bbn.env.root.length), $.extend({title: state.title}, state.data));
                  bbn.fn.link(state.url, bbn.fn.extend({title: state.title || bbn.env.siteTitle}, state.data || {}));
                }
                else if ( state && state.data && bbn.fn.isFunction(state.data.script) ){
                  state.data.script();
                }
              }
            }
          };
        }
        bbn.env.isInit = true;
        document.dispatchEvent(new Event('bbninit'));

        if (bbn.env.logging) {
          bbn.fn.log("Logging in bbn is enabled");
        }
      }
    },

  });
})(bbn);



/**
 * @file   Locale and formatting.
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
     * Returns the given value to money format basing on the given configuration.
     *
     * @method   money
     * @global
     *
     * @example
     * ``` javascript
     * // "5 856.0 $"
     * bbn.fn.money(5856, false, '$', false, '.' ,false, 1); 
     * ```
     *
     * @memberof bbn.fn
     * @param {String|Number} val The value.
     * @param {Boolean} kilo If the value has to be rendered in kilo.
     * @param {String} currency The currency.
     * @param {String} novalue The string to return if no valid value is given.
     * @param {String} decimal The character to use separate decimals.
     * @param {String} thousands The character to use to separate thounsands.
     * @param {Number} precision The number of decimals places.
     */
    money(val, kilo, currency, novalue, decimal, thousands, precision){
      /*
    money(val, kilo){
      let decimal = ',',
          currency = '€',
          thousands = ' ';
      if ( (isNaN(val) || !val) ){
        return '-';
      }
      if ( isNaN(val) || !val ){
        return 0;
      }
      if ( kilo && val ){
        val = val / 1000;
        if ( currency ){
          currency = 'K' + currency;
        }
      }
      return parseFloat(val).toFixed(0).replace(/./g, function(c, i, a) {
        if ( c === '.' ){
          return decimal;
        }
        return i && ((a.length - i) % 3 === 0) ? thousands + c : c;
      }) + ( currency ? ' ' + currency : '');
    },

       */
      if ( !decimal ){
        decimal = (decimal === undefined) && bbn.env.money && (bbn.env.money.decimal !== undefined) ? bbn.env.money.decimal : '.'
      }
      if ( !currency ){
        currency = (currency === undefined) && bbn.env.money && (bbn.env.money.currency !== undefined) ? bbn.env.money.currency : ''
      }
      if ( !thousands ){
        thousands = (thousands === undefined) && bbn.env.money && (bbn.env.money.thousands !== undefined) ? bbn.env.money.thousands : ' '
      }
      if ( !precision ){
        precision = (precision === undefined) && bbn.env.money && (bbn.env.money.precision !== undefined) ? bbn.env.money.precision : false
      }
      if ( !kilo ){
        kilo = (kilo === undefined) && bbn.env.money && (bbn.env.money.kilo !== undefined) ? bbn.env.money.kilo : false;
      }
      if ( !novalue ){
        novalue = (novalue === undefined) && bbn.env.money && (bbn.env.money.novalue !== undefined) ? bbn.env.money.novalue : false;
      }
      if ( !bbn.fn.isNumber(precision) ){
        precision = kilo ? 3 : 0;
      }
      if (val === 0) {
        let res = val.toFixed(precision).replace('.', decimal);
        if ( currency ){
          res += ' ' + (kilo ? 'K' + currency : currency);
        }
        return res;
      }
      if ( (isNaN(val) || !val) && novalue ){
        return novalue;
      }
      if ( isNaN(val) || !val ){
        return 0 + (currency ? (' ' + currency) : '');
      }
      if ( kilo && val ){
        val = val / 1000;
        if ( currency ){
          currency = 'K' + currency;
        }
      }
      let v = parseFloat(val).toFixed(precision);
      let decimalPosition = 0;
      let decimalIdx = 10000;
      if ( v ){
        decimalIdx = v.indexOf('.');
        if ( decimalIdx <= 0 ){
          decimalIdx = 10000;
        }
        else{
          decimalPosition = v.length - decimalIdx;
        }
      }
      return v.replace(/./g, function(c, i, a) {
        if ( c === '.' ){
          return decimal;
        }
        return i && ((a.length - i - decimalPosition) % 3 === 0) && (i < decimalIdx) ? thousands + c : c;
      }) + (currency ? ' ' + currency : '');
    }
  });
})(bbn);



/**
 * @file   Miscellaneous functions.
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
    checkPropsDetails(obj, props, checkEmpty) {
      let res = {
        error: false,
        result: true
      };
      if (bbn.fn.isString(props)) {
        props = [props];
      }
      if (!bbn.fn.isArray(props)) {
        res.error = bbn._("checkProps must receive a string or an array as props argument");
      }
      if (!bbn.fn.isObject(obj)) {
        res.error = bbn._("checkProps must receive an object as obj argument");
      }
      if (!res.error) {
        let check;
        bbn.fn.each(props, varName => {
          varName = varName.trim().split(':');
          let type = varName[1] || false;
          varName = varName[0];
          if (obj[varName] === undefined) {
            res.error = varName+ ' ' + bbn._("is not defined");
          }
          else if (type) {
            check = 'is' + bbn.fn.substr(type, 0, 1).toUpperCase() + bbn.fn.substr(type, 1).toLowerCase();
            if (bbn.fn[check] === undefined) {
              res.error = type + ' ' + bbn._("is not a valid type");
            }
            else if (!bbn.fn[check](obj[varName])) {
              res.error = varName+ ' ' + bbn._("is not a") + ' ' + type;
            }
          }
          else if (checkEmpty && !obj[varName]) {
            res.error = varName+ ' ' + bbn._("is empty");
          }
          if (res.error) {
            return false;
          }
        });
      }
      if (res.error) {
        res.result = false;
      }
      return res;
    },
    checkProps(obj, props, checkEmpty) {
      return bbn.fn.checkPropsDetails(obj, props, checkEmpty).result;
    },
    checkPropsOrDie(obj, props, checkEmpty) {
      let res = bbn.fn.checkPropsDetails(obj, props, checkEmpty);
      if (res.error) {
        throw new Error(res.error);
      }
      return true;
    },
    /**
     * 
     */
    translate(o, namespace) {
      let lng = namespace ? bbn.lng[namespace.indexOf('_') === 0 ? namespace : '_' + namespace] : bbn.lng;
      bbn.fn.iterate(o, (v, k) => {
        lng[k] = v;
      });
    },
    /**
     * Returns the timestamp of the given seconds if an argument is given, else returns the timestamp of new Date().
     * @method   timestamp
     * @global   
     * @example
     * ```javascript
     * //1587031047918
     * bbn.fn.timestamp();
     * ```
     * @memberof bbn.fn
     * @param    {Number} seconds
     * @returns  {Boolean}            
     */
    timestamp(seconds){
      var r = (new Date()).getTime();
      return seconds ? Math.round(r/1000) : r;
    },

    /**
     * Logs the given arguments in the browser's console.
     * @method   log
     * @global   
     * @example
     * ```javascript
     * //'hello'
     * bbn.fn.log('hello');
     * ```  
     * @memberof bbn.fn
     * @param    {...any} args 
     * @returns       
     */
    log(...args){
      if ( window.console !== undefined ){
        let cfg;
        let level = 5;
        let fn = "log";
        if ( args[0] && (typeof args[0] === 'object') && args[0]._bbn_console_style){
          if (args[0]._bbn_console_mode && bbn.fn.isFunction(console[args[0]._bbn_console_mode])){ 
            fn = args[0]._bbn_console_mode;
          }
          else {
            cfg   = args[0]._bbn_console_style;
            level = args[0]._bbn_console_level;
          }

          args.shift();
        }
        if ( bbn.env.loggingLevel >= level  ){
          let i = 0;
          while (i < args.length ){
            let t = typeof args[i];
            if ( (t === 'string') || (t === 'number') ){
              window.console[fn]("%c %s ", cfg, args[i]);
            }
            else{
              window.console[fn](args[i]);
            }
            i++;
          }
        }
      }
      return this;
    },

    /**
     * Logs the given argument in the browser's console highlighting it with a yellow background and red color.
     * @method   warning
     * @global   
     * @example
     * ```javascript 
     * bbn.fn.warning('whatever you want to log as a warning');
     * ```
     * @memberof bbn.fn
     * @param    {...any} args 
     * @returns  
     */
    warning(message) {
      const args = ["BBN: " + message];
      args.unshift({
        _bbn_console_mode: "warn",
        _bbn_console_level: 2,
        _bbn_console_style: "color: #E64141; background: #F7E195; font-size: 14px"
      });
      bbn.fn.log.apply(this, args);
      return this;
    },

    /**
     * Throws an error.
     * @method   error
     * @global   
     * @ignore
     * ``` javascript
     * bbn.fn.error('I log this error in console with a red background')
     * ```
     * @memberof bbn.fn
     * @param    {String} errorMsg
     * @returns    
     */
    error(errorMsg){
      if (arguments.length > 1) {
        const args = [];
        for (let i = 1; i < arguments.length; i++) {
          args.push(arguments[i]);
        }

        args.unshift({
          _bbn_console_mode: "error",
          _bbn_console_level: 1,
          _bbn_console_style: "color: #E64141; background: #F7E195; font-size: 14px"
        });
        bbn.fn.log.apply(this, args);
      }

      throw new Error(errorMsg);
    },

    /**
     * Logs the given argument in the browser's console highlighting it with a green background.
     * @method   happy
     * @global   
     * @example 
     * ``` javascript
     * bbn.fn.happy('I want to log the success of my function');
     * ```
     * @memberof bbn.fn
     * @param    {...any} args 
     * @returns  
     */
    happy(...args){
      args.unshift({
        _bbn_console_level: 3,
        _bbn_console_style: "color: white; background: green; font-size: 18px;"
      });
      bbn.fn.log.apply(this, args);
      return this;
    },

    /**
     * Logs the given argument in the browser's console highlighting it with a blue background.
     * @method   info
     * @global   
     * @memberof bbn.fn
     * @param    {...any} args 
     * @returns  {*}      
     */
    info(...args){
      args.unshift({
        //_bbn_console_mode: "info",
        _bbn_console_level: 4,
        _bbn_console_style: "color: #EEE; background: blue; font-size: 12px;"
      });
      bbn.fn.log.apply(this, args);
      return this;
    },

    /**
     * @method   stat
     * @todo     Add method description for stat
     * @global   
     * @ignore
     * @memberof bbn.fn
     * @param    {*} returnStat 
     * @returns  {*} 
     */
    stat(returnStat){
      return;
      if ( bbn.env.logging ){
        var logs = bbn.var.loggers;
        for ( var i = 0; i < arguments.length; i++ ){
          var a = arguments[i],
              type = typeof(a);
          if ( (type === 'boolean') || (type === 'undefined') ){
            break;
          }
          else{
            if ( type === 'object' ){
              a = bbn.fn.getPath(a);
            }
            else{
              a = a.toString();
            }
            if ( !logs[a] ){
              logs[a] = {
                _num: 0,
              };
            }
            logs[a]._num++;
            logs = logs[a];
          }
        }
        if ( arguments[arguments.length-1] === true ){
          var treat = function(obj){
            var v = {};
            for ( var n in obj ){
              if ( n.indexOf('_') !== 0 ){
                v[n + '(' + obj[n]._num + ')'] = treat(obj[n]);
              }
            }
            return v;
          };
          return treat(logs);
        }
        if ( arguments[arguments.length-1] === false ){
          for ( var n in logs ){
            delete logs[n];
          }
          logs._num = 0;
          return ;
        }
        return returnStat;
      }
    },

    /**
     * @method   getPath
     * @todo     Add method description for getPath
     * @global   
     * @ignore
     * @memberof bbn.fn
     * @returns  {*} 
     */
    getPath(element){
      let path,
          //node = $(element),
          node = element,
          done = false;

      while (node.length ){
        //let realNode = node[0],
        let realNode = node,
            name = realNode.localName;

        if ( !name ) break;
        if ( realNode === document.body ) break;

        if ( realNode.id ){
          return '#' + realNode.id;
        }

        if ( !done ){
          if ( realNode.className && (realNode.className !== ' ') ){
            name += ('.' + bbn.fn.replaceAll(" ", ".", bbn.fn.replaceAll("  ", " ", realNode.className)));
          }
          done = 1;
        }
        //var parent = node.parent(),
        let parent = node.parentNode,
            //sameTagSiblings = parent.children(name);
            sameTagSiblings = parent.children.filter( val => {
              return val.tagName === name;
            });
      
        if ( sameTagSiblings.length > 1 ){

          //var allSiblings = parent.children(),
          let allSiblings = parent.children,
              //index = allSiblings.index(realNode) + 1;
              index = allSiblings.indexOf(realNode) + 1;

          if ( index > 1 ){
            name += ':nth-child(' + index + ')';
          }
        }

        path = name + (path ? '>' + path : '');
        node = parent;
      }

      return path;
    },

    checkType(value, type, msg, ...logs) {
      let ok = false;
      if (!bbn.fn.isArray(type)) {
        type = [type];
      }
      bbn.fn.each(type, t => {
        if (t === String) {
          t = 'string'
        }
        else if (t === Number) {
          t = 'number'
        }
        else if (t === Array) {
          t = 'array'
        }
        else if (t === Boolean) {
          t = 'boolean'
        }
        else if (t === Object) {
          t = 'object'
        }
        else if (t === Function) {
          t = 'function'
        }
        if (bbn.fn.isFunction(t)) {
          if (value instanceof t) {
            ok = true;
            return false;
          }
        }
        else if (!bbn.fn.isString(t) || !bbn.fn.isFunction(bbn.fn['is' + bbn.fn.correctCase(t)])) {
          bbn.fn.error(`The type ${t} is not recognized`);
        }
        else if (bbn.fn['is' + bbn.fn.correctCase(t)](value)) {
          ok = true;
          return false;
        }
      });
    
      if (!ok) {
        bbn.fn.log(["Value given", value, typeof value]);
        if (logs.length) {
          bbn.fn.log(logs)
        }

        bbn.fn.error((msg ? msg + ' - ' : '') + bbn._(`The value should be a %s`, type.join(bbn._(" or a "))));
      }
    },

    /**
    * Return all the attributes of an HTML element
    * @return {Object}
    */
    getAttributes(ele) {
      if (!ele.getAttributeNames) {
        bbn.fn.error("The element is not a proper HTML Element");
      }

      let res = Object.create(null);
      ele.getAttributeNames().forEach(name => {
        res[name] = ele.getAttribute(name);
      });
      return res;
    },


    /**
    * Check if the property contain sizing
    * @return {Boolean}
    */
    isPropSize(name) {
      let isTrue = false;
      bbn.fn.each(['width', 'height', 'gap', 'margin', 'padding', 'top', 'left', 'right', 'bottom'], a => {
        if (name.indexOf(a) !== -1) {
          isTrue = true;
          return false;
        }
      });

      return isTrue;
    },

    /**
     * Creates a cookie and assigns it to document.cookie.
     * @method   setCookie
     * @global   
     * @example 
     * ``` javascript
     * bbn.fn.setCookie('lang', 'en', 2);
     * ```
     * @memberof bbn.fn
     * @param    {String} name  The name of the cookie.
     * @param    {String} value The value of the cookie.
     * @param    {Number} days  The days before expiration of the cookie.
     * @returns        
     */
    setCookie(name, value, days){
      let expires = "";
      if ( days ){
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
      }
      let st = escape(JSON.stringify({value: value}));
      document.cookie = name + "=" + st + expires + "; path=/";
    },

    /**
     * If it exsists returns the cookie corresponding to the given name.
     * 
     * @method   getCookie
     * @example 
     * ``` javascript
     * // 'en'
     * bbn.fn.getCookie('lang');
     * ``` 
     * @global   
     * @memberof bbn.fn
     * @param    {String} name 
     * @returns           
     */
    getCookie(name){
      let nameEqual = name + "=";
      let ca = document.cookie.split(';');
      for ( let i = 0; i < ca.length; i++ ){
        let c = ca[i];
        while ( c.charAt(0) == ' ' ){
          c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEqual) == 0){
          let st = c.substring(nameEqual.length,c.length);
          if ( st ){
            return JSON.parse(unescape(st)).value;
          }
        }
      }
      return null;
    },

    /**
     * Erase the cookie corresponding to the given name;
     * 
     * @method   eraseCookie
     * @global   
     * @example 
     * ``` javascript
     * // 'en'
     * bbn.fn.erase('lang');
     * ``` 
     * @memberof bbn.fn
     * @returns  {*} 
     */
    eraseCookie(name){
      document.cookie = name+'=; Max-Age=-99999999;';
    },

    /**
     * Returns a promise having the event's data as argument.
     * @method   getEventData
     * @global   
     * @example 
     * ``` javascript
     * let type = e.type;
     *   bbn.fn.getEventData(e).then((data) => {
     *     bbn.fn.log("DATA FROM " + type, data);
     *   });
     * ```
     * @memberof bbn.fn
     * @returns  {Promise} 
     */
    getEventData(e){
      let dt = e.dataTransfer || e.clipboardData;
      let t = dt.getData('Text');
      let res = {raw: t, files: [], str: []};
      let p = new Promise((ok, err) => {
        let done = !(dt instanceof DataTransfer);
        if (!t && e.type === 'copy') {
          let sel = window.getSelection();
          res.raw = sel.toString();
          let html = bbn.fn.getHTMLOfSelection();
          res.str.push({
            type: 'text/plain',
            data: res.raw
          });
          if (html !== res.raw) {
            res.str.push({
              type: 'text/html',
              data: html
            });
          }
          else if (res.raw.trim().indexOf('<') === 0) {
            res.str.push({
              type: 'text/html',
              data: "<meta charset='utf-8'><code style=\"white-space: pre; font-family: 'Courier New', sans-serif\">\n" + res.raw + "\n</code>"
            });
          }
          done = true;
          ok(res);
        }
        if ( !done ){
          let strings = [];
          let num = dt.items.length;
          bbn.fn.each(dt.items, (item, idx) => {
            let kind = item.kind;
            let type = item.type;
            if (kind === 'file') {
              let cp = dt.files[idx];
              if (!type && cp.name) {
                let bits = cp.name.split('.');
                type = bits[bits.length-1];
              }
              let name = cp ? cp.name : bbn._('untitled');
              let size = cp ? cp.size : null;
              let lastModified = cp ? cp.lastModified : null;
              let blob = item.getAsFile();
              if (blob) {
                done = true;
                num--;
                res.files.push({
                  type: type,
                  data: blob,
                  name: name,
                  size: size,
                  mdate: lastModified
                });
                strings.push(name);
                if ( !num ){
                  if (!res.raw) {
                    res.raw = strings.join(", ");
                  }
                  ok(res);
                }
              }
              else{
                appui.error(bbn._("Impossible to read the file") + ' ' + name);
              }
            }
            else{
              done = true;
              item.getAsString((data) => {
                num--;
                res.str.push({
                  type: type,
                  data: data
                });
                if (type === 'text/plain') {
                  strings.push(name);
                }
                if ( !num ){
                  if (!res.raw) {
                    res.raw = strings.join(", ");
                  }
                  ok(res);
                }
              });
            }
          });
        }
        if ( !done ){
          setTimeout(() => {
            ok(res);
          });
        }
      });
      return p;
    },

    /**
     * @method   arrayBuffer2String
     * @todo     Add method description for ab2str
     * @global   
     * @ignore
     * @memberof bbn.fn
     * @returns  {*} 
     */
    arrayBuffer2String(buf) {
      return String.fromCharCode.apply(null, new Uint16Array(buf));
    },

    /**
     * @method   string2ArrayBuffer
     * @todo     Add method description for str2ab
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     * @ignore
     */
    string2ArrayBuffer(str) {
      var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
      var bufView = new Uint16Array(buf);
      for (var i=0, strLen=str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
      }
      return buf;
    },

    /**
     * @method   getHTMLOfSelection
     * @todo     Add method description for getHTMLOfSelection
     * @global   
     * @memberof bbn.fn
     * @ignore
     * @returns  {*} 
     */
    getHTMLOfSelection() {
      let range;
      if (document.selection && document.selection.createRange) {
        bbn.fn.log("METHOD 1");
        range = document.selection.createRange();
        return range.htmlText;
      }
      else if (window.getSelection) {
        let selection = window.getSelection();
        if (selection.rangeCount > 0) {
          range = selection.getRangeAt(0);
          bbn.fn.log("RANGE", range);
          let clonedSelection = range.cloneContents();
          bbn.fn.log("clonedSelection", clonedSelection);
          let div = document.createElement('div');
          div.appendChild(clonedSelection);
          return div.innerHTML;
        }
        else {
          return '';
        }
      }
      else {
        return '';
      }
    },

    /**
     * Copies to the clipboard the value of the given string. 
     * @method   copy
     * @global   
     * ``` javascript
     * let myVal = 'the value you want to copy to clipbord';
     * bbn.fn.copy(myVal);
     * 
     * ```
     * @memberof bbn.fn
     * @param {String} st The string to copy.
     * @returns  
     */
    copy(st){
      return new Promise(resolve => {
        if (st) {
          if (navigator && navigator.clipboard) {
            if (st instanceof Blob) {
              navigator.clipboard.write([new ClipboardItem({[st.type.toString()]: st})]).then(() => {
                resolve();
              });
            }
            else if (bbn.fn.isObject(st) && bbn.fn.isFunction(st.toBlob)) {
              st.toBlob(blob => {
                navigator.clipboard.write([new ClipboardItem({[blob.type.toString()]: blob})]).then(() => {
                  resolve();
                });
              })
            }
            else {
              navigator.clipboard.writeText(st);
              resolve();
            }
            return;
          }
    
          let input = document.createElement("textarea");
          input.style.opacity = 0;
          input.value = st;
          document.body.appendChild(input);
          input.select();
          document.execCommand('copy');
          document.body.removeChild(input);
          resolve();
        }

        resolve();
      })
    },

    /**
     * Draws the given html image nto a canvas.
     * @method   imageToCanvas
     * @example
     * ``` javascript
     * //<canvas width="60" height="32"></canvas>
     * bbn.fn.imageToCanvas('<img src="path/myImage.png">');
     * ```
     * @global   
     * @memberof bbn.fn
     * @param {HTMLElement} img
     * @returns  
     */
    imageToCanvas(img) {
      let canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d").drawImage(img, 0, 0);
    
      return canvas;
    },

    /**
     * Returns a canvas in a HTML element img
     * @method   canvasToImage 
     * @global   
     * ``` javascript
     * //<img src="data:image/png;base64,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">
     * let a = '<canvas width="60" height="32"></canvas>';
     * bbn.fn.canvasToImage(a);
     * ```
     *
     * @memberof bbn.fn
     * @param {canvas} canvas 
     * @returns  {HTMLElement} 
     */
    canvasToImage(canvas) {
      let img = new Image();
      img.src = canvas.toDataURL("image/png");
      return img;
    },

    /**
     * Returns the tag for the image in base64
     * @method   imgToBase64
     * @global   
     * ``` javascript
     * //<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAgCAYAAABO6BuSAAAUzUlEQVRYRz2ZWXBc95Xef/f27Xtv7w000AsaADdwh0iKlETRtrbYpi3ZsZNUJaOZcs2MPQ95SSaVrSqVqrykUqmkKp4lNfMwM/Ikk1lijxyrrLEkW5QtS6LMVQt3guAGEGiggUbv611T54+xu6rJJtG493/O+b7vfOdc7RuxUmhGoxiageYF6B5E0dFCndD30cKAqGXg+z66pWOnEnRHPYpTBV7+1m+hj2X5P//7L+jeqRBrjUj1QoqRNLrvE8XCwyCMRhgRMHJHRAiIYxJDJ4K8Qhz5GWBkEhC3WFlbYVdhGqfeJuVHsQPUdzU0PM3CsyJ4tklogE2A6zpomkY0ZhOJ6nhaSBjRiVombuCqu/zypf3PL/yTMBKJoPsa/sjBH3rgBwQjF9d16TRbGJbBYNij2WsT6iFDd8gLp7/Ar3/zN/GSMVpbLb73R6/QWVylGMQY1hpMmuOMHBcHjT4OHpCIJcjEEliBRtAf4DsOqWSGdr/HyAwZRaA56hOPx0noUZIYxAYhtgemrxNqOkHE+FXAkgVTCwlch1CPqMJEDANfRwVsmFGCwCMMQ/UOggDtR//6P4a6rqP7EDgumgdaCHg+nuOqyvphQK/XoTPsEUvY1DsNTn/5y+w8uAd9PKO+f/uDy7z//TcZrdSwHQ2n45BIp3ElYF8C1ojqEXAc/N6QGBFSsTgjb8Sm28C0UoxPFbDTGY7Mz3Pr8qe0KxtMECPmhBiehh6CF4ngRyO4UR1NA9330AMfLRJVAUuQEqwe3f4ssW0H620H/Np/+E+hwEEPQgIvwAx1LIE4xt9nRyMMfQICvMAlOZaiUq3w+S9+ga1+m5nD++i02+QzBRZ++iFnX38bYwROb0TUjrHV6+GGPm4YbCfS8dAdh1hgYBkRuqMBVirGrkP7OXj0KOUds8QnClx6/U0+fPMM8UFIwgXLEwpohJoEbBAYusJ5OmKhE4D8qQUEoYaPJMBAi0DMToAWCEkVqrXv/5f/HIZBgDdycEceJjp21CSiRQh9D0KNqGmgR3Vanaa6SavT4uXf+HXabp9qr0EymSQVmhST41z78BKfXviUfL5IbWuLmX1zdAd9esOBuu5kKosVQm2pwtLSQ1zdZ+7wQeYOHSBXKJJIJakuV1i+vcjP/t8bUOuRcMB2NSIBBBoEuo6no3ib0AzMiIFhmEQimqq0YUYwTVv9WxKhS24ExbqO9vZ3/vhXAXuOCI1U2EYHfNdTMBTOur5DvVUnYuhKGL74pdMMQ5fYWBJDkrFeRxv6dDebvP3jM3z80RXFpcT4OC4BumEwOZZlZ2GKQnacWKDjuyP2zB8gVyqgm1Fc31fJ21qvkcLi0jvv0bhbwR4FRPoefn/E0BkxkLfr4PshfndEzDAxDEFkgE+oPkej23CWZAiktVBTXNXO/fCvBGiEfoAWaOoLZsRUwY5GI9zhSAmWF3pKZS0rSiwZozhVUhCPxqNAQC41xvK9hwollco6r73+JnrMZBh4dIcDBSdLbt4dYnge+6d3Mj9/iGe++CxO4NF3XFw/JJMZI5fIovVd7l25QT6awRz66AMfdzBkNBhuB+06eJ5HMPQx9CiO49BsNmk3mgyHQ/UzeacSSXwRz6HLyBmgXfjxdxWHJQMiChHNUH8PekP6vY66kG2bZLMZVeXBaEgqlSCejpPPT7CyusRseUrdtFarce4XF1l8+JBWr8+Z994lm5+gVt/Ctm1mSmVioQ6DIY8fOMwLzz9DOpdR7SU7llO867UH7JiaZfHGAr2NJtlIDNuPIJgT9ClYahqBgiuM+h521FKf+/2+SoigU4mVD51Oh2F/QLfVpdtuoV1977VQSi6V6Xe6DPtD1ZaEE9GIQSqVYqu+iWWZmKYhlFZipkU1ds6WWVpcIJtJEYsnGToe12/eYml1lbfefYfKxiaT5RJ3794nk0kxv28fq/cesnuqzKkTT1IuFnj+hc8qfnt+oEROojcjUT4+9zFxw8bWTEbtHk5/SMKyFVRFQwS6k/kCth0nYpjYpqUq22q0MXSdRCwOfkjMklRp+I7PcNRHu3X270LJQrvdVYFKr5Q+GCGiILGy/IioGaFQyBONRhgMBmzUqgShx7HHDnPrysdkUkl27Znj+u0F7j5cYml1hffPn1OGQoLodLt02k12l6fZXF2jPDnJP//m72CbOsXCBPv375Wz0ZF2ZafYXK/x0zM/wx0GtBttVbVBt690NhLRGbkOZsykWCpTmpkhm82qt7TRfqdPzLaZyOSwLIt0LKXi8F1ftVjt5s9fD4Xsnucr3gYBGJquVE4CfLS0jB0zyWTSCtry3WvXr7C4uMDeXTthNGRu107agwEeIWubNWrNOj95910erVbYtXs316/f4qknj7F8/z4bK22+8qXPUMwXmD+wl3w+zdHHDrO50WCr0aGQn+LDDy/w8/fOMhx4tNpdwhDava6CbBhKe/QV2jK5cdK5HIVCgVK+QDKeIJPKMF2aojRZVAFLe5UieW6AaZpo1376WigwsaKWykCvN8AZDIlEosRiMfXlmGUqJTYM6YQBZ8++zwcffMBMKc9sqcBnnz6llDhi2bz2xt9R3rGDv/6b7zI1M836+jr1zRqF/ARWJMLqoxVeeO4ZJsbHmCpOUi7lsE2DtUoVy0pQzM/w6g9+yK3bi3T6DoOhCKON4/r0hj3FX1/6ujdSajzyHdLpNKlkkuJkkaOH5jl04DCTuQlipo1kq9PuEYaa6gDatTOvhYL9AE0Ji23FFeal0mI4JKvZdBLD0BkM+wz7PS5eOs+1K1fZN7ebmVJBZS4/VeLR2hrvnn2fr339H/PK//pzXnjh83zvr/6G9UqFbDrF/n1zrK2s8OJLX1Ktbv7QfvxRF2c0UM46m5nAGYX86I23qTc6rKxv0h6MlH/3xVCEHrGYhR7RGI0GBL67rSeapooUtxMc3n+A/XsPsHNmlumpGZLJFMPeUImY6JH2yVuvho4nBlvfhkDEVBeIx5MqI5IM35VM9+iJyumw/PABN2/eZHwsQ7O+Qahr9EdDDDtGIptmLJtT6BAH9nDxHjeuXuPpkycZz2a4fuMqJ04c560zb/HM506yY7ZILGqQScq1ely9coubN+8ycAPuL6+gW3GMmMXI93B9D9uMoimP6WHo0l1cdC2kudVkNPDJpVMU8nkeP/I4zz/7HIVCCV8cpGkrbdI++ckPQjEFsVgCGSL6/aEKMplIMTGZU9Vr1bfo9Tu4oyF2zKJR2+TcuXOsr1dYfLDIY0eOELUtJosldbBLlz7iX/3L32Xt0Qp/9Ad/yEyxyOPHjnHyySdY31hjbWMND5/sWBJNG5FOxDF1m5WlClc/uclmrcX9BxVagyH56WmVSMd1GTgDQt9lNOyj+yHZVBycIVZEo91s4zkOlljNEOYPPcbXvvaP2Lf3AJZlq/iEutrt998KhbsSWCKVUdXt9Xo4jqcSoIge+IonoszOcMDa2hpn33+P24t32HfoIENnwLPPP8dGrcathZu4jsOTxx9nZnqaP/79P1SW8tf+6T9jc3OTO3cX+fjKp6zXqszuKLN3bppkPIahmYg1a9S7rK3Xef1HP8OwDYrlaWKppDqLJz6g16XbbCirWMiNYRIgtnrU6xONbLenRm2LwmSRF09/ic997lmS6SyJRBIEEa2Fj8J6va4a99hYTl242W4pVRNIi/GIaDqLi4vq8+H5g7TbbS5fvkyvP2R65y4uXrxIt9fkt377G3zw/jtU1h6xd88Ojswf5s9feYW9e+b4F7/7b/n3/+bfMbtjN49Wqzx18hTtTp0zP/4hG9VVchNFDh6Yp9bscOHSp6xX60TtuDrXxMSEsrSa7yF+Y9CRXhsyO1NWVROtkYDFLI1nsmpIEed49OhRXn75ZaamZ2i1WtjxGNryuXfCsYmcqkK1tkm1WlXeM5lMKx4K0UXMpFdvbW2RiKdIZ5IsPXzE5Y8/otntK5v5ve/+Nb434Pf+x3+lUnnID77/f/nqV19irVJhfGyCVrPLu++dpVSeZdfO/cw/doQb16+xvnqXpQf36fT6YJjUWwOqtTrdvoMfhOr+YxKEjKmeg21EwHOI6JCTCtuWapUDCbjbYyKXU/7fGY7Ys2cPzz33HEcfP6aQO5RFQe36xbDT66ov6EZEZUsatTiUTCaj/LRAfnx8XGW71+6RTMZZXl7he99/leT4OOXpaXxvyBs/+iE6Hom4RbddZ3aHwDXBoD/i6vUbvPTSV/nGb36Tsx+c50//7DtSBp55+rhS3Ga7w/0Hy9y5v0RPWpEps7LP5OSkMhW4PsNeC1M2G4amAhZfn8qkt1V6OKLbbpNNZ1TxBv0++Xxe/e6LL75IuVym1++jrV07H969e1cZ71KpxEy5rMYpxWsjquArcJYqT5VLWEZUXURucufuPaqNBoVSnlKxwO3bN3nt1b/lyNFDpONxqtU1njh+gm9/+/dJplN02l1qjSarK5uUZ6Z47tnPsGdmmnKpgGHafPTpVd58+6fcf7iMJ23IC5mZmVHnipkW7WadUa+j5mgruu2lJ/J54smEssH1Wo3A89UAJDoiVJAYTp8+zfHjx4lEDbR7l95TKx5Z50im43aMsbExJf29dkcNDQJzuYD4YbmYwFtdOBGj57ps1mrEbJPp6Wnu3l5QQ0Wv2ebPXvkThRCp0te//nX+8i//guXVClNTU+zYuZOt2gajTpt0Mkk8maa2VefarTtUN2tiY8TpKk3ZvXMXhckc7VaTerWKGY2QTgq/A/KlIrlcjlx2TInpxnpV7eIMPUK5NKViOHDgAE888QTjkxNoGwtXQk32QkGAMxopOMu/pbfJa/H2bXbt2kXm781H3LLpdsUsjEiPj3Hv0RJvvPUmhw/O89RTTymxiOpRxnbv5jv/7b/Tbjf51re+xdbWJucvn+fpp59Sq5dqdZ12s8Wo0+Hm1WvcvfeApnjuXp92t0+7M6DR7qvlXblcpDxVwh0OVEtMJWJM5sYVyrLjY6THsspabmxssHTvvmqrMjzsnN2BFoRKi0TABNZar/IgrG6sq1aUsC2VUTEZooYiGJ7rKOUT87+6+khdIJGMKZNixmx67ohzly4y6A7UiPjFz59GDzVMw+Lq1asc2DtHPBFTM7S4tcraMpc/vry9PgoCwqHL5fMXuHHzNgPHQfYyoSzqvEB1gdFwqDy96Imhge+MKBUmKRWK+IGHZdsqcEGR0G91aXnbR8QTzM7MMOz1VWv9zNOntgMOO5shAulen3pjS01M2WwaSyAjA2UY0tiosrb6iGZ9SyVkYnJcCUOj22R5vcLySkVNKeJXT544ydGjx+g1trePWuirRJVmpjhz5i26gxatVlOZiFwmzfpShWqlqtqGBCzDgidjXSyGYdnq8M1mXe2zbFk+2Ca7ZncwVSoquggOBXGiK0LLzY0Nta4SzZGkeK6rIP8PX/oKs7OzaJWFa2p4ENFynCGtZoODB/eTjMXxA1e5q/PnfsHlyxe5t7igLlooTBI1DLWY002dTm9A3IozMZHHH/k4jsvhvfM888wz6jD9QZeLF89z4+ZVIrIgMba3iBPZMfqNLtlURvXTlco6D5YeokeiqivIcCDDhwQmBxfOCrV2795NPpfbnn9bbeUPpMpCR9EXYaMacTVNBSsLgFMnn+bUqVNoreV7ykvLaChZXVp6oMy5cHVyMkejucUf/N63SaWTLC0tqSoL36dnpkgkk0TjJlHTVmCYKkzR2GoogVtdXlXzqQig3LzRrLG5tYFs4gSiYlEnx3OkrQS+G6hD15tS/ZY6R0ZaESjz8+DBA2qbVfUdz3OIx2IUiwVy2XGVDBFVme7Gx7Mq+XLmfC7P3NxutW4SJ3f8+BPs2zeH5m9WQ1mgjXpdtpoNlpeXGRvLKCsp20rJ8Hf+9E+IJ2zeeecdZmbK3Lt3Tz0xmD96RJmRQqmo1P3Q/oNsVjewTJOl+w+UgdnarGFaUTzfV5WWRb4cTNrS1GSJTr2tYCj8EygLZSRJskaSxMpbLKn8rrTKVquhEimJSCYS6KGMrQYj12cw6BG1bHV90YJWu8Heuf0cO/oYJ0+eojhVRBs8Wg7tdErBpddqKfGaLBbQDIP6ZpWFhQUuXDyvAv/bV1/lyadOKPmXG8vgLT8X6ApfpJUZocbBQwfYqq5z48YN1itrJBIJ8sWCamuyV5bZWlAhra2+scnm+qYaQ0UIZfwTgZKAxATJZwXddoOVlRVVTRE/mX4EqhPjk+rMruuTTCdIpjJq4RiJyh4uzeOPn+Cznz3F3Nw+1X206vVroazw84UCqMCVCiij7fuu2hDeunWLO3fucOHyBSqVilrWabrOtWvXlBLi+8rXyqrm9OefVw5o7dEyn3zyEbG4pR6niOuJRi3WqpusVTdoNdt0O2IionTbHcVBCVgIKNsMgbW8hOtSWYFzo9FQkDflkYoepdtq0+8OGB8bw44l1D5aNy0iZoTdc3t54qkTHD70GHvmdim3d//BXbStGzdCWW6LaDxaWVHiJQ+hDj02T2pyUjq/PMWiX6+r/xfIN1pNVQGB4UeXLnP+Fx8SFTM/O8XXvvJlms2aspr12qY6oHBY1yPUm10ePFzh0fIKw6GHGbVJxIX/rrq/vGQakplbYKr4KvxvbOuG3P+XVlf+P2bF2VnewaFDh1Rvr7eapMayTE2XyU7kGMuNq7FVUCLUk7Nr4dp6iBFRcH7zJz9mZXVVwe/Z5/+BUsr1japyKM1WCytmq6cI3X6PMEAN2mPJNGHgs1Wt8PP3zmBHIZGMYkZ1FhZucG9xUT3uGLoeriPMN6hvdWh3+qpXxmP2r7YW4vSG/b4SNV2TFWtLwVmClTOJAZJ+WyqX2bdvH9NTUxTzZdpbddbW18lMjFM8eAA8l2Gviz0xjtPrYgpyfvkwLRw5If2+quSju3cUV4WjpfIUVizBkSeO8/DhEpP5Io7vsXjvjvK30vdaggZ0XGdE3DawTI3axiq3F67TaddJJhNqfbO2VuXC+YtUN+rkJ8sEga4CTidT8rQI1x2p3ik8llaoVjFhQG1rU/H/+IkTyg/vO3hAmQhJgKCrWlljx8wOxeFPrnxKrVHn6LFj7JjbjS+otUwsO67alax4hDL/H0xJ7BFdZf6MAAAAAElFTkSuQmCC">
     * let a = '<img src="path/myImage.png">';
     * bbn.fn.imgToBase64(a);
     * ```
     * @memberof bbn.fn
     * @param {HTMLElement} img
     * @returns  {*} 
     */
    imgToBase64(img)
    {
      let canvas = bbn.fn.imageToCanvas(img);
      return bbn.fn.canvasToImage(canvas);
    },

    /**
     * Tells if the interface is beeing active for the past x seconds. 
     * @method   isActiveInterface
     * @global   
     * @example
     * // true
     * ``` javascript
     * bbn.fn.isActiveInterface(54764654);
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean} 
     */
     isActiveInterface(secs = 600) {
      if (!bbn.env.last_focus) {
        return false;
      }

      let t = (new Date()).getTime();
      return (t - bbn.env.last_focus) < (secs*1000);
    },


    /**
     * Formats the value given in bytes. 
     * @method   formatBytes
     * @global   
     * @example
     * //"52.23 MB"
     * ``` javascript
     * bbn.fn.formatBytes(54764654);
     * ```
     * @memberof bbn.fn
     * @returns  {String} 
     */
    formatBytes(bytes, decimals = 2){
      if ( !bytes ){
        return '0 B';
      } 
      const k = 1024,
            s = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals < 0 ? 0 : decimals)) + ' ' + s[i];
    },

    /**
     * Starts a timer and gives it a name.
     * @method   startChrono
     * @global   
     * ``` javascript
     * bbn.fn.startChrono('myChrono');
     * ```
     * @memberof bbn.fn
     * @returns 
     */
    startChrono(name)
    {
      let now = (new Date()).getTime();
      let h1 = 3600*1000;
      if (_private.length) {
        bbn.fn.each(_private, (t, n) => {
          if (now - t > h1) {
            delete _private[n];
          }
        });
        now = (new Date()).getTime();
      }
      _private[name] = now;
    },

    /**
     * @method   stopChrono
     * @global   
     * @example
     * ``` javascript
     * bbn.fn.stopChrono('myChrono');
     * // 20162
     * ```
     * @memberof bbn.fn
     * @param {String} name
     * @returns  {Number} 
     */
    stopChrono(name)
    {
      if (_private[name]) {
        let now = (new Date()).getTime();
        let diff = now - _private[name];
        return diff;
      }
    },

    /**
     * Returns the current device type.
     * @method   getDeviceType
     * @global
     * @example
     * ``` javascript
     * bbn.fn.getDeviceType();
     * // mobile
     * ```
     * @memberof bbn.fn
     * @returns  {String}
     */
    getDeviceType(){
      const userAgent = navigator.userAgent.toLowerCase();
      if ( /iPhone|Android/i.test(navigator.userAgent) ){
        return "mobile";
      }
      if ( /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent) ){
        return "tablet";
      }
      return "desktop";
    },
    /**
     * Returns true if the current device type is a mobile.
     * @method   isMobileDevice
     * @global
     * @example
     * ``` javascript
     * bbn.fn.isMobileDevice();
     * // false
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
		isMobileDevice(){
			return this.getDeviceType() === 'mobile';
		},
    /**
      * Returns true if the current device type is a tablet.
      * @method   isTabletDevice
      * @global
      * @example
      * ``` javascript
      * bbn.fn.isTabletDevice();
      * // false
      * ```
      * @memberof bbn.fn
      * @returns  {Boolean}
      */
		isTabletDevice(){
			return this.getDeviceType() === 'tablet';
		},
    /**
     * Returns true if the current device type is a desktop.
     * @method   isDesktopDevice
     * @global
     * @example
     * ``` javascript
     * bbn.fn.isDesktopDevice();
     * // true
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
		isDesktopDevice(){
			return this.getDeviceType() === 'desktop';
		},
    /**
     * Returns true if the current browser is on a mobile device (smartphone or tablet).
     * @method   isMobile
     * @global
     * @example
     * ``` javascript
     * bbn.fn.isMobile();
     * // false
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isMobile(){
			return bbn.fn.isMobileDevice() || bbn.fn.isTabletDevice();
    },
    /**
     * Returns the length of time the window has not been focused in seconds.
     * @method   getTimeoff
     * @global
     * @example
     * ``` javascript
     * bbn.fn.getTimeoff();
     * // 0
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    getTimeoff(){
      if (!bbn.env.isFocused) {
        return Math.round((new Date()).getTime()/1000 - bbn.env.timeoff);
      }

      return 0;
    },
    /**
     * Checks whether the given elemet is focused or not.
     * 
     * @method   isFocused
     * @global   
     * @example
     * ``` javascript
     * bbn.fn.isFocused(document.getElementById('input_name'));
     * // false
     * bbn.fn.isFocused(bbn.sel('.container'));
     * // true
     * ```
     * @memberof bbn.fn
     * 
     * @param {Element} ele     The element to be checked for focus
     * @param {Boolean} contain If true will check if the focused element is contained in the given element
     * 
     * @returns  {Boolean} True if focused
     */
    isFocused(ele, contain) {
      return (ele === document.activeElement) || (contain && ele.contains && (ele.contains(document.activeElement)));
    },

    replaceSelection(html, selectInserted) {
      let sel, range, fragment;
      sel = window.getSelection();

      // Test that the Selection object contains at least one Range
      if (sel.getRangeAt && sel.rangeCount) {
          // Get the first Range (only Firefox supports more than one)
          range = window.getSelection().getRangeAt(0);
          range.deleteContents();

          // Create a DocumentFragment to insert and populate it with HTML
          // Need to test for the existence of range.createContextualFragment
          // because it's non-standard and IE 9 does not support it
          if (range.createContextualFragment) {
              fragment = range.createContextualFragment(html);
          }
          else {
              // In IE 9 we need to use innerHTML of a temporary element
              const div = document.createElement("div");
              let child;
              div.innerHTML = html;
              fragment = document.createDocumentFragment();
              while ( (child = div.firstChild) ) {
                  fragment.appendChild(child);
              }
          }
          const firstInsertedNode = fragment.firstChild;
          const lastInsertedNode = fragment.lastChild;
          range.insertNode(fragment);
          sel.removeAllRanges();
          if (selectInserted) {
              if (firstInsertedNode) {
                  range.setStartBefore(firstInsertedNode);
                  range.setEndAfter(lastInsertedNode);
              }
              sel.addRange(range);
          }
          else {
            range.setStartAfter(lastInsertedNode);
            sel.addRange(range);
          }
      }
    },

    /**
     * Selects the content of an element.
     * 
     * @method   selectElementText
     * @global   
     * @example
     * ``` javascript
     * bbn.fn.selectElementText(document.getElementById('my_input_id'));
     * // false
     * bbn.fn.selectElementText(bbn.$('#my_span_id'));
     * // true
     * ```
     * @memberof bbn.fn
     * 
     * @param {Element} ele The element in which the text should be selected
     * @param {Boolean} win The window object
     * 
     * @returns  {Boolean} True if focused
     */
    selectElementText(ele, win) {
      win = win || window;
      if (ele instanceof HTMLInputElement) {
        ele.select();
        return;
      }
      let doc = win.document;
      let sel;
      let range;

      if (win.getSelection && doc.createRange) {
        sel = win.getSelection();
        range = doc.createRange();
        range.selectNodeContents(ele);
        sel.removeAllRanges();
        sel.addRange(range);
      }
      else if (doc.body.createTextRange) {
        range = doc.body.createTextRange();
        range.moveToElementText(ele);
        range.select();
      }
    },

    getAncestors(ele, sel) {
      let r = [];
      if (bbn.fn.isString(ele)) {
        ele = document.querySelector(ele);
      }
      if (ele instanceof HTMLElement) {
        if (ele.parentNode) {
          if (typeof(sel) === 'string') {
            while (ele = ele.parentNode.closest(sel)) {
              r.push(ele);
            }
          }
          else {
            if (sel === true) {
              r.push(ele);
            }
            while (ele = ele.parentNode) {
              r.push(ele);
            }
          }
        }
      }
      return r;
    },

    isInside(ele, ancestor) {
      let ancestors = bbn.fn.getAncestors(ele);
      if (ancestors.length) {
        if (bbn.fn.isString(ancestor)) {
          let ok = false;
          bbn.fn.each(ancestors, a => {
            if (a.matches && a.matches(ancestor)) {
              ok = true;
              return false;
            }
          });
          return ok;
        }
        if (ancestor instanceof HTMLElement) {
          return ancestors.indexOf(ancestor) > -1;
        }
      }

      return false;
    },

    /**
     * Gets all the tag names present in the DOM
     * @returns array
     */
    getAllTags() {
      return bbn.fn.unique(Array.prototype.map.apply(document.all, [a => a.tagName.toLowerCase()]));
    }





  });
})(bbn);



/**
 * @file   Objects and arrays operations.
 * @author BBN Solutions <info@bbn.solutions>
 * @since  12/04/2020
 */

;((bbn) => {
  "use strict";
  let diffObjProcessed = [];


  /**
   * @var {Object} _private Misc variable for internal use
   */
  let _private = {};

  Object.assign(bbn.fn, {
    /**
     * Removes duplicate values from an array.
     * 
     * Takes an input array and returns a new array without duplicate values.
     *
     * @method   unique
     * @global
     * @example
     * ```javascript
     * bbn.fn.unique(["a", "b", "a", "b", "a", "b", "c", "c", "d"]);
     * // ["a", "b", "c", "d"]
     * ```
     * @memberof bbn.fn
     * @param    {Array} arr 
     * @returns  {Array}
     */
    unique(arr) {
      return arr.filter(function(el, index, ar) {
        return index === ar.indexOf(el);
      });
    },

    /**
     * Returns the value of the given property from the given object.
     * 
     * Looks for the given property in the given object, accepting dot (.) separator 
     * for deep property access, and returns its value if found and undefined otherwise.
     *
     * @method   getProperty
     * @global
     * @example
     * ```javascript
     * bbn.fn.getProperty({a: 1, b: 2}, 'b');
     * // 2
     * ```
     * @example
     * ```javascript
     * bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.o.a');
     * // 33
     * ```
     * @example
     * ```javascript
     * bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.h.a');
     * // undefined
     * ```
     * @memberof bbn.fn
     * @param    {Object} obj
     * @param    {String} prop
     * @returns  {*}      The property's value or undefined
     */
    getProperty(obj, prop) {
      if ( (typeof obj === 'object') && (typeof prop === 'string')){
        return prop.split('.').reduce((o, i) => {
          if (o) {
            return o[i];
          }

          return undefined;
        }, obj);
      }
    },

    /**
     * Sorts an array of objects based on the given property.
     * 
     * The resulting array is the same object, the order is based on _compareValues function.
     * 
     * @method   order
     * @global
     * @example
     * ```javascript
     * bbn.fn.order([
     *   {movie: "Brazil", year: 1985},
     *   {movie: "Donnie Darko", year: 2001},
     *   {movie: "Barry Lindon", year: 1976}
     * ], 'year', 'DESC')
     * // [
     * //   {movie: "Donnie Darko", year: 2001},
     * //   {movie: "Brazil", year: 1985},
     * //   {movie: "Barry Lindon", year: 1976}
     * // ]
     * ```
     * @memberof bbn.fn
     * @param    {Array}  arr       The array to order
     * @param    {String} prop      The property on which the order is based
     * @param    {String} [dir=asc] The direction of the order (desc or asc by default)
     * @returns  {Array} 
     */
    order(arr, prop, dir = 'asc'){
      if (arr) {
        return arr.sort(function(a, b){
          return bbn.fn._compareValues(a, b, prop, dir);
        });
      }
      return arr;
    },

    /**
     * Sorts an array of objects based on a set of properties.
     * 
     * The resulting array is the same object, the order is based on _compareValues function
     * applied for each given properties in orders argument.
     *
     * @method   multiorder
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {movie: "Brazil", year: 1985},
     *   {movie: "Donnie Darko", year: 2001},
     *   {movie: "Out of Africa", year: 1985},
     *   {movie: "Ran", year: 1985},
     *   {movie: "Back to the future", year: 1985},
     *   {movie: "Barry Lindon", year: 1976}
     * ];
     * bbn.fn.multiorder(ar, [
     *   {field: "year", dir: "desc"},
     *   {field: "movie", dir: "asc"}
     * ]);
     * // [
     * //   {movie: "Donnie Darko", year: 2001},
     * //   {movie: "Back to the future", year: 1985},
     * //   {movie: "Brazil", year: 1985},
     * //   {movie: "Out of Africa", year: 1985},
     * //   {movie: "Ran", year: 1985},
     * //   {movie: "Barry Lindon", year: 1976}
     * // ]
     * bbn.fn.multiorder(ar, {year: "desc", movie: "asc"});
     * // Same result with object shortcut
     * ```
     * @memberof bbn.fn
     * @param    {Array}        arr    The array to order
     * @param    {Array|Object} orders The properties and directions (asc, desc) to order by
     * @returns  {Array}        The same array (arr), ordered differently
     */
    multiorder(arr, orders){
      if ( !Array.isArray(orders) && (typeof orders === 'object') ){
        let tmp = [];

        for ( var n in orders ){
          tmp.push({field: n, dir: orders[n]});
        }
        orders = tmp;
      }
      let r = arr.slice();
      return r.sort((a, b) => {
        let res;
        for ( let order of orders ){
          res = bbn.fn._compareValues(a, b, order.field, order.dir);
          if ( res !== 0 ){
            return res;
          }
        }
        return 0;
      })
    },

    /**
     * Moves an element to a different position within the given array.
     *
     * The same array is returned, with its elements reordered according to the executed movement.
     *
     * @method   move
     * @global
     * @todo     Finish doc
     * @example
     * ```javascript
     * bbbn.fn.move([
     *   {movie: "Brazil", year: 1985},
     *   {movie: "Donnie Darko", year: 2001},
     *   {movie: "Out of Africa", year: 1985}
     * ], 1, 2);
     * // [
     * //   {movie: "Brazil", year: 1985},
     * //   {movie: "Out of Africa", year: 1985},
     * //   {movie: "Donnie Darko", year: 2001}
     * // ]
     * ```
     *  @example
     * ```javascript
     * bbn.fn.move([1, 2, 3, 4], 3, 0);
     * // [4, 1, 2, 3]
     * ```
     * @memberof bbn.fn
     * @param    {Array}  arr       The array
     * @param    {Number} fromIndex The index of the element to move
     * @param    {Number} toIndex   The future index of the element
     * @returns  {Array}  The same array, with elements repositionned.
     */
    move(arr, fromIndex, toIndex){
      if (toIndex >= arr.length) {
        let k = toIndex - arr.length;
        while ((k--) + 1) {
          arr.push(undefined);
        }
      }
      arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
      return arr;
    },

    /**
     * Performs a comparison between two values based on the given operator and returns a boolean.
     * 
     * It is internally used by all the filtering functions; the available operators are:  
     * - _===_, _=_, _equal_, _eq_, _is_, which stand for __===__  
     * - _!==_, _notequal_, _neq_, _isnot_, which stand for __!==__
     * - _!=_, _different_, which stand for __!=__
     * - _contains_, _contain_, _icontains_, _icontain_
     * - _starts_, _start_
     * - _startswith_, _startsi_, _starti_, _istarts_, _istart_
     * - _endswith_, _endsi_, _endi_, _iends_, _iend_
     * - _like_
     * - _gt_, _>_, which stand for __>__
     * - _lt_, _<_, which stand for __<__
     * - _gte_, _>=_, which stand for __>=__
     * - _lte_, _<=_, which stand for __<=__
     * - _isnull_, which stands for __=== null__
     * - _isnotnull_, which stands for __!== null__
     * - _isempty_, which stands for __=== ''__
     * - _isnotempty_, which stands for __!== ''__  
     *   
     * The defaut operator (if none is given) is __==__ .
     *
     * @method   compare
     * @global
     * @example
     * ```javascript
     * bbn.fn.compare('foo', 'bar', 'eq');
     * // false
     * ```
     * @example
     * ```javascript
     * bbn.fn.compare('foo', 'bar', 'neq');
     * // true
     * ```
     * @example
     * ```javascript
     * bbn.fn.compare(3, 1, '>');
     * // true
     * ```
     * @example
     * ```javascript
     * bbn.fn.compare("JavaScript", "script", 'contain');
     * // true
     * ```
     * @memberof bbn.fn
     * @param    {String|Number} v1
     * @param    {String|Number} v2
     * @param    {String}        operator
     * @returns  {Boolean}       True if the values' comparison complies with the operator, false otherwise
     */
    compare(v1, v2, operator){
      switch ( operator ){
        case "===":
        case "=":
        case "equal":
        case "eq":
        case "is":
          return v1 === v2;
        case "!==":
        case "notequal":
        case "neq":
        case "isnot":
          return v1 !== v2;
        case "!=":
        case "different":
          return v1 != v2;
        case "contains":
        case "contain":
        case "icontains":
        case "icontain":
          if ( bbn.fn.isEmpty(v1) || bbn.fn.isEmpty(v2) ){
            return false;
          }
          return bbn.fn.removeAccents(v1).toLowerCase().indexOf(bbn.fn.removeAccents(v2).toLowerCase()) !== -1;
        case "doesnotcontain":
        case "donotcontain":
            if ( bbn.fn.isNull(v1) || bbn.fn.isNull(v2) ){
              return true;
            }
          return bbn.fn.removeAccents(v1.toLowerCase()).indexOf(bbn.fn.removeAccents(v2.toLowerCase())) === -1;
        case "starts":
        case "start":
          if ( bbn.fn.isNull(v1) || bbn.fn.isNull(v2) ){
            return false;
          }
          if ( (typeof(v1) !== 'string') ){
            v1 = v1.toString() || '';
          }
          if ( (typeof(v2) !== 'string') ){
            v2 = v2.toString() || '';
          }
          return v1.indexOf(v2) === 0;
        case "startswith":
        case "startsi":
        case "starti":
        case "istarts":
        case "istart":
          if ( bbn.fn.isNull(v1) || bbn.fn.isNull(v2) ){
            return false;
          }
          return bbn.fn.removeAccents(v1).toLowerCase().indexOf(bbn.fn.removeAccents(v2).toLowerCase()) === 0;
        case "endswith":
        case "endsi":
        case "endi":
        case "iends":
        case "iend":
          if ( bbn.fn.isNull(v1) || bbn.fn.isNull(v2) ){
            return false;
          }
          return v1.lastIndexOf(v2) === v1.length - v2.length;
        case "like":
          if ( bbn.fn.isNull(v1) || bbn.fn.isNull(v2) ){
            return false;
          }
          return bbn.fn.removeAccents(v1).toLowerCase() === bbn.fn.removeAccents(v2).toLowerCase();
        case "gt":
        case ">":
          return v1 > v2;
        case "gte":
        case ">=":
          return v1 >= v2;
        case "lt":
        case "<":
          return v1 < v2;
        case "lte":
        case "<=":
          return v1 <= v2;
        case "isnull":
          return v1 === null;
        case "isnotnull":
          return v1 !== null;
        case "isempty":
          return v1 === '';
        case "isnotempty":
          return v1 !== '';
        case '==':
          if (bbn.fn.isObject(v1, v2)) {
            return bbn.fn.isSame(v1, v2);
          }
        default:
          return v1 == v2;
      }
    },

    /**
     * Retrieves the index of the array's first element corresponding to the given filter.
     *
     * Returns -1 if the element is not found. If the second parameter is an object or function 
     * for filtering as defined in bbn.fn.filter, the remaining parameters will be shifted to the
     * left, i.e. val becomes operator, and operator startFrom. And if operator is a number, its value will
     * be given to startFrom and operator will be undefined. The filter object can be complex with different
     * operators (as seen in bbn.fn.compare) and logics (AND/OR), and infinitely nested, of this form:
     * ```javascript
     * {
     *   logic: "AND",
     *   conditions: [
     *     {
     *       field: "prop1",
     *       operator: "eq",
     *       value: "value1"
     *     }, {
     *       logic: "OR",
     *       conditions: [
     *         {
     *            field: "prop2",
     *            operator: "eq",
     *            value: 1
     *         }. {
     *            field: "prop2",
     *            operator: "eq",
     *            value: 2
     *         }
     *       ]
     *     }
     *   ]
     * }
     * ```
     * This way of managing the arguments is used in all the filtering functions.
     *
     * @method   search
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     * ];
     * 
     * bbn.fn.search(ar, "id", 256);
     * // 2
     * 
     * bbn.fn.search(ar, {director: "Steven Spielberg"});
     * // 0
     * 
     * bbn.fn.search(ar, {year: 1975, director: "Steven Spielberg"});
     * // 3
     * 
     * bbn.fn.search(ar, {director: "Steven Spielberg"}, 1);
     * // 3
     * 
     * // Complex filters
     * bbn.fn.search(ar, {
     *   logic: "AND",
     *   conditions: [
     *     {
     *       field: "director",
     *       operator: "eq",
     *       value: "Steven Spielberg"
     *     }, {
     *       logic: "OR",
     *       conditions: [
     *         {
     *            field: "year",
     *            operator: "eq",
     *            value: 1974
     *         }, {
     *            field: "year",
     *            operator: "eq",
     *            value: 1975
     *         }
     *       ]
     *     }
     *   ]
     * });
     * // 3
     * 
     * Simple array
     * bbn.fn.search(['a', 'b', 'c'], null, 'b');
     * // 1
     * 
     * ```
     * 
     * @memberof bbn.fn
     * @param    {Array}                    arr       The subject array
     * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
     * @param    {*}                        val       The value with which comparing the given property
     * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
     * @param    {Number}                   startFrom The index from which the search should start
     * @returns  {Number}                   The index if found, otherwise -1
     */
    search(arr, prop, val, operator, startFrom){
      if ( !bbn.fn.isIterable(arr) ){
        throw new Error(bbn._("The first argument for a search should be iterable") + " " + (typeof arr) + " " + bbn._("given"));
      }
      if (!arr.length) {
        return -1;
      }
      let filter = {};
      let isFunction = false;
      if (bbn.fn.isString(prop)) {
        filter.conditions = [{
          field: prop,
          value: val,
          operator: operator || '='
        }];
      }
      else if (!prop) {
        isFunction = true;
        filter = a => {
          return bbn.fn.compareConditions(
            {value: a},
            bbn.fn.filterToConditions({
              logic: 'AND',
              conditions: [
                {
                  field: 'value',
                  operator: operator || '=',
                  value: val
                }
              ]
            })
          );
        }
      }
      else {
        startFrom = operator;
        operator = val;
        if (bbn.fn.isObject(prop)) {
          filter = prop;
        }
        else if (bbn.fn.isFunction(prop)) {
          isFunction = true;
          filter = prop;
        }
      }

      if (isFunction || (bbn.fn.isObject(filter) && bbn.fn.numProperties(filter))) {
        if (bbn.fn.isNumber(operator)) {
          startFrom = operator;
          operator = undefined;
        }
        if (!bbn.fn.isNumber(startFrom)) {
          startFrom = 0;
        }

        if (isFunction) {
          for ( let i = startFrom; i < arr.length; i++ ){
            if (filter(arr[i])) {
              return i;
            }
          }
        }
        else {
          filter = bbn.fn.filterToConditions(filter);
          for ( let i = startFrom; i < arr.length; i++ ){
            if ( bbn.fn.compareConditions(arr[i], filter) ){
              return i;
            }
          }
        }
      }

      return -1;
    },

    /**
     * Counts the number of objects matching the given filter in the given array.
     * 
     * The arguments follow the same scheme as bbn.fn.search.
     *
     * @method   count
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     * ];
     * bbn.fn.count(ar, "id", 256);
     * // 1
     * bbn.fn.count(ar, {director: "Steven Spielberg"});
     * // 2
     * bbn.fn.search(ar, "year", 1975, ">");
     * // 3
     * // Complex filters: all the movies from Spielberg between 1974 and 1980
     * bbn.fn.search(ar, {
     *   logic: "AND",
     *   conditions: [
     *     {
     *       field: "director",
     *       operator: "eq",
     *       value: "Steven Spielberg"
     *     }, {
     *       logic: "AND",
     *       conditions: [
     *         {
     *            field: "year",
     *            operator: ">=",
     *            value: 1974
     *         }, {
     *            field: "year",
     *            operator: "<=",
     *            value: 1980
     *         }
     *       ]
     *     }
     *   ]
     * });
     * // 1
     * ```
     * @memberof bbn.fn
     * @param    {Array}                    arr       The subject array
     * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
     * @param    {*}                        val       The value with which comparing the given property
     * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
     * @returns  {Number}                   The number of items
     */
    count(arr, prop, val, operator){
      return bbn.fn.filter(arr, prop, val, operator, false).length || 0;
    },

    /**
     * Returns all the unique values of the given field (property) from the first object matching the given filter in an array.
     *
     * The filtering arguments follow the same scheme as bbn.fn.search.
     *
     * @method   getFieldValues
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     *   {name: "Barry Lindon", director: "Stanley Kubrick", year: 1975, id: 802}
     * ];
     * bbn.fn.getFieldValues(ar, "director");
     * // ["Steven Spielberg", "George Lucas", "Stanley Kubrick"]
     * bbn.fn.getFieldValues(ar, "name", {year: 1975});
     * // ["Jaws", "Barry Lindon"]
     * ```
     * @memberof bbn.fn
     * @param    {Array}                    arr       The subject array
     * @param    {String}                   field     The property from which the values are returned
     * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
     * @param    {*}                        val       The value with which comparing the given property
     * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
     * @returns  {*}
     */
    getFieldValues(arr, field, prop, val, operator) {
      bbn.fn.checkType(field, 'string');
      if (prop) {
        arr = bbn.fn.filter(arr, prop, val, operator, false);
      }

      let res = [];
      bbn.fn.each(arr, a => res.indexOf(a[field]) === -1 ? res.push(a[field]) : null);
      return res;
    },

    /**
     * Retrieves all elements of a hierarchical array corresponding to the filter.
     * 
     * The arguments follow the same scheme as bbn.fn.search.
     *
     * @method   findAll
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     * ];
     * bbn.fn.count(ar, "id", 256);
     * // 1
     * bbn.fn.count(ar, {director: "Steven Spielberg"});
     * // 2
     * bbn.fn.search(ar, "year", 1975, ">");
     * // 3
     * // Complex filters: all the movies from Spielberg between 1974 and 1980
     * bbn.fn.search(ar, {
     *   logic: "AND",
     *   conditions: [
     *     {
     *       field: "director",
     *       operator: "eq",
     *       value: "Steven Spielberg"
     *     }, {
     *       logic: "AND",
     *       conditions: [
     *         {
     *            field: "year",
     *            operator: ">=",
     *            value: 1974
     *         }, {
     *            field: "year",
     *            operator: "<=",
     *            value: 1980
     *         }
     *       ]
     *     }
     *   ]
     * });
     * // 1
     * ```
     * @memberof bbn.fn
     * @todo Do the doc!
     * @param    {Array}                    arr       The subject array
     * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
     * @param    {*}                        val       The value with which comparing the given property
     * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
     * @returns  {Number}                   The number of items
     */
    findAll(arr, filter, deepProperty, res = [])
    {
      let idx;
      let start = 0;
      while ((idx = bbn.fn.search(arr, filter, start)) > -1) {
        res.push(arr[idx]);
        start = idx + 1;
      }
      bbn.fn.each(arr, it => {
        if (bbn.fn.isArray(it[deepProperty])) {
          bbn.fn.findAll(it[deepProperty], filter, deepProperty, res);
        }
      });
      return res;
    },

    /**
     * Retrieves all elements of a hierarchical array corresponding to the filter.
     * 
     * The arguments follow the same scheme as bbn.fn.search.
     *
     * @method   findAll
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     * ];
     * bbn.fn.count(ar, "id", 256);
     * // 1
     * bbn.fn.count(ar, {director: "Steven Spielberg"});
     * // 2
     * bbn.fn.search(ar, "year", 1975, ">");
     * // 3
     * // Complex filters: all the movies from Spielberg between 1974 and 1980
     * bbn.fn.search(ar, {
     *   logic: "AND",
     *   conditions: [
     *     {
     *       field: "director",
     *       operator: "eq",
     *       value: "Steven Spielberg"
     *     }, {
     *       logic: "AND",
     *       conditions: [
     *         {
     *            field: "year",
     *            operator: ">=",
     *            value: 1974
     *         }, {
     *            field: "year",
     *            operator: "<=",
     *            value: 1980
     *         }
     *       ]
     *     }
     *   ]
     * });
     * // 1
     * ```
     * @memberof bbn.fn
     * @todo Do the doc!
     * @param    {Array}                    arr       The subject array
     * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
     * @param    {*}                        val       The value with which comparing the given property
     * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
     * @returns  {Number}                   The number of items
     */
    deepPath(arr, filter, deepProperty, res = [])
    {
      let idx;
      let start = 0;
      if ((idx = bbn.fn.search(arr, filter, start)) > -1) {
        res.push(idx);
        return res;
      }
      bbn.fn.each(arr, (it, i) => {
        if (bbn.fn.isArray(it[deepProperty])) {
          let r = res.slice();
          r.push(i);
          let tmp = bbn.fn.deepPath(it[deepProperty], filter, deepProperty, r);
          if (tmp !== false) {
            return tmp;
          }
        }
      });
      return false;
    },

    /**
     * Returns the sum of the given property or function for the array's elements matching the filter.
     * 
     * The filtering arguments follow the same scheme as bbn.fn.search.
     * 
     * @method   sum
     * @global
     * @example
     * ```javascript
     * let invited = [
     *   {name: "Robert De Niro", attendees: 2, confirmed: true},
     *   {name: "Al Pacino", attendees: 1, confirmed: false},
     *   {name: "James Caan", attendees: 4, confirmed: false},
     *   {name: "Harvey Keitel", attendees: 5, confirmed: true}
     * ];
     * // No filter
     * bbn.fn.sum(invited, "attendees");
     * // 12
     * // Filter
     * bbn.fn.sum(invited, "attendees", {confirmed: true});
     * // 7
     * ```
     * @example
     * ```javascript
     * let cart = [
     *    {article: "Toothpaste", price: 2.50, quantity: 1},
     *    {article: "Toothbrush", price: 6, quantity: 2},
     *    {article: "Banana", price: 0.50, quantity: 3},
     *    {article: "T-shirt", price: 14, quantity: 3}
     * ];
     * bbn.fn.sum(cart, a => a.price * a.quantity);
     * // 58
     * // Only the items with a quantity equal to 3
     * bbn.fn.sum(cart, a => a.price * a.quantity, {quantity: 3});
     * // 43.5
     * ```
     * @memberof bbn.fn
     * @param    {Array}                    arr        The subject array
     * @param    {(String|Function)}        numberProp The property's name for which the value should be added to the sum, or a function returning the number.
     * @param    {(String|Object|Function)} prop       A property's name or a filter object or function
     * @param    {*}                        val        The value with which comparing the given property
     * @param    {String}                   operator   The operator to use for comparison with the value as used in bbn.fn.compare
     * @returns  {Number}                   The sum
     */
    sum(arr, numberProp, prop, val, operator){
      let r = 0;
      let isFunction = bbn.fn.isFunction(numberProp);
      bbn.fn.each(bbn.fn.filter(arr, prop, val, operator), (a) => {
        let tmp = isFunction ? numberProp(a) : a[numberProp];
        if (tmp) {
          r += (parseFloat(tmp) || 0);
        }
      });
      return r;
    },

    /**
     * Returns a new array with only the data matching the given filter.
     * 
     * The filtering arguments follow the same scheme as bbn.fn.search.
     * 
     * @method   filter
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     * ];
     * bbn.fn.filter(ar, {director: "Steven Spielberg"});
     * // [
     * //   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     * //   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     * // ]
     * bbn.fn.filter(ar, "director", "Steven Spielberg");
     * // Same result as the previous example
     * bbn.fn.filter(ar, {
     *   logic: "OR",
     *   conditions: [
     *     {
     *        field: "director",
     *        value: "Richard Donner"
     *     }, {
     *        field: "director",
     *        value: "George Lucas"
     *     }
     *   ]
     * );
     * // [
     * //   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     * //   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     * // ]
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array}                    arr       The subject array
     * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
     * @param    {*}                        val       The value with which comparing the given property
     * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
     * @returns  {Array}                    A new filtered array
     */
    filter(arr, prop, val, operator) {
      if ( !bbn.fn.isArray(arr) ){
        throw new Error("Error in bbn.fn.filter: The first argument must be an array");
      }
      var filter = {},
          res = [],
          isFn = bbn.fn.isFunction(prop),
          isObj = bbn.fn.isObject(prop);
      if ( !prop || !arr.length ){
        return arr;
      }
      if ( arr.length ){
        if ( isObj || isFn ){
          operator = val;
          filter = prop;
        }
        else if ( typeof(prop) === 'string'){
          filter[prop] = val;
        }
        else{
          throw new Error("Search function error: The prop argument should be a string or an object");
        }
        if ( isFn ){
          bbn.fn.each(arr, (a, i) => {
            if ( filter(a, i) ){
              res.push(a);
            }
          })
        }
        else{
          filter = bbn.fn.filterToConditions(filter, operator);
          if ( filter.conditions && filter.logic ){
            bbn.fn.each(arr, (a) => {
              if ( bbn.fn.compareConditions(a, filter) ){
                res.push(a);
              }
            });
          }
        }
        return res;
      }
    },

    /**
     * Returns the first object matching the given filter in an array of objects.
     *
     * The filtering arguments follow the same scheme as bbn.fn.search.
     * 
     * @method    getRow
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     * ];
     * bbn.fn.getRow(ar, {director: "Steven Spielberg"});
     * // {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     * bbn.fn.getRow(ar, "director", "Steven Spielberg");
     * // Same result as the previous example
     * bbn.fn.getRow(ar, {
     *   logic: "OR",
     *   conditions: [
     *     {
     *        field: "director",
     *        value: "Richard Donner"
     *     }, {
     *        field: "director",
     *        value: "George Lucas"
     *     }
     *   ]
     * );
     * // {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     * ```
     * @memberof bbn.fn
     * @param    {Array}                    arr       The subject array
     * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
     * @param    {*}                        val       The value with which comparing the given property
     * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
     * @returns  {Object|Boolean}           The item if found, false otherwise
     */
    getRow(arr, prop, val, operator){
      var idx = bbn.fn.search(arr, prop, val, operator);
      if ( idx > -1 ){
        return arr[idx];
      }
      return false;
    },

    /**
     * Returns the value of the given field (property) from the first object matching the given filter in an array of objects.
     *
     * The filtering arguments follow the same scheme as bbn.fn.search.
     *
     * @method   getField
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     * ];
     * bbn.fn.getField(ar, "name", {id: 256});
     * // Star wars
     * bbn.fn.getField(ar, "name", "id", 689);
     * // Goonies
     * ```
     * @memberof bbn.fn
     * @param    {Array}                    arr       The subject array
     * @param    {String}                   field     The property from which the value is returned
     * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
     * @param    {*}                        val       The value with which comparing the given property
     * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
     * @returns  {*}
     */
    getField(arr, field, prop, val, operator) {
      var r;
      if (field && (r = bbn.fn. getRow(arr, prop, val, operator))) {
        return r[field];
      }

      return undefined;
    },

    /**
     * Returns an object with the original objects' properties starting with an alphanumeric character.
     * 
     * It is presumed that external libraries, bbn variables use prefixes such as _ or $ for
     * naming private properties; this returns a new object purged from these properties.
     * 
     * @method   removePrivateProp
     * @global
     * @example
     * ```javascript
     * bbn.fn.removePrivateProp({
     *   _bbn_timestamp: 1587269593987,
     *   name: "Wonka",
     *   fname: "Willy"
     * });
     * // {name: "Wonka", fname: "Willy"}
     * ```
     * @memberof bbn.fn
     * @param    {Object}  obj  The original object
     * @param    {Boolean} deep If true the function will be reapplied on object properties
     * @returns  {Object}  A new object without only the _public_ properties.
     */
    removePrivateProp(obj, deep){
      var r = false;
      if ( typeof(obj) === "object" ){
        r = {};
        for ( var n in obj ){
          if (bbn.fn.substr(n, 0, 1).match(/^[A-z0-9]$/) && Object.hasOwn(obj, n)) {
            if ( deep && (typeof(obj[n]) === "object")){
              r[n] = bbn.fn.removePrivateProp(obj[n], true);
            }
            else{
              r[n] = obj[n];
            }
          }
        }
      }
      return r;
    },

    /**
     * Returns the number of properties contained in the object.
     * 
     * Only takes into account the own properties - not the inherited ones - and the non _private_ ones.
     *
     * @method   numProperties
     * @global
     * @example
     * ```javascript
     * bbn.fn.numProperties({author: "Chuck Palahniuk", "title": "Fight club"});
     * // 2
     * ```
     * @example
     * ```javascript
     * bbn.fn.numProperties({username: "chuck", "password": "soap", _bbn_timestamp: 1587323193751});
     * // 2
     * @example
     * ```javascript
     * let d = new Date();
     * bbn.fn.numProperties(d);
     * // 0
     * d.myProp = 1;
     * bbn.fn.numProperties(d);
     * // 1
     * ```
     * @memberof bbn.fn
     * @param    {Object} obj The object to analyze
     * @returns  {Number} The number of properties
     */
    numProperties(obj) {
      let i = 0;
      if (!obj || (typeof obj !== 'object')) {
        return i;
      }
      return Object.keys(bbn.fn.removePrivateProp(obj)).length;
    },

    /**
     * Checks whether the data contained in the given objects is identical.
     * 
     * The properties starting with a non alphanumerical character and the 
     * inherited ones are removed for the comparison, then the properties are 
     * compared individually without the order being taken into account.
     *
     * @method   isSame
     * @global
     * @example
     * ```javascript
     * bbn.fn.isSame(
     *   {name: "Wonka", fname: "Willy"},
     *   {fname: "Willy", name: "Wonka"}
     * );
     * // true
     * ```
     * @example
     * ```javascript
     * // Doesn't take into account properties starting with non-alphanumeric characters
     * bbn.fn.isSame(
     *   {name: "Wonka", fname: "Willy", _bbn_timestamp: 1587269593987},
     *   {fname: "Willy", name: "Wonka"}
     * );
     * // true
     * ```
     * @example
     * ```javascript
     * bbn.fn.isSame(
     *   {name: "Wonka", fname: "Willy", real: false},
     *   {fname: "Willy", name: "Wonka"}
     * );
     * // false
     * ```
     * @memberof bbn.fn
     * @param    {Object} obj1
     * @param    {Object} obj2
     * @returns  {Boolean}
     */
    isSame(obj1, obj2){
      if ( obj1 === obj2 ){
        return true;
      }
      if ( obj1 && obj2 && (typeof(obj1) === 'object') && (typeof(obj2) === 'object') ){
        let tmp1 = Object.keys(bbn.fn.removePrivateProp(obj1)).sort(),
            tmp2 = Object.keys(bbn.fn.removePrivateProp(obj2)).sort();
        // Case where the keys are different
        if ( JSON.stringify(tmp1) !== JSON.stringify(tmp2) ){
          return false;
        }
        let ok = true;
        bbn.fn.each(tmp1, a => {
          if (!bbn.fn.isSame(obj1[a], obj2[a])) {
            ok = false;
            return false;
          }
        });
        return ok;
      }
      return false;
    },

    /**
     * Converts the given object 'filter' to a valid format of condition.
     * 
     * The resulting format will comply with bbn.fn.compareConditions and also with 
     * bbn databases functions and complex filters applied to bbn-vue list components.
     *
     * @method   filterToConditions
     * @global
     * @example
     * ```javascript
     * bbn.fn.filterToConditions({num: 3});
     * // {
     * //   logic: "AND",
     * //   conditions: [{
     * //     field: "num",
     * //     operator: "=",
     * //     value: 3
     * //   }]
     * // }
     * ```
     * @example
     * ```javascript
     * bbn.fn.filterToConditions({num: 3}, '>');
     * // {
     * //   logic: "AND",
     * //   conditions: [{
     * //     field: "num",
     * //     operator: ">",
     * //     value: 3
     * //   }]
     * // }
     * ```
     * @memberof bbn.fn
     * @param    {Object} filter
     * @param    {String} operator
     * @returns  {Object} 
     */
    filterToConditions(filter, operator){
      if ( !bbn.fn.isObject(filter) ){
        throw new Error("Error in bbn.fn.filterToCondition: filter must be an object");
      }
      if ( !filter.conditions || !bbn.fn.isArray(filter.conditions) ){
        let tmp = [];
        bbn.fn.iterate(filter, (a, n) => {
          if ( bbn.fn.isObject(a) && (typeof a.conditions === 'object') ){
            tmp.push(bbn.fn.filterToConditions(a));
          }
          else{
            tmp.push({
              field: n,
              operator: operator || '=',
              value: a
            });
          }
        });
        filter = {
          conditions: tmp
        };
      }
      if ( !filter.logic ){
        filter.logic = 'AND';
      }
      return filter;
    },

    /**
     * Checks whether the given data object complies or not with the given filter.
     * 
     * The filter format must be full (i.e. with the properties logic and conditions) such as
     * seen in the function bbn.fn.search and can be generated by the function bbn.fn.filterToConditions.
     *
     * @method   compareConditions
     * @global
     * @example
     * ```javascript
     * let item = {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589};
     * bbn.fn.compareConditions(item, {
     *   logic: "AND",
     *   conditions: [
     *     {
     *        field: "director",
     *        value: "Steven Spielberg"
     *     }
     *   ]
     * });
     * // true
     * bbn.fn.compareConditions(item, bbn.fn.filterToConditions({director: "Steven Soderberg"}));
     * // false
     * bbn.fn.compareConditions(item, bbn.fn.filterToConditions({director: "Steven Spielberg"}));
     * // true
     * bbn.fn.compareConditions(item, bbn.fn.filterToConditions({year: 1980}, ">"));
     * // true
     * bbn.fn.compareConditions(item, {
     *   logic: "AND",
     *   conditions: [
     *     {
     *        field: "year",
     *        operator: "<",
     *        value: 1980
     *     }
     *   ]
     * });
     * // false
     * ```
     * @memberof bbn.fn
     * @param    {Object} data
     * @param    {Object} filter
     * @returns  {Boolean}
     */
    compareConditions(data, filter){
      if ( !filter.conditions || !filter.logic || !bbn.fn.isArray(filter.conditions) ){
        throw new Error("Error in bbn.fn.compareConditions: the filter should an abject with conditions and logic properties and conditions should be an array of objects");
      }

      let ok = filter.logic === 'AND' ? true : false;
      bbn.fn.each(filter.conditions, (a) => {
        let compare;
        if ( a.conditions && bbn.fn.isArray(a.conditions) ){
          compare = bbn.fn.compareConditions(data, a);
        }
        else {
          compare = bbn.fn.compare(bbn.fn.getProperty(data, a.field), a.value, a.operator);
          if (compare) {
            let bits = a.field.split('.');
            let prop = bits.pop();
            if (bits.length) {
              bbn.fn.each(bits, b => data = data[b]);
            }
            // Case where both are undefined: value and prop which doesn't exist; they are not the same!
            if ((bbn.fn.getProperty(data, prop) === undefined) && (a.value !== undefined)) {
              compare = false;
            }
          }
        }
        if ( compare ){
          if ( filter.logic === 'OR' ){
            ok = true;
            return false;
          }
        }
        else if ( filter.logic === 'AND' ){
          ok = false;
          return false;
        }
      });
      return ok;
    },

    /**
     * Merges the contents of two or more objects together into the first object.
     * 
     * A boolean true argument can be done to operate a deep extend. In this case, 
     * the content of properties or subproperties arrays and objects will also be merged.
     *
     * @method   extend
     * @global
     * @example
     * ```javascript
     * bbn.fn.extend(
     *   {prop1: 10, prop2: 20},
     *   {prop1: 11, prop3: 21},
     *   {prop2: 22, prop4: false},
     *   {prop5: false, prop3: 45}
     * );
     * // {prop1: 11, prop2: 22, prop3: 45, prop4: false, prop5: false}
     * ```
     * @example
     * ```javascript
     * bbn.fn.extend(
     *   {
     *     prop1: [3, 5, 6],
     *     prop2: {
     *       subprop1: 87,
     *       subprop2: 100
     *     }
     *   }, {
     *     prop1: 11,
     *     prop3: [8, 12, {aProperty: 1, anotherProperty: true}, 26]
     *   }, {
     *     prop2: {
     *       subprop1: 90,
     *       subprop3: 25
     *     },
     *     prop4: false
     *   }, {
     *     prop5: false,
     *     prop3: [8, 45, {anotherProperty: false, andAnother: true}]
     *   }
     * );
     * // {
     * //   prop1: 11,
     * //   prop2: {subprop1: 90, subprop3: 25},
     * //   prop3: [8, 45, {anotherProperty: false, andAnother: true}],
     * //   prop4: false,
     * //   prop5: false
     * // }
     * ```
     * @example
     * ```javascript
     * // Deep
     * bbn.fn.extend(
     *   true, 
     *   {
     *     prop1: [3, 5, 6],
     *     prop2: {
     *       subprop1: 87,
     *       subprop2: 100
     *     }
     *   }, {
     *     prop1: 11,
     *     prop3: [8, 12, {aProperty: 1, anotherProperty: true}, 26]
     *   }, {
     *     prop2: {
     *       subprop1: 90,
     *       subprop3: 25
     *     },
     *     prop4: false
     *   }, {
     *     prop5: false,
     *     prop3: [8, 45, {anotherProperty: false, andAnother: true}]
     *   }
     * );
     * // {
     * //   prop1: 11,
     * //   prop2: {subprop1: 90, subprop3: 25},
     * //   prop3: [8, 45, {aProperty: 1, anotherProperty: false, andAnother: true}, 26],
     * //   prop4: false,
     * //   prop5: false
     * // }
     * ```
     * @memberof bbn.fn
     * @returns  {Object} The first object argument, merged with the other objects given
     */
    extend(){
      let deep = false;
      let args = [];
      for ( let i = 0; i < arguments.length; i++ ){
        if ( arguments[i] === true ){
          deep = true;
        }
        else if ( !arguments[i] ){
          continue;
        }
        else if ( typeof arguments[i] !== 'object' ){
          throw new Error(bbn._("Error in bbn.fn.extend: all arguments should be object, you have given ") + typeof(arguments[i]));
        }
        else{
          args.push(arguments[i]);
        }
      }
      if ( !args.length ){
        throw new Error("No argument given");
      }
      let out = args[0];
      for ( let i = 1; i < args.length; i++ ){
        bbn.fn.iterate(args[i], (a, key) => {
          if ( deep ){
            if ( bbn.fn.isArray(a) ){
              out[key] = bbn.fn.isArray(out[key]) ? out[key] : [];
              bbn.fn.each(a, (b, i) => {
                if ( b && (typeof b === 'object') ){
                  let tmp = out[key][i];
                  if (bbn.fn.isArray(b)) {
                    if (!bbn.fn.isArray(tmp)) {
                      tmp = [];
                    }
                  } 
                  else if (!bbn.fn.isObject(tmp)) {
                    tmp = {};
                  }
                  out[key][i] = bbn.fn.extend(true, tmp, b);
                }
                else{
                  out[key][i] = b;
                }
              });
            }
            else if ( bbn.fn.isObject(a) ){
              out[key] = bbn.fn.extend(true, out[key] && (typeof out[key] === 'object') ? out[key] : {}, a);
            }
            else{
              out[key] = a;
            }
          }
          else if ( out[key] !== a ){
            out[key] = a;
          }
        });
      }
      return out;
    },

    /**
     * Returns a new object made of the properties from all the given objects.
     * 
     * Compared to bbn.fn.extend this still treats the arguments from left to right 
     * but without overwriting existing properties, and returning a new object.
     *
     * @method   extendOut
     * @global
     * @example
     * ```javascript
     * //{field1: 1, field2: 2, field3: 3, items: {item: 0, item1: 1, item2: 2}, field4: 4}
     * bbn.fn.extendOut({field1: 1, field2: 2, field3: 3, items: {item: 0}}, {field4: 4, items: {item1: 1, item2: 2}});
     * ```
     * @memberof bbn.fn
     * @returns  {Object}
     */
    extendOut(){
      let r = null;
      for ( let a of arguments) {
        if (!bbn.fn.isObject(a)) {
          throw new Error("Each argument for bbn.fn.extendOut must be an object, " + typeof(arguments[i]) + " given");
        }

        if (r === null){
          r = a;
        }
        else{
          for ( let n in a ){
            if (bbn.fn.isObject(r[n], a[n])) {
              bbn.fn.extendOut(r[n], a[n]);
            }
            else if ( r[n] === undefined){
              r[n] = a[n];
            }
          }
        }
      }
      return r;
    },

    /**
     * Extends the bbn object by passing the namespace and the object it will merge with.
     * 
     * This function is a self-centric shortcut for adding functions or proerties 
     * to the bbn object itself.
     * 
     * @method   autoExtend
     * @global
     * @example
     * ```javascript
     * bbn.fn.autoExtend("fn", {myOwnFunction: () => "Result of my own function"});
     * bbn.fn.myOwnFunction();
     * // Result of my own function
     * ```
     * @example
     * ```javascript
     * bbn.fn.autoExtend("env", {serverLanguage: "php"});
     * bbn.env.sercerLanguage
     * // php
     * ```
     * @example
     * ```javascript
     * bbn.fn.autoExtend("myProject", {name: "My Project"});
     * bbn.myProject.name
     * // Project
     * ```
     * @memberof bbn.fn
     * @param    {String}    namespace The bbn property, existing or not, in which the object will be merged
     * @param    {Object}    obj       The object to merge
     * @returns  {undefined} No return value
     */
    autoExtend(namespace, obj){
      if ( !bbn[namespace] ){
        bbn[namespace] = {};
        //$.extend(true, bbn[namespace], obj);
        bbn.fn.extend(bbn[namespace], obj);
      }
      else {
       // $.extend(true, bbn[namespace], obj);
        bbn.fn.extend(bbn[namespace], obj);
      }
    },

    /**
     * Returns a new array, having removed all elements deemed empty from the given array.
     * 
     * Removes all the elements which are empty, i.e. false, 0, null, '', NaN, or undefined.
     *
     * @method   removeEmpty
     * @global
     * @example
     * ```javascript
     * bbn.fn.removeEmpty([{prop1: 10, prop2: 20}, '', {}, null, 1, undefined, 0, false, 25]);
     * // [{prop1: 10, prop2: 20}, 1, 25]
     * ```
     * @memberof bbn.fn
     * @param    {Array} arr
     * @returns  {Array}
     */
    removeEmpty(arr){
      var tmp = [];
      if ( bbn.fn.isArray(arr) ){
        for ( let i = 0; i < arr.length; i++ ){
          let ok = false;
          if ( arr[i] ){
            if (bbn.fn.isArray(arr[i])) {
              if (arr[i].length) {
                ok = true;
              }
            }
            else if (bbn.fn.isObject(arr[i])) {
              if (bbn.fn.numProperties(arr[i])) {
                ok = true;
              }
            }
            else {
              ok = true;
            }
          }
          if (ok) {
            tmp.push(arr[i]);
          }
        }
      }
      return tmp;
    },

    /**
     * Creates and returns a new array made of the given property's values from the given array of objects.
     * 
     * The returned array will always have the same length of the given array, even if the property is not found.
     * 
     * @method   arrayFromProp
     * @global
     * @example
     * ```javascript
     * bbn.fn.arrayFromProp([
     *   {movie: "Brazil", year: 1985},
     *   {movie: "Donnie Darko", year: 2001},
     *   {movie: "Barry Lindon", year: 1976}
     * ], "year");
     * // [1985, 2001, 1976]
     * ```
     * @example
     * ```javascript
     * bbn.fn.arrayFromProp([
     *   {pupil: "Agnes Varda", grade: {year: "B", month: "A"}},
     *   {pupil: "Jacques Rivette"},
     *   {pupil: "Luc Besson", grade: {year: "C", month: "D"}},
     *   {pupil: "Nicole Garcia", grade: {year: "B", month: "B"}}
     * ], "grade.month");
     * // ["A", undefined, "D", "B"]
     * ```
     * @memberof bbn.fn
     * @param    {Array}  arr
     * @param    {String} prop
     * @returns  {Array}  The new array
     */
    arrayFromProp(arr, prop){
      let r = [];
      bbn.fn.each(arr, (a, i) => {
        r.push(bbn.fn.getProperty(a, prop))
      });
      return r;
    },

    /**
     * Returns a random item from the given array.
     * 
     * @method   pickValue
     * @global
     * @example
     * ```javascript
     * bbn.fn.pickValue([1, 2, 3, 4, 5]);
     * // 1
     * bbn.fn.pickValue([1, 2, 3, 4, 5]);
     * // 5
     * bbn.fn.pickValue([1, 2, 3, 4, 5]);
     * // 4
     * ```
     * @memberof bbn.fn
     * @param    {Array} arr The array to pick from
     * @returns  {*}     The random value
     */
    pickValue(arr){
      if ( Array.isArray(arr) && arr.length ){
        return arr[Math.floor(Math.random() * arr.length)]
      }
    },

    /**
     * 
     * @param {Array} array 
     * @returns Array
     */
    shuffle(array) {
      let currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
    },

    /**
     * Returns an object describing the differences for transforming the first given object into the second.
     * 
     * The returned data will use the objects properties as keys. If unchanged is set to true, all the 
     * properties will be returned, otherwise only the different ones. Each of these keys will have the 
     * following properties: 
     * - type: can be _modified_, _created_, _deleted_, and if unchanged is set to true _unchanged_
     * - data: the first object's property's value, or the second if type is _created_
     * - newData: the second object's property's value in case of type _updated_
     *
     * @method   diffObj
     * @global
     * @example
     * ```javascript
     * bbn.fn.diffObj(
     *   {
     *     name: "Thomas", 
     *     age: 45
     *   }, {
     *     name: "Eva",
     *     sex: "Female",
     *     retired: false
     *   }
     * );
     * // {
     * //   name: {
     * //     type: "updated",
     * //     data: "Thomas",
     * //     newData: "Eva"
     * //   },
     * //   age: {
     * //     type: "deleted",
     * //     data: 45
     * //   },
     * //   sex: {
     * //     type: "created",
     * //     data: "Female"
     * //   },
     * //   retired: {
     * //     type: "created",
     * //     data: false
     * //   }
     * // }
     * ```
     * @example
     * ```javascript
     * bbn.fn.diffObj(
     *   {pupil: "Agnes Varda", grade: {year: "B", month: "A"}},
     *   {pupil: "Luc Besson", grade: {year: "C", month: "D"}}
     * );
     * // {
     * //   "pupil": {
     * //     "type": "updated",
     * //     "data": "Agnes Varda",
     * //     "newData": "Luc Besson"
     * //   },
     * //   "grade": {
     * //     "year": {
     * //       "type": "updated",
     * //       "data": "B",
     * //       "newData": "C"
     * //     },
     * //     "month": {
     * //       "type": "updated",
     * //       "data": "A",
     * //       "newData": "D"
     * //     }
     * //   }
     * // }
     * ```
     * @memberof bbn.fn
     * @param    {Object}  obj1
     * @param    {Object}  obj2
     * @param    {String}  unchanged
     * @param    {Boolean} notRoot
     * @returns  {Object}
     */
    diffObj(obj1, obj2, unchanged, notRoot){
      if (!notRoot) {
        diffObjProcessed = [];
      }

      let VALUE_CREATED = 'created',
          VALUE_UPDATED = 'updated',
          VALUE_DELETED = 'deleted',
          VALUE_UNCHANGED = 'unchanged',
          _compareValues = function(value1, value2) {
            if (value1 === value2) {
              return VALUE_UNCHANGED;
            }
            if (
              bbn.fn.isDate(value1) &&
              bbn.fn.isDate(value2) &&
              (value1.getTime() === value2.getTime())
            ){
              return VALUE_UNCHANGED;
            }
            if ('undefined' == typeof(value1)) {
              return VALUE_CREATED;
            }
            if ('undefined' == typeof(value2)) {
              return VALUE_DELETED;
            }
            return VALUE_UPDATED;
          };
      if ( notRoot === undefined ){
        notRoot = false;
      }

      let diff = bbn.fn.createObject();
      if ( !bbn.fn.isFunction(obj1) && !bbn.fn.isFunction(obj2) ){
        if (bbn.fn.isValue(obj1) || bbn.fn.isValue(obj2) ){
          let res = _compareValues(obj1, obj2);
          if ( unchanged || (res !== VALUE_UNCHANGED) ){
            let ret = bbn.fn.createObject();
            Object.defineProperty(ret, 'type', {
              value: res,
              enumerable: false
            });
            Object.defineProperty(ret, 'data', {
              value: (obj1 === undefined) ? obj2 : obj1,
              enumerable: false
            });
            Object.defineProperty(ret, '_bbnDiffObjProof', {
              value: true,
              enumerable: false
            });
            if ( obj1 !== undefined ){
              Object.defineProperty(ret, 'newData', {
                value: obj2,
                enumerable: false
              });
            }

            return ret;
          }

          return false;
        }

        if (bbn.fn.isDom(obj1) || bbn.fn.isDom(obj2) ){
          return false;
        }

        if (diffObjProcessed.includes(obj1) || diffObjProcessed.includes(obj2)) {
          //bbn.fn.error(bbn._("Can't compare objects because they contain circular references"));
          return false;
        }

        diffObjProcessed.push(obj1, obj2);

        for ( let key in obj1 ){
          if ( bbn.fn.isFunction(obj1[key]) ){
            continue;
          }

          let value2 = undefined;
          if ( 'undefined' != typeof(obj2[key]) ){
            value2 = obj2[key];
          }
          let res = bbn.fn.diffObj(obj1[key], value2, unchanged, true);
          if ( res ){
            diff[key] = res;
          }
        }
        for ( let key in obj2 ){
          if ( bbn.fn.isFunction(obj2[key]) || ('undefined' != typeof(obj1[key])) ){
            continue;
          }
          let res = bbn.fn.diffObj(undefined, obj2[key], unchanged, true);
          if ( res ){
            diff[key] = res;
          }
        }

      }

      return !notRoot || unchanged || bbn.fn.numProperties(diff) ? diff : false;
    },

    /**
     * Returns a function to give to JSON.stringify in order to avoid circular values.
     * 
     * @returns Function
     */
    circularReplacer() {
      const visited = new WeakSet();
      return (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (visited.has(value)) {
            return;
          }
          visited.add(value);
        }
        return value;
      };
    },

    /**
     * Makes a hash out of an object
     * @param {Object|Array} obj 
     * @returns {String}
     */
    hash(obj) {
      let st = 'bbn';
      for (let i in arguments) {
        if (arguments[i]) {
          st += JSON.stringify(arguments[i], bbn.fn.circularReplacer());
        }
      }

      return bbn.fn.md5(st);
    },
    /**
     * Executes the provided function on each element of the given array.
     * 
     * A minimum and a maximum value can be provided, within the boundaries of the 
     * array's indexes. Returning false will stop the loop.
     * 
     * @method   fori
     * @global   
     * @example
     * ```javascript
     * let res = 0;
     * bbn.fn.fori([4, 5, 5, 10, 1, 2], d => {
     *   res += d;
     * }, 3);
     * // res = 24
     * ```
     * @example
     * ```javascript
     * let res = 0;
     * bbn.fn.fori([4, 5, 5, 10, 1, 2], d => {
     *   if (res >= 20) {
     *     return false;
     *   }
     *   res += d;
     * }, 4, 1);
     * // res = 20
     * ```
     * @memberof bbn.fn
     * @param    {Array}     arr The array to loop on
     * @param    {Function}  fn  The function, gets the array's element and the index as arguments
     * @param    {Number}    max The index to which the loop will stop
     * @param    {Number}    min The index at which the loop will start
     * @returns  {undefined}
     */
    fori(arr, fn, max = arr.length - 1, min = 0) {
      if (bbn.fn.isArray(arr)) {
        let realMax = arr.length - 1;
        if (!bbn.fn.isNumber(max) || !(0 < max <= realMax)) {
          max = realMax;
        }
        if (!bbn.fn.isNumber(min) || !(0 <= min < realMax) || (min > max)) {
          min = 0;
        }
        for ( let i = min; i <= max; i++ ){
          if ( fn(arr[i], i) === false ){
            return;
          }
        }
      }
    },

    /**
     * Executes the provided function on each element of the given array, going backward.
     * 
     * A maximum and a minimum value can be provided, within the boundaries of the 
     * array's indexes. Returning false will stop the loop.
     * 
     * @method   forir
     * @global   
     * @example
     * ```javascript
     * let res = 0;
     * bbn.fn.forir([4, 5, 5, 10, 1, 2], d => {
     *   res += d;
     * }, 4, 2);
     * // res = 16
     * ```
     * @example
     * ```javascript
     * let res = 0;
     * bbn.fn.forir([4, 5, 5, 10, 1, 2], d => {
     *   if (res >= 20) {
     *     return false;
     *   }
     *   res += d;
     * });
     * // res = 23
     * ```
     * @memberof bbn.fn
     * @param    {Array}     arr The array to loop on
     * @param    {Function}  fn  The function, gets the array's element and the index as arguments
     * @param    {Number}    max The index to which the loop will stop
     * @param    {Number}    min The index at which the loop will start
     * @returns  {undefined}
     */
    forir(arr, fn, max = arr.length - 1, min = 0){
      if (bbn.fn.isArray(arr)) {
        let realMax = arr.length - 1;
        if (!bbn.fn.isNumber(max) || !(0 < max <= realMax)) {
          max = realMax;
        }
        if (!bbn.fn.isNumber(min) || !(0 <= min < realMax) || (min > max)) {
          min = 0;
        }
        for (let i = max; i >= min; i--) {
          if (fn(arr[i], i) === false) {
            return;
          }
        }
      }
    },

    /**
     * Executes the provided function on each element of the given array.
     * 
     * Returning false will stop the loop.
     *
     * @method   each
     * @global
     * @example
     * ```javascript
     * let res = 0;
     * bbn.fn.each([4, 5, 5, 10, 1, 2], d => {
     *   res += d;
     * });
     * // res = 27
     * ```
     * @example
     * ```javascript
     * let res = 0;
     * bbn.fn.each([4, 5, 5, 10, 1, 2], d => {
     *   if (res >= 20) {
     *     return false;
     *   }
     *   res += d;
     * });
     * // res = 24
     * ```
     * @memberof bbn.fn
     * @param    {*}     arr The array to loop on
     * @param    {Function}  fn  The function, gets the array's element and the index as arguments
     * @returns  {[Array, Object, void]}
     */
    each(arr, fn){
      if (bbn.fn.isNumber(arr) && (arr > 0)) {
        for (let i = 0; i < arr; i++) {
          if ( fn(i, i) === false ){
            return;
          }
        }

        return;
      }

      if ( bbn.fn.isIterable(arr) ){
        for ( let i = 0; i < arr.length; i++ ){
          if ( fn(arr[i], i) === false ){
            return;
          }
        }
        return arr;
      }

      return bbn.fn.iterate(arr, fn);
    },

    /**
     * Executes the provided function on each property of the given object.
     *
     * @method   iterate
     * @global
     * @example
     * ```javascript
     * //["value1", 2]
     * let arr = [];
     * bbn.fn.iterate({field1: "value1", field2: 2}, (val, idx) => {
     *   arr.push(value);
     * });
     * ```
     * @memberof bbn.fn
     * @param    {(Object|Number)} obj       The object to loop on
     * @param    {Function}        fn        The function, gets the array's element and the index as arguments
     * @param    {Boolean}         noPrivate If set to true the _private_ properties won't be included
     * @returns  {Object}
     */
    iterate(obj, fn, noPrivate) {
      if ((obj !== null) && (typeof obj === 'object')) {
        let iter = Object.keys(noPrivate ? bbn.fn.removePrivateProp(obj) : obj);
        bbn.fn.each(iter, prop => {
          if (fn(obj[prop], prop) === false) {
            return false;
          }
        });
      }

      return obj;
    },

    /**
     * Creates and returns a perfect clone - but different - from the given object.
     *
     * @method   clone
     * @global
     * @example
     * ```javascript
     * let obj = {name: "Thomas"};
     * let objCopy = bbn.fn.clone(obj);
     * obj.name = "Julie";
     * // obj:     {name: "Julie"}
     * // objCopy: {name: "Thomas"}
     * ```
     * @memberof bbn.fn
     * @param    {Object} obj The source object
     * @returns  {Object} A new object
     */
    clone(obj){
      if ( bbn.fn.isArray(obj) ){
        return obj.slice().map((a) => {
          return typeof(a) === 'object' ? bbn.fn.clone(a) : a;
        });
      }

      if ( bbn.fn.isObject(obj) ){
        const o = Object.create(Object.getPrototypeOf(obj))
        return bbn.fn.extend(true, o, obj);
      }

      return obj;

    },

    /**
     * Returns a new array generated by the execution of a function for each item of the given array.
     * 
     * The deepProp argument is the name of property which should contain a nested array on which
     * the function should also be applied recursively.
     * 
     * @method   map
     * @global
     * @example
     * ```javascript
     * bbn.fn.map([1, 2, 3, 4], a => {
     *   return a + 1;
     * });
     * // [2, 3, 4, 5]
     * ```
     * @example
     * ```javascript
     * bbn.fn.map(
     *   [{
     *     name: "tools",
     *     items: [
     *       {
     *          name: "hammers"
     *       }, {
     *          name: "screwdrivers",
     *          items: [
     *            {name: "flat screwdrivers"},
     *            {name: "slotted screwdrivers"},
     *            {name: "Hex screwdrivers"},
     *          ]
     *       }
     *     ]
     *   }, {
     *     name: "Kitchenware"
     *   }],
     *   d => {
     *     d.warranty = d.name === "Hex screwdrivers" ? "10 years" : "1 year";
     *     return d;
     *   },
     *   "items"
     * );
     * // [
     * //    {
     * //       name: "tools",
     * //       warranty: "1 year",
     * //       items: [
     * //         {
     * //            name: "hammers",
     * //            warranty: "1 year",
     * //         }, {
     * //            name: "screwdrivers",
     * //            warranty: "1 year",
     * //            items: [
     * //              {name: "flat screwdrivers", warranty: "1 year"},
     * //              {name: "slotted screwdrivers", warranty: "1 year"},
     * //              {name: "Hex screwdrivers", warranty: "10 year"},
     * //            ]
     * //         }
     * //       ]
     * //    }, {
     * //       name: "Kitchenware",
     * //       warranty: "1 year"
     * //    }
     * // ]
     * ```
     * @memberof bbn.fn
     * @param    {Array}    arr
     * @param    {Function} fn
     * @param    {Boolean}  deepProp
     * @param    {Number}   level
     * @returns  {Array}
     */
    map(arr, fn, deepProp, level = 0){
      return arr.map((a, i) => {
        a = fn(a, i, level);
        if ( deepProp && a[deepProp] && bbn.fn.isArray(a[deepProp]) ){
          a[deepProp] = bbn.fn.map(a[deepProp], fn, deepProp, level + 1);
        }
        return a;
      });
    },

    /**
     * Parses XML and returns an object.
     * 
     * Picked from https://stackoverflow.com/questions/4200913/xml-to-javascript-object
     * 
     * @memberof bbn.fn
     * @param   {String} xml       The XML to be parsed
     * @param   {Array}  arrayTags An array of tag names which should always be returned as array (even if single)
     * @returns {Object}
     */
    fromXml(xml, arrayTags) {
      let dom = null;
      if (window.DOMParser) dom = (new DOMParser()).parseFromString(xml, "text/xml");
      else if (window.ActiveXObject) {
          dom = new ActiveXObject('Microsoft.XMLDOM');
          dom.async = false;
          if (!dom.loadXML(xml)) throw dom.parseError.reason + " " + dom.parseError.srcText;
      }
      else throw new Error("cannot parse xml string!");
  
      function parseNode(xmlNode, result) {
          if (xmlNode.nodeName == "#text") {
              let v = xmlNode.nodeValue;
              if (v.trim()) result['#text'] = v;
              return;
          }
  
          let jsonNode = {},
              existing = result[xmlNode.nodeName];
          if (existing) {
              if (!Array.isArray(existing)) result[xmlNode.nodeName] = [existing, jsonNode];
              else result[xmlNode.nodeName].push(jsonNode);
          }
          else {
              if (arrayTags && arrayTags.indexOf(xmlNode.nodeName) != -1) result[xmlNode.nodeName] = [jsonNode];
              else result[xmlNode.nodeName] = jsonNode;
          }
  
          if (xmlNode.attributes) for (let attribute of xmlNode.attributes) jsonNode[attribute.nodeName] = attribute.nodeValue;
  
          for (let node of xmlNode.childNodes) parseNode(node, jsonNode);
      }
  
      let result = {};
      for (let node of dom.childNodes) parseNode(node, result);
  
      return result;
    },

    /**
     * Returns a CSV string from the given array of arrays or objects.
     *
     * @method   toCSV
     * @global
     * @example
     * ```javascript
     * bbn.fn.toCSV([['a', 'b', 'c'], ['d', 'e', 'f']]);
     * // "a","b","c";
     * // "d","e","f"
     * ```
     * @example
     * ```javascript
     * bbn.fn.toCSV([{name: "Capuche", fname: "Marc-Antoine"}, {name: "Orfin", fname: "Louis"}]);
     * // "Capuche","Marc-Antoine";
     * // "Orfin","Louis"
     * ```
     * @memberof bbn.fn
     * @param    {Array}  arr        The array to convert
     * @param    {String} [valSep=,] The value separator character
     * @param    {String} [rowSep=;] The row separator character
     * @param    {String} [valEsc="] The string escaper character
     * @returns  {String} A CSV string
     */
    toCSV(arr, valSep = ',', rowSep = '', valEsc = '"'){
      if ( !valSep ){
        valSep = ',';
      }
      if ( !valEsc ){
        valEsc = '"';
      }
      let csvContent = '';
      let total = arr.length;
      bbn.fn.each(arr, (a, i) => {
        let num = bbn.fn.isArray(a) ? a.length : Object.values(a).length;
        let j = 0;
        bbn.fn.each(a, (b) => {
          if ( typeof b === 'string' ){
            csvContent += valEsc + bbn.fn.replaceAll(valEsc, '\\' + valEsc, b) + valEsc;
          }
          else if ( b === 0 ){
            csvContent += '0';
          }
          else if ( !b ){
            csvContent += valEsc + valEsc;
          }
          else{
            csvContent += b.toString ? b.toString() : valEsc + valEsc;
          }
          j++;
          if ( j < num ){
            csvContent += valSep;
          }
        });
        if ( i < total - 1 ){
          csvContent += rowSep + "\n";
        }
      })
      return csvContent;
    },

    /**
     * Shortens all the strings contained in the object properties or element in a array.
     * 
     * Modifies directly the given object by cuttin all its too long strings, and adding ellipsis (...) in this case.
     *
     * @method   shortenObj
     * @global
     * @example
     * ```javascript
     * bbn.fn.shortenObj({
     *   title: "Once upon a time in the west",
     *   synopsis: "There's a single piece of land around Flagstone with water on it, and rail baron Morton (Gabriele Ferzetti) aims to have it, knowing the new railroad will have to stop there. He sends his henchman Frank (Henry Fonda) to scare the land's owner, McBain (Frank Wolff), but Frank kills him instead and pins it on a known bandit, Cheyenne (Jason Robards). Meanwhile, a mysterious gunslinger with a score to settle (Charles Bronson) and McBain's new wife, Jill (Claudia Cardinale), arrive in town."
     * }, 50)
     * // {
     * //   "title": "Once upon a time in the west",
     * //   "synopsis": "There's a single piece of land around Flagstone wi..."
     * // }
     * ```
     * @memberof bbn.fn
     * @param    {(Object|Array)} obj
     * @param    {Number}         [max=100]
     * @returns  {(Object|Array)} The same object, modified
     */
    shortenObj(obj, max = 100){
      let o = bbn.fn.clone(obj);
      bbn.fn.each(o, (a, n) => {
        if (bbn.fn.isString(a) && (a.length > max)) {
          o[n] = bbn.fn.shorten(a, max);
        }
        else if (a && (typeof a === 'object')) {
          o[n] = bbn.fn.shortenObj(a);
        }
      });
      return o;
    },

    createObject() {
      const obj = Object.create(null);
      if (arguments.length) {
        bbn.fn.extend(obj, ...arguments);
      }

      return obj;
    },

    /**
     * Sets a given property on the given object
     * 
     * @param {Object} obj 
     * @param {String} prop 
     * @param {*} value 
     * @param {Boolean} writable 
     * @param {Boolean} configurable 
     */
    setProp(obj, prop, value, writable = true, configurable = true) {
      checkType(prop, "string");
      checkType(obj, "object");
      Object.defineProperty(obj, prop, {
        value: value,
        writable: writable,
        configurable: configurable
      });
    },

    /**
     * Gets the given property from the given object
     * @param {Object} obj 
     * @param {String} prop 
     * @returns 
     */
    getProp(obj, prop) {
      checkType(obj, "object");
      checkType(prop, "string");
      return obj[prop];
    },

    /**
     * Gets the given property from the given object
     * @param {Object} obj 
     * @param {String} prop 
     * @returns 
     */
    deleteProp(obj, prop) {
      checkType(obj, "object");
      checkType(prop, "string");
      delete obj[prop];
    },


    /**
     * Compares the given property in the given objects and returns -1, 1, or 0 depending on their difference.
     * 
     * This is only used as a sorting function by bbn.fn.order and bbn.fn.multiorder.
     *
     * @method   _compareValues
     * @global
     * @example
     * ```javascript
     * // Same value
     * bbn.fn._compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'value');
     * // 0
     * ```
     * @example
     * ```javascript
     * // First value smaller than second
     * bbn.fn._compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'year');
     * // -1
     * ```
     * @example
     * ```javascript
     * // First value greater than second
     * bbn.fn._compareValues({year: 2017, value: 2}, {year: 2016, value: 2}, 'year');
     * // 1
     * ```
     * @example
     * ```javascript
     * // First value is undefined
     * bbn.fn._compareValues({year: 2017}, {year: 2016, value: 2}, 'value');
     * // 1
     * ```
     * @memberof bbn.fn
     * @param    {Object} a    First object for comparison
     * @param    {Object} b    Second object for comparison
     * @param    {String} prop Property to compare
     * @param    {String} [dir=asc]  Direction of comparison (desc or asc by default)
     * @returns  {Number} Always either -1, 1, or 0
     */
    _compareValues(a, b, prop, dir = 'asc') {
      let va = bbn.fn.getProperty(a, prop),
          vb = bbn.fn.getProperty(b, prop),
          ta = (typeof (va)).toLowerCase(),
          tb = (typeof (vb)).toLowerCase();
      if ((dir !== 'asc') && bbn.fn.isString(dir) && (dir.toLowerCase() === 'desc')) {
        dir = 'desc';
      }
      if (ta !== tb) {
        va = ta;
        vb = tb;
      }
      else {
        switch (ta) {
          case 'string':
            va = bbn.fn.removeAccents(va).toLowerCase();
            vb = bbn.fn.removeAccents(vb).toLowerCase();
            break;
          case 'boolean':
            va = va ? 1 : 0;
            vb = vb ? 1 : 0;
            break;
          case 'object':
            if (bbn.fn.isDate(va)) {
              va = va.getTime();
              vb = bbn.fn.isDate(vb) ? vb.getTime() : 0;
            }
            break;
        }
      }
      if (va < vb) {
        return dir === 'desc' ? 1 : -1;
      }
      if (va > vb) {
        return dir === 'desc' ? -1 : 1;
      }
      return 0;
    },

  });
})(bbn);



/**
 * @file   Size and resizing.
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
     * Resizes the environment by assigning it the effective height and width of the window.
     * @global   
     * @example 
     * ```javascript
     * bbn.fn.resize();
     * ```
     * @method   resize
     * @memberof bbn.fn
     */
    resize(){
      let diffW = bbn.env.width !== window.innerWidth;
      let diffH = bbn.env.height !== window.innerHeight;
      if (diffW || diffH){
        if (diffW) {
          bbn.env.width = window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth;
          document.documentElement.style.setProperty('--vw', (bbn.env.width * 0.01) + 'px');
        }
        if (diffH) {
          bbn.env.height = window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight;
          document.documentElement.style.setProperty('--vh', (bbn.env.height * 0.01) + 'px');
        }

        let smallWidth = bbn.fn.getCssVar('mobile-limit') || 650;
        let newCls = 'bbn-screen-' + (bbn.env.width < parseInt(smallWidth)  ? 'small' : 'regular');
        let classes = (document.body.className || '').split(' ');
        let done = false;
        bbn.fn.each(classes, (cls, idx) => {
          let bits = cls.split('-');
          if ((bits.length === 3) && (cls.indexOf('bbn-screen-') === 0)) {
            done = true;
            if (cls !== newCls) {
              classes.splice(idx, 1, newCls);
            }
            return false;
          }
        });
        if (!done) {
          classes.push(newCls);
        }

        document.body.className = classes.join(' ');
        bbn.fn.defaultResizeFunction();
      }
    },

    /**
     * Returns the value of size for element html
     *
     * If the argument passed is a number it will return the value expressed in 'px' otherwise if string returns this ose nothing is passed it will return 'auto'.
     *
     * @method   formatSize
     * @global
     *
     *
     * @memberof bbn.fn
     * @param    {String|Number} st
     * @returns  {String}
     */
    formatSize(st, noValid){
      if (bbn.fn.isNumber(st)) {
        return st + 'px';
      }
      if (bbn.fn.isString(st)) {
        return st;
      }
      return noValid ? false : 'auto';
    },

    /**
     * Toggles the fullscreen mode.
     * 
     * @method   toggleFullScreen
     * @global   
     * 
     * @example 
     * ```javascript
     * // Straight forward isn't it?
     * bbn.fn.toggleFullScreen();
     * ```
     * @memberof bbn.fn
     */
    toggleFullScreen(){
      if ( window.document.documentElement.mozRequestFullScreen ){
        if ( window.document.mozFullScreen ){
          window.document.mozCancelFullScreen();
        }
        else{
          window.document.documentElement.mozRequestFullScreen();
        }
      }
      else if ( window.document.documentElement.webkitRequestFullScreen ){
        if ( window.document.webkitIsFullScreen ){
          window.document.webkitCancelFullScreen();
        }
        else{
          window.document.documentElement.webkitRequestFullScreen();
        }
      }
      else if ( window.document.msRequestFullScreen ){
        if ( window.document.msFullscreenEnabled ){
          window.document.msExitFullscreen();
        }
        else{
          window.document.documentElement.msRequestFullScreen();
        }
      }
      else if ( window.document.requestFullscreen ){
        if ( window.document.fullscreenEnabled ){
          window.document.exitFullscreen();
        }
        else{
          window.document.documentElement.requestFullscreen();
        }
      }
      setTimeout(function(){
        bbn.fn.resize();
      }, 0);
    },

    /**
     * Retutns the size of the scrollbar realative to the current environment.
     * @method   getScrollBarSize
     * @global   
     * @example 
     * ```javascript
     * bbn.fn.getScrollBarSize();
     * // 16
     * ```
     * @memberof bbn.fn
     * @returns  {Number} 
     */
    getScrollBarSize(){
      if ( bbn.env.scrollBarSize === undefined ){
        let outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

        document.body.appendChild(outer);

        let widthNoScroll = outer.offsetWidth;
        // force scrollbars
        outer.style.overflow = "scroll";

        // add innerdiv
        let inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);

        let widthWithScroll = inner.offsetWidth;

        // remove divs
        outer.parentNode.removeChild(outer);

        let sz = widthNoScroll - widthWithScroll;
        bbn.env.scrollBarSize = sz ? sz + 1 : 0;
      }
      return bbn.env.scrollBarSize;
    },

    /**
     * Adjusts the size of the given elements.
     * 
     * @method   adjustSize
     * @todo Take the padding into account
     * @global   
     * @memberof bbn.fn
     * 
     * @example 
     * ```html
     * <div class="container">
     *   <div style="float: left; width: 25%; background-color: red">
     *     This is a random text
     *   </div>
     *   <div style="float: left; width: 25%; background-color: blue">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     *   <div style="float: left; width: 25%; background-color: green">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     *   <div style="float: left; width: 25%; background-color: yellow">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     * </div>
     * <script>
     * bbn.fn.adjustSize('height', document.body.querySelectorAll('.container > div'));
     * </script>
     * ```
     * 
     * @param    {String} type The dimension to adjust
     * @param    {Array} eles The elements to adjust for the dimension
     * 
     * @returns  
     */
    adjustSize(type, eles){
      let max = 0,
          idx;
      bbn.fn.each(eles, (el) => {
        el.style[type] = 'auto';
      });
      bbn.fn.each(eles, (el, i) => {
        let rect = el.getBoundingClientRect(),
            s = rect[type] % 1 ? (rect[type] - (rect[type] % 1) + 1) : rect[type];
            //s = rect[type];
        if (s > max) {
          max = s;
          idx = i;
        }
      });
      bbn.fn.each(eles, (el, i) => {
        if (max){
          el.style[type] = max + 'px';
        }
      });
    },

    /**
     * Adjusts the height of the element(s) given as argument.
     * @method   adjustHeight
     * @global   
     * @memberof bbn.fn
     * 
     * @example 
     * ```html
     * <div class="container">
     *   <div style="float: left; width: 25%; background-color: red">
     *     This is a random text
     *   </div>
     *   <div style="float: left; width: 25%; background-color: blue">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     *   <div style="float: left; width: 25%; background-color: green">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     *   <div style="float: left; width: 25%; background-color: yellow">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     * </div>
     * <script>
     * bbn.fn.adjustHeight(document.body.querySelectorAll('.container > div'));
     * </script>
     * ```
     * 
     * @returns  
     */
    adjustHeight(){
      let args = arguments;
      if ( (args.length === 1) && bbn.fn.isIterable(args[0]) ){
        args = args[0];
      }
      return bbn.fn.adjustSize('height', args);
    },

    /**
     * Adjusts the width of the element(s) given as argument.
     * 
     * @method   adjustWidth
     * @global   
     * @memberof bbn.fn
     * 
     * @example 
     * ```html
     * <div class="container">
     *   <div style="float: left; background-color: red">
     *     This is a random text
     *   </div>
     *   <div style="float: left; background-color: blue">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     *   <div style="float: left; background-color: green">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     *   <div style="float: left; background-color: yellow">
     *     This is a random text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
     *   </div>
     * </div>
     * <script>
     * bbn.fn.adjustWidth(document.body.querySelectorAll('.container > div'));
     * </script>
     * ```
     * 
     * @returns  
     */
    adjustWidth(){
      let args = arguments;
      if ( (args.length === 1) && bbn.fn.isIterable(args[0]) ){
        args = args[0];
      }
      return bbn.fn.adjustSize('width', args);
    }
  });
})(bbn);



/**
 * @file   String operations.
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
     * Gets the extension from a file's name.
     *
     * The extension is returned in lower case; if the filename has no extension
     * or is not valid it will return an empty string.
     *
     * @method   fileExt
     * @global
     *
     * @example
     * ```javascript
     * // "txt"
     * bbn.fn.fileExt('my_file.txt')
     * ```
     *
     * @example
     * ```javascript
     * // "txt"
     * bbn.fn.fileExt('MY_FILE.TXT')
     * ```
     *
     * @example
     * ```javascript
     * // ""
     * bbn.fn.fileExt('MY_FILE')
     * ```
     *
     * @example
     * ```javascript
     * // ""
     * bbn.fn.fileExt('.MY_FILE')
     * ```
     *
     * @param   {String} filename
     * @returns {String} The file's extension
     */
    fileExt(filename) {
      if (filename && bbn.fn.isString(filename)) {
        let bits = filename.split('.');
        if (bits[0] && (bits.length > 1)) {
          return bits[bits.length - 1].toLowerCase();
        }
      }
      return '';
    },
    /**
     * Create a unique string in md5 format.
     *
     * Converts and return all the arguments inserted in a unique string in md5 format.
     *
     * @method   uniqString
     * @global
     *
     * @example
     * ```javascript
     * //"6cb083da4d4987af9b4fa4ad8ca23bb1"
     * bbn.fn.uniqString('test',['test'],{id:1, test:2},4);
     * ```
     * @memberof bbn.fn
     * @returns  {String} The unique string in md5 format
     */
    uniqString(){
      var st = '';
      for ( var i = 0; i < arguments.length; i++ ){
        if (!arguments[i]) {
          st += '__bbn_empty__';
        }
        else if ( typeof(arguments[i]) === 'object' ){
          if (bbn.fn.isArray(arguments[i])) {
            st += JSON.stringify(arguments[i]);
          }
          else{
            // An object with the same properties, even in different order, should produce the same answer
            let tmp = {};
            let ks = Object.keys(arguments[i]).sort();
            bbn.fn.each(ks, k => {
              tmp[k] = arguments[i][k];
            });
            st += JSON.stringify(tmp);
          }
        }
        else if ( typeof(arguments[i]) !== 'string' ){
          st += arguments[i].toString();
        }
        else{
          st += arguments[i];
        }
      }
      return bbn.fn.md5(st);
    },

    /**
     * Converts and returns the argument passed in a string in md5 format.
     *
     * This is a formatted version of popular md5 implementation
     * Original copyright (c) Paul Johnston & Greg Holt.
     *
     *
     * @method   md5
     * @global
     *
     * @example
     * ```javascript
     * //"486eb65274adb86441072afa1e2289f3"
     * bbn.fn.md5("this is a test string");
     * ```
     *
     * @memberof bbn.fn
     * @param    {Mixed} st
     * @returns  {String} in md5 format
     */
    md5(st){
      var hc="0123456789abcdef";
      function rh(n) {var j,s="";for(j=0;j<=3;j++) s+=hc.charAt((n>>(j*8+4))&0x0F)+hc.charAt((n>>(j*8))&0x0F);return s;}
      function ad(x,y) {var l=(x&0xFFFF)+(y&0xFFFF);var m=(x>>16)+(y>>16)+(l>>16);return (m<<16)|(l&0xFFFF);}
      function rl(n,c)            {return (n<<c)|(n>>>(32-c));}
      function cm(q,a,b,x,s,t)    {return ad(rl(ad(ad(a,q),ad(x,t)),s),b);}
      function ff(a,b,c,d,x,s,t)  {return cm((b&c)|((~b)&d),a,b,x,s,t);}
      function gg(a,b,c,d,x,s,t)  {return cm((b&d)|(c&(~d)),a,b,x,s,t);}
      function hh(a,b,c,d,x,s,t)  {return cm(b^c^d,a,b,x,s,t);}
      function ii(a,b,c,d,x,s,t)  {return cm(c^(b|(~d)),a,b,x,s,t);}
      function sb(x) {
          var i;var nblk=((x.length+8)>>6)+1;var blks=new Array(nblk*16);for(i=0;i<nblk*16;i++) blks[i]=0;
          for(i=0;i<x.length;i++) blks[i>>2]|=x.charCodeAt(i)<<((i%4)*8);
          blks[i>>2]|=0x80<<((i%4)*8);blks[nblk*16-2]=x.length*8;return blks;
      }
      var i,x=sb(st),a=1732584193,b=-271733879,c=-1732584194,d=271733878,olda,oldb,oldc,oldd;
      for(i=0;i<x.length;i+=16) {olda=a;oldb=b;oldc=c;oldd=d;
          a=ff(a,b,c,d,x[i+ 0], 7, -680876936);d=ff(d,a,b,c,x[i+ 1],12, -389564586);c=ff(c,d,a,b,x[i+ 2],17,  606105819);
          b=ff(b,c,d,a,x[i+ 3],22,-1044525330);a=ff(a,b,c,d,x[i+ 4], 7, -176418897);d=ff(d,a,b,c,x[i+ 5],12, 1200080426);
          c=ff(c,d,a,b,x[i+ 6],17,-1473231341);b=ff(b,c,d,a,x[i+ 7],22,  -45705983);a=ff(a,b,c,d,x[i+ 8], 7, 1770035416);
          d=ff(d,a,b,c,x[i+ 9],12,-1958414417);c=ff(c,d,a,b,x[i+10],17,     -42063);b=ff(b,c,d,a,x[i+11],22,-1990404162);
          a=ff(a,b,c,d,x[i+12], 7, 1804603682);d=ff(d,a,b,c,x[i+13],12,  -40341101);c=ff(c,d,a,b,x[i+14],17,-1502002290);
          b=ff(b,c,d,a,x[i+15],22, 1236535329);a=gg(a,b,c,d,x[i+ 1], 5, -165796510);d=gg(d,a,b,c,x[i+ 6], 9,-1069501632);
          c=gg(c,d,a,b,x[i+11],14,  643717713);b=gg(b,c,d,a,x[i+ 0],20, -373897302);a=gg(a,b,c,d,x[i+ 5], 5, -701558691);
          d=gg(d,a,b,c,x[i+10], 9,   38016083);c=gg(c,d,a,b,x[i+15],14, -660478335);b=gg(b,c,d,a,x[i+ 4],20, -405537848);
          a=gg(a,b,c,d,x[i+ 9], 5,  568446438);d=gg(d,a,b,c,x[i+14], 9,-1019803690);c=gg(c,d,a,b,x[i+ 3],14, -187363961);
          b=gg(b,c,d,a,x[i+ 8],20, 1163531501);a=gg(a,b,c,d,x[i+13], 5,-1444681467);d=gg(d,a,b,c,x[i+ 2], 9,  -51403784);
          c=gg(c,d,a,b,x[i+ 7],14, 1735328473);b=gg(b,c,d,a,x[i+12],20,-1926607734);a=hh(a,b,c,d,x[i+ 5], 4,    -378558);
          d=hh(d,a,b,c,x[i+ 8],11,-2022574463);c=hh(c,d,a,b,x[i+11],16, 1839030562);b=hh(b,c,d,a,x[i+14],23,  -35309556);
          a=hh(a,b,c,d,x[i+ 1], 4,-1530992060);d=hh(d,a,b,c,x[i+ 4],11, 1272893353);c=hh(c,d,a,b,x[i+ 7],16, -155497632);
          b=hh(b,c,d,a,x[i+10],23,-1094730640);a=hh(a,b,c,d,x[i+13], 4,  681279174);d=hh(d,a,b,c,x[i+ 0],11, -358537222);
          c=hh(c,d,a,b,x[i+ 3],16, -722521979);b=hh(b,c,d,a,x[i+ 6],23,   76029189);a=hh(a,b,c,d,x[i+ 9], 4, -640364487);
          d=hh(d,a,b,c,x[i+12],11, -421815835);c=hh(c,d,a,b,x[i+15],16,  530742520);b=hh(b,c,d,a,x[i+ 2],23, -995338651);
          a=ii(a,b,c,d,x[i+ 0], 6, -198630844);d=ii(d,a,b,c,x[i+ 7],10, 1126891415);c=ii(c,d,a,b,x[i+14],15,-1416354905);
          b=ii(b,c,d,a,x[i+ 5],21,  -57434055);a=ii(a,b,c,d,x[i+12], 6, 1700485571);d=ii(d,a,b,c,x[i+ 3],10,-1894986606);
          c=ii(c,d,a,b,x[i+10],15,   -1051523);b=ii(b,c,d,a,x[i+ 1],21,-2054922799);a=ii(a,b,c,d,x[i+ 8], 6, 1873313359);
          d=ii(d,a,b,c,x[i+15],10,  -30611744);c=ii(c,d,a,b,x[i+ 6],15,-1560198380);b=ii(b,c,d,a,x[i+13],21, 1309151649);
          a=ii(a,b,c,d,x[i+ 4], 6, -145523070);d=ii(d,a,b,c,x[i+11],10,-1120210379);c=ii(c,d,a,b,x[i+ 2],15,  718787259);
          b=ii(b,c,d,a,x[i+ 9],21, -343485551);a=ad(a,olda);b=ad(b,oldb);c=ad(c,oldc);d=ad(d,oldd);
      }
      return rh(a)+rh(b)+rh(c)+rh(d);
    },

    /**
     * Returns a string escaped.
     *
     * To escape the string by reducing the ambiguity between quotation marks and other characters used.
     *
     * @method   escapeRegExp
     * @global
     *
     * @example
     * ```javascript
     * //"this\/is\/a\/test\/string"
     * bbn.fn.escapeRegExp("this/is/a/test/string");
     * ```
     * @memberof bbn.fn
     * @param    {String} str
     * @returns  {String} string with escape
     */
    escapeRegExp(str){
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    },

    /**
     * @method   roundDecimal
     * @todo     Add method description for roundDecimal
     * @global
     * @memberof bbn.fn
     * @param    {Number} value
     * @param    {Number} decimals
     * @returns  {}
     */
    roundDecimal(value, decimals){
      return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    },

    /**
     * Convert an RGB string to hexadecimal.
     *
     * Passing a string with the format that defines the rgb value as an argument,
     * it will return the corresponding string in hexadecimal format.
     *
     * @method   rgb2hex
     * @global
     *
     * @example
     * ```javascript
     * //"#ff0000"
     * bbn.fn.rgb2hex("rgb(255, 0, 0)");
     * ```
     * @memberof bbn.fn
     * @param    {String} rgb
     * @returns  {String}
     */
    rgb2hex(rgb){
      rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    },

    /**
     * Convert an hexadecimmal string to RGB.
     *
     * Converts a string that expresses a color in hexadecimal format into an object with
     * the properties that define the color and the corresponding value.
     *
     * @method   hex2rgb
     * @global
     *
     * @example
     * ```javascript
     * //{r:255, g:0, b:0}
     * bbn.fn.hex2rgb("#FF0000");
     * ```
     *
     * @memberof bbn.fn
     * @returns  {*}
     */
    hex2rgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    },

    /**
     * Returns the string passed as an argument in camelize mode.
     *
     * A string can be separated for example by a underscore, a dash or space;
     * so the camelize function will automatically convert them to a single string.
     *
     * @method   camelize
     * @global
     *
     * @example
     * ```javascript
     * //"thisIsATest"
     * bbn.fn.camelize("this_is-a test");
     * ```
     * @memberof bbn.fn
     * @param    {String} str
     * @returns  {String}
     */
    camelize(str){
      return str.replace(/^([A-Z])|[\s-_](\w)/g, function(match, p1, p2, offset){
        if ( p2 ){
          return p2.toUpperCase();
        }
        return p1.toLowerCase();
      });
    },

    trim(str, hair = ' ') {
      if (hair === ' ') {
        return str.trim();
      }

      if (!hair) {
        return str;
      }

      if (hair === str) {
        return '';
      }

      while (str.indexOf(hair) === 0) {
        str = bbn.fn.substr(str, hair.length);
      }

      while (str.lastIndexOf(hair) === str.length - hair.length) {
        str = bbn.fn.substr(str, 0, str.length - hair.length);
      }

      return str;
    },

    /**
     * Removes all unacceptable characters in a DOM node.
     *
     * @method   sanitize
     * @global
     *
     * @example
     * ```javascript
     * //"this_is_a_test"
     * bbn.fn.sanitize("this&is_$a^test");
     * ```
     *
     * @memberof bbn.fn
     * @returns  {String} str
     */
    sanitize(str, separator = '_'){
      let escaped = ['[', ']', '{', '}', '(', ')', '-', '+', '*', '/'];
      let exp = '[';
      for (let i = 0; i < separator.length; i++) {
        if (escaped.includes(separator[i])) {
          exp += '\\';
        }

        exp += separator[i];
      }

      exp += ']+';
      let re = new RegExp(exp, 'g');
      let res = bbn.fn.removeAccents(str).replace(/[^a-z0-9]/gi, separator).replace(re, separator);
      return bbn.fn.trim(res, separator);
    },

    /**
     * Returns the string passed as an argument in camelize mode for css.
     *
     * @method   camelToCss
     * @global
     *
     * @example
     * ```javascript
     * //"this-is-a-test"
     * bbn.fn.camelToCss("thisIsATest");
     * ```
     *
     * @memberof bbn.fn
     * @param   {String} str
     * @returns {String}
     */
    camelToCss(str){
      return str.replace(/([A-Z])/g, function(st){
        return '-' + st.toLowerCase();
      }).replace('/^./', function(st){
        return st.toLowerCase()
      });
    },

    format(str) {
      let args = Array.prototype.slice.call(arguments, 1);
      if (args.length) {
        let i = 0;
        return str.replace(/\%([d|s])/g, (match, type) => {
          let tmp = args[i++];
          bbn.fn.checkType(tmp, type === 'd' ? 'number' : 'string');
          return tmp;
        });
      }

      return str;
    },

    /**
     * Converts the first character of the string to uppercase.
     *
     * @method   correctCase
     * @global
     *
     * @example
     * ```javascript
     * //"This is a test"
     * bbn.fn.correctCase("this is a test");
     * ```
     *
     * @memberof bbn.fn
     * @param    {STring} str
     * @returns  {String}
     */
    correctCase(str){
      return str.replace(/[A-z]{1}/, c => c.toUpperCase());
    },

    /**
     * Returns a random integer.
     *
     * Generates and returns a random number in a range of numbers defined
     * by passed arguments a minimum and a maximum.
     *
     * @method   randomInt
     * @global
     *
     * @example
     * ```javascript
     * //56
     * bbn.fn.randomInt(1,100);
     * ```
     *
     * @memberof bbn.fn
     * @param    {Number} min
     * @param    {Number} max
     * @returns  {Number}
     */
    randomInt(min, max){
      return Math.floor(Math.random() * (max - min + 1) + min);
    },

    /**
     * Returns a random String with random lenght,
     *
     * Generates a random string from the length of the random number,
     * taken from a range of numbers providing either only the minimum or also the maximum as arguments.
     *
     * @method   randomString
     * @global
     *
     * @example
     * ```javascript
     * //"U7xXO0Xb"
     * bbn.fn.randomString(3,10);
     * ```
     *
     * @example
     * ```javascript
     * //"H8F"
     * bbn.fn.randomString(3);
     * ```
     *
     * @memberof bbn.fn
     * @param    {Number} length
     * @param    {String} chars
     * @returns  {String}
     */
    randomString(min, max, types){
      let length,
          type,
          chars = {
            n: '0123456789',
            l: 'abcdefghijklmnopqrstuvwxyz',
            u: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
          };
      if ( !types ){
        types = 'nlu';
      }
      if ( !min ){
        length = bbn.fn.randomInt(8, 14);
      }
      if (bbn.fn.isString(max)) {
        types = 'n';
        chars = {
          n: max
        };
        if (!length){
          length = min;
        }
      }
      else if ( (typeof(max) === 'number') && (min < max) ){
        length = bbn.fn.randomInt(min, max);
      }
      else if ( min ){
        length = min;
      }
      let result = '';
      for ( let i = 0; i < length; i++ ){
        // Not a number for the first char
        if ( i === 0 ){
          if ( types !== 'n' ){
            type = types.indexOf('u') === -1 ? 'l' : 'u';
          }
        }
        else{
          type = types[Math.floor(Math.random() * types.length)];
        }
        result += chars[type][Math.floor(Math.random() * chars[type].length)];
      }
      return result;
    },

    /**
     * Shortens the given string after *len* characters.
     *
     * Provides an abbreviation to the string passed as the first argument,
     * deciding through the second argument the number of characters to keep and the remainder replaced
     * by what is passed as the third argument and if not given a defalut it is: '...'
     *
     * @method   shorten
     * @global
     *
     * @example
     * ```javascript
     * //"test***"
     * bbn.fn.shorten('testing', 4, '***');
     * ```
     *  @example
     * ```javascript
     * //"test..."
     * bbn.fn.shorten('testing', 4);
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @param    {Number} len
     * @returns  {String}
     */
    shorten(st, len, adj){
      if ( typeof(st).toLowerCase() === 'string' ){
        if ( !len ){
          len = bbn.var.shortenLen;
        }
        if ((adj === undefined) || !bbn.fn.isString(adj)) {
          adj = '...';
        }
        if ( st.length > len ){
          st = bbn.fn.substr(st, 0, len) + adj;
        }
      }
      return st;
    },

    /**
     * Looks for and replaces parts of string with what we want.
     *
     * With the first argument you define what to replace,
     * the second argument with what you have to replace instead and the third argument is the string to be replaced.
     *
     * @method   replaceAll
     * @global
     *
     * @example
     * ```javascript
     * bbn.fn.replaceAll('day', 'night', 'Today is a beautiful day');
     * //"Tonight is a beautiful night"
     * ```
     * @memberof bbn.fn
     * @param    {String} find
     * @param    {String} replace
     * @param    {String|RegExp} str
     * @param    {String} flags
     * @returns  {String}
     */
    replaceAll(find, replace, str, flags = ''){
      if ( str !== undefined ){
        return str.toString().replace(bbn.fn.isObject(find) ? find : new RegExp(bbn.fn.escapeRegExp(find), 'g' + flags), replace);
      }
      return false;
    },

    /**
     * Replace quotes in ASCII code
     *
     * @method   quotes2html
     * @global
     *
     * @example
     * ```javascript
     * bbn.fn.quotes2html("hello 'world'!", 's');
     * // hello &#39;world&#39;!
     * ```
     *
     * @example
     * ```javascript
     * bbn.fn.quotes2html('hello "world\'s"!', 'd');
     * // hello &quot;world'sd&quot;!
     * ```
     *
     * @example
     * ```javascript
     * bbn.fn.quotes2html('hello "world\'s"!');
     * // hello &quot;world&#39;sd&quot;!
     * ```
     *
     * @memberof bbn.fn
     * @param    {String} st
     * @returns  {String}
     */
    quotes2html(st, type) {
      if (!type || (type.toLowerCase().indexOf('s') === 0)) {
        st = bbn.fn.replaceAll("'", "&#39;", st);
      }
      if (!type || (type.toLowerCase().indexOf('d') === 0)) {
        st = bbn.fn.replaceAll('"', '&quot;', st);
      }
      return st;
    },

    /**
     * Replaces all new line characters '\ n' with html tag '<br>'.
     *
     * @method   nl2br
     * @global
     *
     * @example
     * ```javascript
     * bbn.fn.nl2br('hello \n world!');
     * //"hello <br> world!"
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @returns  {String}
     */
    nl2br(st, keepNl){
      return bbn.fn.replaceAll("\n", "<br>" + (keepNl ? "\n" : ""), st);
    },

    /**
     * Replaces the html <br> tag with new line characters '\ n' if present in the string.
     *
     * @method   br2nl
     * @global
     *
     * @example
     * ```javascript
     * //"hello
     * //world!"
     * bbn.fn.br2nl('hello <br> world!')
     * ```
     *
     * @memberof bbn.fn
     * @param    string st
     * @returns  {String}
     */
    br2nl(st){
      return bbn.fn.replaceAll("<br />", "\n", bbn.fn.replaceAll("<br/>", "\n", bbn.fn.replaceAll("<br>", "\n", st)));
    },

    /**
     * Convert text in html format to plain text.
     *
     * @method   html2text
     * @global
     *
     * @example
     * ```javascript
     * //"Hello world!"
     * bbn.fn.html2text("<div><p>Hello <b>world!</b></p></div>");
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @returns {String}
     */
    html2text(st){
      /*var $test = $('<div/>').html(bbn.fn.br2nl(st)).appendTo(document.body);
      st = $test.text();
      $test.remove();
      */
      let $test = document.createElement('div');
      $test.innerHTML = st;
      st = $test.innerText;
      return st;
    },

    /**
     * Returns the string passed as an argument without accents.
     *
     * @method   removeAccents
     * @global
     *
     * @example
     * ```javascript
     * //"eeou"
     * bbn.fn.removeAccents("èéòù");
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @returns  {String}
     */
    removeAccents(st){
      if (!bbn.fn.isString(st)) {
        if (st.toString) {
          st = st.toString();
        }
        else {
          bbn.fn.log(st);
          throw new Error(bbn._("removeAccent expects a string"));
        }
      }

      return st.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    },

    /**
     * Returns the value of the proportion giving the percentage and the total from where to be calculated.
     * @method   percent
     * @global
     *
     * @example
     * ```javascript
     * //150
     * bbn.fn.percent('15',1000);
     * ```
     *
     * @example
     * ```javascript
     * //75
     * bbn.fn.percent(15,500);
     * ```
     * @memberof bbn.fn
     * @param    {Number|String} percent
     * @param    {Number|String} cent
     * @returns  {Number}
     */
    percent(percent, cent){
      return (cent/100) * percent;
    },

    /**
     * Basic substring function accepting both positive and negative values.
     *
     * @method   substr
     * @global
     *
     * @example
     * ```javascript
     * bbn.fn.substr(bbn.fn, 'Hello', -3, -1);
     * // "ll"
     * bbn.fn.substr(bbn.fn, 'Hello', -3);
     * // "llo"
     * bbn.fn.substr(bbn.fn, 'Hello', 0, 1);
     * // "H"
     * ```
     * @memberof bbn.fn
     * @param    {String} str
     * @param    {Number} from
     * @param    {Number} length
     * @returns  {String} Result substring
     */
     substr(str, from, length) {
      if (!bbn.fn.isString(str) || !bbn.fn.isInt(from)) {
        bbn.fn.log(arguments);
        throw new Error(bbn._("The substr function should be applied to a string and at least a `from` argument should be given"));
      }

      if (from < 0) {
        from = str.length + from;
      }

      if (!bbn.fn.isInt(length)) {
        return str.substring(from);
      }

      return str.substring(from, (length < 0 ? str.length : from) + length);
    },

    /**
     * Escapes a URL or a file path, optionally adding parameters (get type, to append to the URL without the first separator).
     * 
     * @param {*} url 
     * @param {*} params 
     * @returns 
     */
    escapeUrl(url, params) {
      let st = '';
      if (url.match('^(http|https)://')) {
        st += 'http';
        url = url.substring(4);
        if (url.substr(0, 1) === 's') {
          st += 's';
          url = url.substring(1);
        }
        st += '://';
        url = url.substring(3);
      }

      bbn.fn.each(bbn.fn.dirName(url).split('/'), a => {
        st += encodeURIComponent(a) + '/';
      });

      let base = bbn.fn.baseName(url);
      let sep = '?';
      let existingParams = '';
      if (base.indexOf(sep)) {
        let tmp = base.split('?');
        sep = '&';
        existingParams = '?' + tmp[1];
        base = tmp[0];
      }

      if (params && bbn.fn.isString(params)) {
         if (params.match('^(\\&|\\?)')) {
           params = params.substring(1);
         }

         params = sep + params;
      }
      else {
        params = '';
      }

      return st + encodeURIComponent(base) + existingParams + params;
    },

    /**
     * Returns the path of the folder containing the last hierarchical element of the path.
     *
     * @method   dirName
     * @global
     *
     * @example
     * ```javascript
     * //"folder/other_folder"
     * bbn.fn.dirName('folder/other_folder/file');
     * ```
     * @memberof bbn.fn
     * @param    {String} path
     * @returns  {String} path of the folder
     */
    dirName(path){
      if (bbn.fn.isString(path) && path) {
        while (bbn.fn.substr(path, path.length-1) === '/') {
          path = bbn.fn.substr(path, 0, path.length-1);
        }
        let pos = path.lastIndexOf('/');
        if (pos > 0) {
          return bbn.fn.substr(path, 0, pos);
        }
        if (pos === 0) {
          return '/';
        }
      }
      return '';
    },

    /**
     * Returns the name of the element indicated by path given to it as an argument.
     *
     * @method   baseName
     * @global
     *
     * @example
     * ```javascript
     * // "file.png"
     * bbn.fn.baseName('folder/other_folder/file.png');
     * ```
     * @example
     * ```javascript
     * // "file"
     * bbn.fn.baseName('folder/other_folder/file.png', '.png');
     * ```
     *
     * @memberof bbn.fn
     * @param    {String} path   The path from which the basename must be extracted
     * @param    {String} suffix An optional suffix that will be removed from the basename
     * @returns  {String} The basename of path
     */
    baseName(path, suffix){
      if (path && bbn.fn.isString(path)) {
        let bits = path.split("/");
        let res = bits.pop();
        if (!suffix) {
          return res;
        }
        let len = suffix.length;
        if (res && bbn.fn.substr(res, -len) === suffix) {
          return bbn.fn.substr(res, 0, res.length - len);
        }
      }
      return '';
    },

    /**
     * @method   printf
     * @todo     Add method description for printf
     * @global
     * @memberof bbn.fn
     * @param    String format
     * @returns  {*}
     */
    printf(format){
      var args = Array.prototype.slice.call(arguments, 1);
      return format.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
          ;
      });
    },

    /**
     * Removes all group of spaces by one single space.
     * @param {String} str 
     * @returns 
     */
    removeExtraSpaces(str) {
      return str.replace(/\s+/g, ' ').trim();
    },

    /**
     * @method   removeTrailingChars
     * @todo     Add method description for removeTrailingChars
     * @global
     * @memberof bbn.fn
     * @param    {String} st
     * @param    {String} char
     * @returns  {*}
     */
    removeTrailingChars(st, char){
      if ( !char ){
        char = ' ';
      }
      if ( char.length ){
        while ( bbn.fn.substr(st, -char.length) === char ){
          st = bbn.fn.substr(st, 0, st.length - char.length);
        }
        while ( bbn.fn.substr(st, 0, char.length) === char ){
          st = bbn.fn.substr(st, char.length);
        }
      }
      return st;
    },

    /**
     * Returns a string which is the repetition of the first argument for the number passed in the second argument.
     *
     * @method   repeat
     * @global
     *
     * @example
     * ```javascript
     * //"HelloHelloHello"
     * bbn.fn.repeat('Hello', 3);
     * ```
     * @memberof bbn.fn
     * @returns  {String}
     */
    repeat(st, num) {
      let res = '';
      bbn.fn.iterate(num, () => {
        res += st;
      });
      return res;
    },

    removeHtmlComments(str) {
      if (!bbn.fn.isString(str)) {
        return str;
      }
      return str.replace(/<!--[\s\S]*?-->/g, '');
    },

    getText(ele) {
      return ele.innerText().trim();
    },

    getHtml(ele, stripComments = false) {
      let st = ele.innerHTML();
      if (stripComments) {
        st = bbn.fn.removeHtmlComments(st);
      }

      return st.trim();
    },
    escapeTicks(str) {
      if (!bbn.fn.isString(str)) {
        return str;
      }
      return str.replace(/`/g, "\\`");
    },
    escapeDquotes(str) {
      if (!bbn.fn.isString(str)) {
        return str;
      }
      return str.replace(/"/g, '\\"');
    },
    escapeSquotes(str) {
      if (!bbn.fn.isString(str)) {
        return str;
      }
      return str.replace(/'/g, "\\'");
    }


  });
})(bbn);



/**
 * @file   Styling.
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
     * Centers the given element by giving it a position absolute.
     * 
     * @method   center
     * @global   
     * @example 
     * ```javascript
     * //<div style="position: absolute; top: 73px; left: 0px;">Documentation</div>
     * bbn.fn.center('<div>Documentation</div>')
     * ```
     * @memberof bbn.fn
     * @param    {HTMLElement} ele 
     * @returns  {HTMLElement} The dom element with the new style.             
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
     * Adds the given color to the object bbn.var.colors in order to be able to use 
     * the css classes bbn-bg-myColor for the background and bbn-myColor for the text color.
     * 
     * @method   addColors
     * @global   
     * @example 
     * ```javascript
     * //<div class="bbn-bg-maroon">background</div> <span class="bbn-maroon">text color</span>
     * bbn.fn.addColors({maroon: '#800000'});
     * ```
     * @memberof bbn.fn
     * @param    {Object} colors 
     * @returns  
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
          sheet.insertRule('.bbn-' + n + ', .bbn-color-text-' + n + ' {color: ' + v + ' !important;}', i);
          sheet.insertRule('.bbn-bg-' + n + ', .bbn-color-bg-' + n + ', .bbn-color-background-' + n + ' {background-color: ' + v + ' !important;}', i);
          sheet.insertRule('.bbn-border-' + n + ', .bbn-color-border-' + n + ' {border-color: ' + v + ' !important;}', i);
          sheet.insertRule('.bbn-color-' + n + ' {border-color: ' + v + '; background-color: ' + v + '; color: ' + v + ';}', i);
        });
      }
    },

    /**
     * not used
     * @ignore
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
     * @ignore
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
     * @ignore
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
     * @ignore
     * @method   selector
     * @todo     Add method description for selector
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    selector(ele) {
      return (typeof el === 'string') ? document.querySelector(ele) : ele;
    },

    /**
     * @ignore
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
     * 
     * @ignore
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
     * Returns the hex color of the given rgb or color name.
     * @method   colorToHex
     * @global   
     * @example 
     * ```javascript
     * //"#ff0000"
     * bbn.fn.colorToHex('red');
     * ```
     * 
     * @example 
     * ```javascript
     * //"#ff0000"
     * bbn.fn.colorToHex('rgb(255,0,0)');
     * ```
     * @memberof bbn.fn
     * @returns  {String} 
     */
    colorToHex(color){
      let canvas = document.createElement("canvas").getContext("2d");
	    canvas.fillStyle = color;
	    return canvas.fillStyle;
    },

    /**
     * Takes color in hex format and lightens or darkens it with the given value.
     * @method   lightenDarkenHex
     * @global
     * @example
     * ```javascript
     * //"#eccb28"
     * bbn.fn.lightenDarkenHex('#c4a300', 40);
     * ```
     *
     * @example
     * ```javascript
     * //"#9c7b00"
     * bbn.fn.lightenDarkenHex(#c4a300', -40);
     * ```
     * @memberof bbn.fn
     * @returns  {String}
     */
    lightenDarkenHex(hex, amt){
      if ( hex && amt ){
        let ht = hex[0] === "#";
        hex = ht ? hex.slice(1) : hex;
        let num = parseInt(hex, 16),
            r = (num >> 16) + amt,
            b = ((num >> 8) & 0x00FF) + amt,
            g = (num & 0x0000FF) + amt;
        if ( r > 255 ){
          r = 255;
        }
        else if  ( r < 0 ){
          r = 0;
        }
        if ( b > 255 ){
          b = 255;
        }
        else if  ( b < 0 ){
          b = 0;
        }
        if ( g > 255 ){
          g = 255;
        }
        else if ( g < 0 ){
          g = 0;
        }
        return (ht ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
      }
    },

    /**
     * Gets a CSS variable value
     * @param {String*} varname 
     * @returns 
     */
    getCssVar(varname) {
      if (varname.indexOf('--') !== 0) {
        varname = '--' + varname;
      }

      return getComputedStyle(document.documentElement).getPropertyValue(varname);
    },

    /**
     * Creates a CSS variable
     * @param {String*} varname 
     * @param {String*} value
     * @returns 
     */
     setCssVar(varname, value) {
      if (varname.indexOf('--') !== 0) {
        varname = '--' + varname;
      }

      document.documentElement.setProperty(varname, value);
    }

  });
})(bbn);



/**
 * @file   Type check functions.
 * @author BBN Solutions <info@bbn.solutions>
 * @since  09/06/2020
 */

;((bbn) => {
  "use strict";

  /**
   * @var {Object} _private Misc variable for internal use
   */
  let _private = {};

  Object.assign(bbn.fn, {
    /**
     * Intended to check if the argument provided is an e-mail address written correctly
     *
     * @method   isEmail
     * @global
     *
     * @example
     * ```javascript
     * //false
     * bbn.fn.isEmail('test@testorg');
     * ```
     *
     * @example
     * ```javascript
     * //true
     * bbn.fn.isEmail('test@test.org');
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @returns  {Boolean}
     */
    isEmail(st){
      if (!bbn.fn.isString(st)) {
        return false;
      }
      let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(st);
    },

    /**
     * Intended to check if the argument provided is a color.
     *
     * It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.
     *
     * @method   isColor
     * @global
     *
     * @example
     * ```javascript
     * //true
     * bbn.fn.isColor("#FF0000")
     * ```
     *
     * @example
     * ```javascript
     * //true
     * bbn.fn.isColor("rgb 255, 0, 0");
     * ```
     *
     * @example
     * ```javascript
     * //true
     * bbn.fn.isColor("red");
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @returns  {Boolean}
     */
    isColor(st){
      if (!bbn.fn.isString(st)) {
        return false;
      }
      var reg = new RegExp('^(#[a-f0-9]{6}|#[a-f0-9]{3}|rgb *\( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *\)|rgba *\( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *\)|black|green|silver|gray|olive|white|yellow|maroon|navy|red|blue|purple|teal|fuchsia|aqua)$', 'i');
      return reg.test(st);
    },

    /**
     * Returns true if the given object can be iterated as an array (numerically).
     *
     * It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.
     *
     * @method   isIterable
     * @global
     * @memberof bbn.fn
     *
     * @example
     * ```javascript
     * // true
     * bbn.fn.isIterable([1, 2])
     * // false
     * bbn.fn.isIterable({a: 1, b: 2})
     * // false
     * bbn.fn.isIterable(25)
     * // true
     * bbn.fn.isIterable(document.body.querySelectorAll('.container > div'))
     * ```
     *
     * @param    {String} st
     *
     * @returns  {Boolean}
     */
    isIterable(v) {
      return v && (typeof v === 'object') && (Symbol.iterator in Object(v));
    },

    /**
     * Returns true if the given value is a valid CSS dimension string or a number, false otherwise.
     *
     * @method   isDimension
     * @global
     * @memberof bbn.fn
     * @param    {String} st
     * @returns
     */
    isDimension(st) {
      if ((typeof(st) === 'number') && (st >= 0)) {
        return true;
      }
      return bbn.fn.isValidDimension(st);
    },

    /**
     * Returns true if the given value is a valid CSS dimension string, false otherwise.
     *
     * @method   isValidDimension
     * @global
     * @memberof bbn.fn
     * @param    {String} st
     * @returns
     */
    isValidDimension(st) {
      if ( (typeof(st) === 'string') &&
        (st.length > 0) && (
          (st.indexOf('calc') === 0 ) ||
          (!isNaN(bbn.fn.substr(st, 0,1))) ) ){
        let el = document.createElement('div');
        el.style.width = st;
        let res = !!el.style.width.length;
        el.remove();
        return res;
      }
      return false;
    },

    /**
     * Checks if the argument is empty or not.
     * @method   isEmpty
     * @global
     *
     * @example
     * ```javascript
     * //true
     * bbn.fn.isEmpty({});
     * ```
     * @example
     * ```javascript
     * //false
     * bbn.fn.isEmpty({test : 1});
     * ```
     * @example
     * ```javascript
     * //true
     * bbn.fn.isEmpty([]);
     * ```
     * @example
     * ```javascript
     * //false
     * bbn.fn.isEmpty(['test']);
     * ```
     * @example
     * ```javascript
     * //true
     * bbn.fn.isEmpty('');
     * ```
     * @example
     * ```javascript
     * //true
     * bbn.fn.isEmpty('test');
     * ```
     * @memberof bbn.fn
     * @param    {*} obj
     * @returns  {Boolean}
     */
    isEmpty(obj) {
      if ( !obj ){
        return true;
      }
      if (bbn.fn.isArray(obj)) {
        return obj.length ? false : true;
      }
      if ( typeof(obj) === 'object' ){
        if (bbn.fn.numProperties(obj)) {
          return false;
        }
        return true;
      }
      return false;
    },

    /**
     * Returns true if the given argument is a promise.
     * @global
     * @example
     * ```javascript
     * bbn.fn.isPromise(bbn.fn.post('myUrl'));
     * // true
     * bbn.fn.isPromise(setTimeout(() => {}))
     * // false
     * bbn.fn.isPromise(myVueObject.$nextTick());
     * // true
     * ```
     * @method   isFunction
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isPromise() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Promise]' ){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is a function.
     * @global
     * @example
     * ```javascript
     * //true
     * bbn.fn.isFunction(() => {
     *  alert('Hello world');
     * });
     * ```
     * @method   isFunction
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isFunction() {
      if (!arguments.length) return false;

      for ( let obj of arguments ) {
        if (!(obj && obj.constructor && obj.call && obj.apply)) {
          return false;
        }
      }
      return true;
    },

    /**
     * @method   isBlob
     * @todo     Add method description for isFunction
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isBlob() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Blob]' ){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is a number
     * @method   isNumber
     * @global
     * @example
     * ```javascript
     * //true
     * bbn.fn.isNumber(5);
     * ```
     * @example
     * ```javascript
     * //true
     * bbn.fn.isNumber(0.5);
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
     isNumber() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( ['boolean', 'object'].includes(typeof a) || (a === '') ||isNaN(a)){
          return false;
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is an integer
     * @method   isInt
     * @global
     * @example
     * ```javascript
     * bbn.fn.isInt(5);
     * // true
     * bbn.fn.isInt(0.5);
     * // false
     * bbn.fn.isInt("hello");
     * // false
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
     isInt() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if (!Number.isInteger(a)){
          return false;
        }
      }

      return true;
    },

    /**
     * Returns true if the given argument is a string;
     * @method   isString
     * @global
     * @example
     * ```javascript
     * //true
     * bbn.fn.isString('bbn');
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
     isString() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ({}.toString.apply(a) !== '[object String]'){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is a symbol;
     * @method   isSymbol
     * @global
     * @example
     * ```javascript
     * //true
     * const sb = Symbol();
     * bbn.fn.isSymbol(sb);
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
     isSymbol() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ({}.toString.apply(a) !== '[object Symbol]'){
          return false
        }
      }

      return true;
    },

    /**
     * Returns true if the given argument is a boolean
     * @method   isBoolean
     * @global
     * @example
     * ```javascript
     * const sb = true;
     * bbn.fn.isBoolean(sb); // true
     * const sb = 1;
     * bbn.fn.isBoolean(sb); // false
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
     isBoolean() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if (![true, false].includes(a)) {
          return false
        }
      }

      return true;
    },

    /**
     * Returns true if the given argument is array.
     * @method   isArray
     * @global
     * @example
     * ```javascript
     * //true
     * bbn.fn.isArray([5,2,6]);
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isArray() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if (!Array.isArray(a)){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is a date object.
     * @method   isDate
     * @global
     * @example
     * ```javascript
     * //true
     * let date = new Date();
     * bbn.fn.isDate(date);
     * ```
     * @example
     * ```javascript
     * //false
     * bbn.fn.isDate('16/04/2020');
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isDate() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Date]' ){
          return false
        }
      }
      return true;
    },

    /**
     * @ignore
     * @method   isSQLDate
     * @todo     Add method description for isSQLDate
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isSQLDate() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if (
          (typeof a !== 'string') ||
          !a.match(/^([1-2]\d{3})-((0[0-9])|(1[12]))-(([0-2][0-9])|(3[01]))(?:( [0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/)
        ){
          return false;
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is an object.
     * @method   isObject
     * @global
     * @example
     * ```javascript
     * //true
     * bbn.fn.isObject({name: 'cami', age: 7});
     * ```
     * @example
     * ```javascript
     * //false
     * bbn.fn.isObject([{name: 'cami', age: 7}]);
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isObject() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Object]' ){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is an event.
     * @method   isEvent
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
     isEvent() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if (!(a instanceof Event)){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is null;
     * @method   isNull
     * @global
     * @example
     * ```javascript
     * //true
     * bbn.fn.isNull(myData);
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isNull() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Null]' ){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is not null or type object or array.
     * @method   isValue
     * @example
     * ```javascript
     * //true
     * bbn.fn.isValue('myString');
     * ```
     * @example
     * ```javascript
     * //true
     * bbn.fn.isValue(6);
     * ```
     * @example
     * ```javascript
     * //false
     * bbn.fn.isValue([80,10,22]);
     * ```
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isValue() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( (typeof a === 'object') && !bbn.fn.isNull(a) ){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is a dom element;
     * @method   isDom
     * @example
     * ```javascript
     * //true
     * bbn.fn.isDom(document.body.childNodes[0]);
     * ```
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isDom(){
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( !(a instanceof HTMLElement) ){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is a dom comment;
     * @method   isComment
     * @example
     * ```javascript
     * //true
     * bbn.fn.isComment(node.childNodes[0]);
     * ```
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isComment(){
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( !(a instanceof Comment) ){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argumen is a Canvas.
     *
     * @method   isCanvas
     * @global
     * @example
     * ```javascript
     * //true
     * let myCanvas = document.createElement('canvas');
     * bbn.fn.isCanvas(myCanvas);
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isCanvas(){
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( !(a instanceof HTMLCanvasElement) ){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argumen is a VueJS object.
     *
     * @method   isVue
     * @global
     * @example
     * ```javascript
     * //true
     * let myObj =  new Vue({
     *                //options
     *              });
     * bbn.fn.isVue(myObj);
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isVue(){
      if (!arguments.length) {
        return false;
      }

      if (bbn.vue.app) {
        for ( let a of arguments ){
          if (!a || (typeof a.render !== 'function')) {
            return false;
          }
        }
      }
      else {
        for ( let a of arguments ){
          if ( !(a instanceof Vue) ){
            return false;
          }
        }
      }

      return true;
    },

    /**
     * Returns true if the given argument is a percentage.
     * @method   isPercent
     * @global
     * @example
     * ```javascript
     * //true
     * bbn.fn.isPercent('5%');
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isPercent(){
      if ( !arguments.length ) return false;
      for ( let a of arguments ){
        if ( (typeof a !== 'string') || !a.match(/^\d+(?:\.\d+)?%$/) ){
          return false;
        }
      }
      return true;
    },

    /**
     * @method   isURL
     * @ignore
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isURL(str){
      return bbn.var.regexp.url.test(str);
    },
    /**
     * @method   isIP
     * @ignore
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isIP(st){
      if (bbn.fn.isString(st)) {
        return bbn.var.regexp.ip.test(st);
      }
    },
    /**
     * @method   isHostname
     * @ignore
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isHostname(st) {
      if (bbn.fn.isString(st)) {
        if (bbn.fn.isIP(st)) {
          return true;
        }
        return bbn.var.regexp.hostname.test(st);
      }
    }
  });
})(bbn);



