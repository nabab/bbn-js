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
    /**
     * @method   is
     * @todo     Add method description for is
     * @global   
     * @memberof bbn.fn
     * @returns   
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
     * @method   isFunction
     * @todo     Add method description for isFunction
     * @global   
     * @memberof bbn.fn
     * @returns   
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
     * @method   isNumber
     * @todo     Add method description for isNumber
     * @global   
     * @memberof bbn.fn
     * @returns   
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
     * @method   isString
     * @todo     Add method description for isString
     * @global   
     * @memberof bbn.fn
     * @returns   
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
     * @method   isArray
     * @todo     Add method description for isArray
     * @global   
     * @memberof bbn.fn
     * @returns   
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
     * @method   isDate
     * @todo     Add method description for isDate
     * @global   
     * @memberof bbn.fn
     * @returns   
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
     * @method   isSQLDate
     * @todo     Add method description for isSQLDate
     * @global   
     * @memberof bbn.fn
     * @returns   
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
     * @method   isObject
     * @todo     Add method description for isObject
     * @global   
     * @memberof bbn.fn
     * @returns   
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
     * @method   isNull
     * @todo     Add method description for isNull
     * @global   
     * @memberof bbn.fn
     * @returns   
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
     * @method   isValue
     * @todo     Add method description for isValue
     * @global   
     * @memberof bbn.fn
     * @returns   
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
     * @method   isDom
     * @todo     Add method description for isDom
     * @global   
     * @memberof bbn.fn
     * @returns   
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
     * @method   isjQuery
     * @todo     Add method description for isjQuery
     * @global   
     * @memberof bbn.fn
     * @returns   
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
     * @method   isVue
     * @todo     Add method description for isVue
     * @global   
     * @memberof bbn.fn
     * @returns   
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
     * @method   isPercent
     * @todo     Add method description for isPercent
     * @global   
     * @memberof bbn.fn
     * @returns   
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
     * @todo     Add method description for isURL
     * @global   
     * @memberof bbn.fn
     * @returns   
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
     * @method   timestamp
     * @todo     Add method description for timestamp
     * @global   
     * @memberof bbn.fn
     * @param    {Boolean} [false] 
     * @returns            
     */
    timestamp(seconds){
      var r = (new Date()).getTime();
      return seconds ? r*1000 : r;
    },

    /**
     * @method   log
     * @todo     Add method description for log
     * @global   
     * @memberof bbn.fn
     * @param    {...any} args 
     * @returns  {*}      
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
     * @method   warning
     * @todo     Add method description for warning
     * @global   
     * @memberof bbn.fn
     * @param    {...any} args 
     * @returns  {*}      
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
     * @method   error
     * @todo     Add method description for error
     * @global   
     * @memberof bbn.fn
     * @param    {...any} args 
     * @returns  {*}      
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
     * @method   happy
     * @todo     Add method description for happy
     * @global   
     * @memberof bbn.fn
     * @param    {...any} args 
     * @returns  {*}      
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
     * @method   info
     * @todo     Add method description for info
     * @global   
     * @memberof bbn.fn
     * @param    {...any} args 
     * @returns  {*}      
     */
    info(...args){
      args.unshift({
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
     * @method   tagName
     * @todo     Add method description for tagName
     * @global   
     * @memberof bbn.fn
     * @param    {HTMLElement} element 
     * @returns                
     */
    tagName(element){
      //var p = $(element).prop("tagName");
      let p = element.tagName;
      return p ? p.toLowerCase() : false;
    },

    /**
     * @method   getAttributes
     * @todo     Add method description for getAttributes
     * @global   
     * @memberof bbn.fn
     * @param    {HTMLElement} element 
     * @returns                
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

    /**
     * @method   getPath
     * @todo     Add method description for getPath
     * @global   
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

    /**
     * @method   setCookie
     * @todo     Add method description for setCookie
     * @global   
     * @memberof bbn.fn
     * @param    {String} name  
     * @param    {String} value 
     * @param    {Number} days  
     * @returns  {*}      
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
     * @method   getCookie
     * @todo     Add method description for getCookie
     * @global   
     * @memberof bbn.fn
     * @param    {String} name 
     * @returns           
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

    /**
     * @method   eraseCookie
     * @todo     Add method description for eraseCookie
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    eraseCookie(name){
      document.cookie = name+'=; Max-Age=-99999999;';
    },

    /**
     * @method   getEventData
     * @todo     Add method description for getEventData
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
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
     * @method   ab2str
     * @todo     Add method description for ab2str
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    ab2str(buf) {
      return String.fromCharCode.apply(null, new Uint16Array(buf));
    },

    /**
     * @method   str2ab
     * @todo     Add method description for str2ab
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    str2ab(str) {
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
     * @method   copy
     * @todo     Add method description for copy
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    copy(st){
      let input = document.createElement("textarea");
      input.style.opacity = 0;
      input.value = st;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    },

    /**
     * @method   imageToCanvas
     * @todo     Add method description for imageToCanvas
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    imageToCanvas(img) {
      let canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d").drawImage(img, 0, 0);
    
      return canvas;
    },

    /**
     * @method   canvasToImage
     * @todo     Add method description for canvasToImage
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    canvasToImage(canvas) {
      let img = new Image();
      img.src = canvas.toDataURL("image/png");
      return img;
    },

    /**
     * @method   imgToBase64
     * @todo     Add method description for imgToBase64
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    imgToBase64(img)
    {
      let canvas = bbn.fn.imageToCanvas(img);
      return bbn.fn.canvasToImage(canvas);
    },

    /**
     * @method   formatBytes
     * @todo     Add method description for formatBytes
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
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
     * @method   startChrono
     * @todo     Add method description for startChrono
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
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
     * @todo     Add method description for stopChrono
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
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
     * @method   isMobile
     * @todo     Add method description for isMobile
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    isMobile(){
      return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    },

  });
})(bbn);
