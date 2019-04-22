/**
 * Created by BBN on 10/02/2017.
 */
;(($, bbn) => {
  "use strict";

  $.extend(bbn.fn, {

    /**     MISC     */

    isFunction() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Function]' ){
          return false
        }
      }
      return true;
    },

    isNumber() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( isNaN(a) ){
          return false
        }
      }
      return true;
    },

    isString() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( typeof a !== 'string' ){
          return false
        }
      }
      return true;
    },

    isArray() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Array]' ){
          return false
        }
      }
      return true;
    },

    isDate() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Date]' ){
          return false
        }
      }
      return true;
    },

    isObject() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Object]' ){
          return false
        }
      }
      return true;
    },

    isNull() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Null]' ){
          return false
        }
      }
      return true;
    },

    /* Returns true if value is not an object and is basically a value wich can be written as is in a DB or a file */
    isValue() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( (typeof a === 'object') && !bbn.fn.isNull(a) ){
          return false
        }
      }
      return true;
    },

    isDom(){
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( !(a instanceof Element) ){
          return false
        }
      }
      return true;
    },

    isjQuery(){
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( !(a instanceof jQuery) ){
          return false
        }
      }
      return true;
    },

    isVue(){
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( !(a instanceof Vue) ){
          return false
        }
      }
      return true;
    },

    isPercent(){
      if ( !arguments.length ) return false;
      for ( let a of arguments ){
        if ( (typeof a !== 'string') || !a.match(/^\d+(?:\.\d+)?%$/) ){
          return false;
        }
      }
      return true;
    },

    isURL(str){
      let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return pattern.test(str);
    },

    timestamp(seconds){
      var r = (new Date()).getTime();
      return seconds ? r*1000 : r;
    },

    getArguments(a){
      let r = [];
      for ( let i = 0; i < a.length; i++ ){
        r.push(a[i]);
      }
      return r;
    },

    // Logging function
    log(opt){
      if ( window.console !== undefined ){
        let args = bbn.fn.getArguments(arguments),
            cfg,
            level = 5;
        if ( args[0] && (typeof args[0] === 'object') && args[0]._bbn_console_style){
          cfg = args[0]._bbn_console_style;
          level = args[0]._bbn_console_level;
          args.shift();
        }
        else{
          cfg = "background: #EEE; color: #666; font-size: 12px";
        }
        if ( bbn.env.loggingLevel >= level  ){
          let i = 0;
          while (i < args.length ){
            let t = typeof args[i];
            if ( (t === 'string') || (t === 'number') ){
              window.console.log("%c %s ", cfg, args[i]);
            }
            else{
              window.console.log(args[i]);
            }
            i++;
          }
        }
      }
      return this;
    },

    warning(){
      let args = bbn.fn.getArguments(arguments);
      args.unshift({
        _bbn_console_level: 2,
        _bbn_console_style: "color: red; background: yellow; font-size: 16px; width: 100%;"
      });
      bbn.fn.log.apply(this, args);
      return this;
    },

    error(){
      let args = bbn.fn.getArguments(arguments);
      args.unshift({
        _bbn_console_level: 1,
        _bbn_console_style: "color: white; background: red; font-size: 22px;"
      });
      bbn.fn.log.apply(this, args);
      return this;
    },

    happy(){
      let args = bbn.fn.getArguments(arguments);
      args.unshift({
        _bbn_console_level: 3,
        _bbn_console_style: "color: white; background: green; font-size: 18px;"
      });
      bbn.fn.log.apply(this, args);
      return this;
    },

    info(){
      let args = bbn.fn.getArguments(arguments);
      args.unshift({
        _bbn_console_level: 4,
        _bbn_console_style: "color: #EEE; background: blue; font-size: 12px;"
      });
      bbn.fn.log.apply(this, args);
      return this;
    },

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

    tagName(element){
      var p = $(element).prop("tagName");
      return p ? p.toLowerCase() : false;
    },

    getAttributes(element){
      var attr = {};
      $(element).each(function() {
        $.each(this.attributes, function() {
          // this.attributes is not a plain object, but an array
          // of attribute nodes, which contain both the name and value
          if(this.specified) {
            attr[this.name] = this.value;
          }
        });
      });
      return attr;
    },

    getPath(element){
      var path,
          node = $(element),
          done = false;

      while (node.length ){
        var realNode = node[0],
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
        var parent = node.parent(),
            sameTagSiblings = parent.children(name);

        if ( sameTagSiblings.length > 1 ){

          var allSiblings = parent.children(),
              index = allSiblings.index(realNode) + 1;

          if ( index > 1 ){
            name += ':nth-child(' + index + ')';
          }
        }

        path = name + (path ? '>' + path : '');
        node = parent;
      }

      return path;
    },

    /**
     * Creates an empty deferred object which will be resolved after 5 milliseconds
     * @param res
     * @returns {JQueryDeferred<T>}
     */
    makeDeferred(res, timeout){
      var deferred = $.Deferred();
      setTimeout(function(){
        deferred.resolve(res);
      }, timeout ? timeout : 5);
      return deferred;
    },

    wait_for_script(varname, fn, force){
      // 50 = 10 seconds max
      var myvar = eval(varname);
      if ( force || (myvar === undefined) ){
        var deferred = $.getScript("./?lib=varname");
      }
      else{
        var deferred = bbn.fn.makeDeferred();
      }
      return deferred.then(function(){
        fn();
      });
    },

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

    getCookie(name){
      let nameEQ = name + "=";
      let ca = document.cookie.split(';');
      for ( let i = 0; i < ca.length; i++ ){
        let c = ca[i];
        while ( c.charAt(0) == ' ' ){
          c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0){
          let st = c.substring(nameEQ.length,c.length);
          if ( st ){
            return JSON.parse(unescape(st)).value;
          }
        }
      }
      return null;
    },

    eraseCookie(name){
      document.cookie = name+'=; Max-Age=-99999999;';
    },

    calculateHeight(element){
      const oldVis = element.style.visibility;
      element.style.visibility = 'hidden';
      const oldDisp = element.style.display;
      if ( oldDisp === 'none' ){
        element.style.display = 'block';
      }
      const width = getComputedStyle(element).width;
      const oldWidth = element.style.width;
      const oldHeight = element.style.height;
      const oldPos = element.style.position;
      element.style.width = width;
      element.style.position = 'absolute';
      element.style.height = 'auto';
      const height = getComputedStyle(element).height;
      element.style.width = oldWidth || null;
      element.style.position = oldPos || null;
      element.style.visibility = oldVis || null;
      element.style.display = oldDisp || null;
      element.style.height = oldHeight || null;
      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;
      return height;
    }
  })

})(jQuery, bbn);