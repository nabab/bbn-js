/**
 * Created by BBN on 10/02/2017.
 */
;((bbn) => {
  "use strict";

  Object.assign(bbn.fn, {

    /**     MISC     */
    /**
     * Returns true if the given argument is a function.
     * @method isFunction
     * @return {Boolean}
     */
    isFunction() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Function]' ){
          return false
        }
      }
      return true;
    },
    /**
     * Returns true if the given argument is a number.
     * @method isNumber
     * @return {Boolean}
     */
    isNumber() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( isNaN(a) ){
          return false
        }
      }
      return true;
    },
    /**
     * Returns true if the given argument is a string.
     * @method isString
     * @return {Boolean}
     */
    isString() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( typeof a !== 'string' ){
          return false
        }
      }
      return true;
    },
    /**
     * Returns true if the given argument is an array.
     * @method isArray
     * @return {Boolean}
     */
    isArray() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Array]' ){
          return false
        }
      }
      return true;
    },
    /**
     * Returns true if the given argument is a date.
     * @method isDate
     * @return {Boolean}
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
     * Returns true if the given argument is an object.
     * @method isObject
     * @return {Boolean}
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
     * Returns true if the given argument is null.
     * @method isNull
     * @return {Boolean}
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
     * Returns true if value is not an object and is basically a value wich can be written as is in a DB or a file.
     * @method isValue
     * @return {Boolean}
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
     * Returns true if the given argument is a dom element.
     * @method isDom
     * @return {Boolean}
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
     * Returns true if the given argument is a jQuery instance.
     * @method isjQuery
     * @return {Boolean}
     */  
    isjQuery(){
      if (!window.jQuery) return false;
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( !(a instanceof jQuery) ){
          return false
        }
      }
      return true;
    },
    /**
     * Returns true if the given argument is a Vue instance.
     * @method isVue
     * @return {Boolean}
     */
    isVue(){
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( !(a instanceof Vue) ){
          return false
        }
      }
      return true;
    },
    /**
     * Returns true if the given string is a percentage.
     * @method isPercent
     * @return {Boolean}
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
     * Returns true if the given value is an url.
     * @method isUrl
     * @return {Boolean}
     */      
    isURL(str){
      let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return pattern.test(str);
    },
    /**
     * Returns a timestamp.
     * @method timestamp  
     * @param {Boolean} [false] seconds
     * @return {Number} 
     */
    timestamp(seconds){
      var r = (new Date()).getTime();
      return seconds ? r*1000 : r;
    },
    // Logging function
    /**
     * Logs the given arguments in the browser's console.
     * @method log
     * @param  {...any} args 
     */
    log(...args){
      if ( window.console !== undefined ){
        let cfg,
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
    /**
     * Logs the given arguments in the browser's console highlighting strings with a yellow background.
     * 
     * @method warning
     * @param  {...any} args 
     */
    warning(...args){
      args.unshift({
        _bbn_console_level: 2,
        _bbn_console_style: "color: red; background: yellow; font-size: 16px; width: 100%;"
      });
      bbn.fn.log.apply(this, args);
      return this;
    },
    /**
     * Logs the given arguments in the browser's console highlighting strings with a red background.
     * 
     * @method error
     * @param  {...any} args 
     */
    error(...args){
      args.unshift({
        _bbn_console_level: 1,
        _bbn_console_style: "color: white; background: red; font-size: 22px;"
      });
      bbn.fn.log.apply(this, args);
      return this;
    },
    /**
     * Logs the given arguments in the browser's console highlighting strings with a green background.
     * 
     * @method happy
     * @param  {...any} args 
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
     * Logs the given arguments in the browser's console highlighting strings with a blue background.
     * 
     * @method info
     * @param  {...any} args 
     */
    info(...args){
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
    /**
     * Returns the tag name of the given dom element. 
     * @method tagName
     * @param {HTMLElement} element 
     * @return {String}
     */
    tagName(element){
      //var p = $(element).prop("tagName");
      let p = element.tagName;
      return p ? p.toLowerCase() : false;
    },
    /**
     * Returns an object containing the attributes of the given dom element.
     * @param {HTMLElement} element 
     * @return {Object}
     */
    getAttributes(element){
      let attr = {};

      /*$(element).each(function() {
        $.each(this.attributes, function() {
          // this.attributes is not a plain object, but an array
          // of attribute nodes, which contain both the name and value
          if(this.specified) {
            attr[this.name] = this.value;
          }
        });
      });*/
      bbn.fn.each(element.getAttributeNames(), (ele, i) =>{
        // this.attributes is not a plain object, but an array
        // of attribute nodes, which contain both the name and value
        if( element.getAttributeNode(ele).specified ){
          attr[ele] = element.getAttribute(ele);
        }
      })
      return attr;
    },

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
    /**
     * Sets the cookies.
     * @param {String} name 
     * @param {String} value 
     * @param {Number} days 
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
     * Gets the value of the given cookie.
     * @param {String} name 
     * @return {String} 
     */
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
    }
  })

})(bbn);