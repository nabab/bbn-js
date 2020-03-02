/**
 * Created by BBN on 10/02/2017.
 */
;((bbn) => {
  "use strict";

  let _chronos = {};
  Object.assign(bbn.fn, {


    /**     MISC     */
    /**
     * Returns true if the given arguments correspomd.
     * @method isFunction
     * @return {Boolean}
     */
    is(t) {
      if (!arguments.length < 2) return false;
      let type = typeof t;
      let i = 0;
      for ( let a of arguments ){
        if (i && (type !== typeof a)) {
          return false
        }
        i++;
      }
      return true;
    },
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
        if ( ['boolean', 'object'].includes(typeof a) || isNaN(a) ){
          return false;
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
     * Returns true if the given argument is a SQL formatted date.
     * @method isDate
     * @return {Boolean}
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
    },

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
    ab2str(buf) {
      return String.fromCharCode.apply(null, new Uint16Array(buf));
    },
    str2ab(str) {
      var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
      var bufView = new Uint16Array(buf);
      for (var i=0, strLen=str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
      }
      return buf;
    },
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

    copy(st){
      let input = document.createElement("textarea");
      input.style.opacity = 0;
      input.value = st;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    },

    imageToCanvas(img) {
      let canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d").drawImage(img, 0, 0);
    
      return canvas;
    },
    // Converts canvas to an image
    canvasToImage(canvas) {
      let img = new Image();
      img.src = canvas.toDataURL("image/png");
      return img;
    },

    imgToBase64(img)
    {
      let canvas = bbn.fn.imageToCanvas(img);
      return this.canvasToImage(canvas);
    },

    formatBytes(bytes, decimals = 2){
      if ( !bytes ){
        return '0 B';
      } 
      const k = 1024,
            s = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals < 0 ? 0 : decimals)) + ' ' + s[i];
    },

    startChrono(name)
    {
      let now = (new Date()).getTime();
      let h1 = 3600*1000;
      if (_chronos.length) {
        bbn.fn.each(_chronos, (t, n) => {
          if (now - t > h1) {
            delete _chronos[n];
          }
        });
        now = (new Date()).getTime();
      }
      _chronos[name] = now;
    },

    stopChrono(name)
    {
      if (_chronos[name]) {
        let now = (new Date()).getTime();
        let diff = now - _chronos[name];
        return diff;
      }
    },

    isMobile(){
      return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }

 
  });

})(bbn);