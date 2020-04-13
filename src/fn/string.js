/**
 * @file   Sizing functions.
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
     * @method   uniqString
     * @todo     Add method description for uniqString
     * @global   
     * @memberof bbn.fn
     * @param    {Mixed}  
     * @returns          
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
      return md5(st);
    },

    /**
     * @method   md5
     * @todo     Add method description for md5
     * @global   
     * @memberof bbn.fn
     * @param    {Mixed} st 
     * @returns          
     */
    md5(st){
      if ( bbn.fn.isFunction(window.md5) ){
        return md5(st);
      }
      throw new Error("The function md5 is not defined");
    },

    /**
     * @method   escapeRegExp
     * @todo     Add method description for escapeRegExp
     * @global   
     * @memberof bbn.fn
     * @param    {String} str 
     * @returns           
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
     * @returns           
     */
    roundDecimal(value, decimals){
      return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    },

    /**
     * @method   rgb2hex
     * @todo     Add method description for rgb2hex
     * @global   
     * @memberof bbn.fn
     * @param    {String} rgb 
     * @returns           
     */
    rgb2hex(rgb){
      rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    },

    /**
     * @method   hex2rgb
     * @todo     Add method description for hex2rgb
     * @global   
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
     * @method   camelize
     * @todo     Add method description for camelize
     * @global   
     * @memberof bbn.fn
     * @param    {String}  
     * @returns           
     */
    camelize(str){
      return str.replace(/^([A-Z])|[\s-_](\w)/g, function(match, p1, p2, offset){
        if ( p2 ){
          return p2.toUpperCase();
        }
        return p1.toLowerCase();
      });
    },

    /**
     * @method   sanitize
     * @todo     Add method description for sanitize
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    sanitize(str){
      return str.replace(/[^a-z0-9]/gi, '_').replace(/[_]+/g, '_');
    },

    /**
     * @method   camelToCss
     * @todo     Add method description for camelToCss
     * @global   
     * @memberof bbn.fn
     * @param    str  
     * @returns      
     */
    camelToCss(str){
      return str.replace(/([A-Z])/g, function(st){
        return '-' + st.toLowerCase();
      }).replace('/^./', function(st){
        return st.toLowerCase()
      });
    },

    /**
     * @method   correctCase
     * @todo     Add method description for correctCase
     * @global   
     * @memberof bbn.fn
     * @param    str  
     * @returns      
     */
    correctCase(str){
      return str.replace(/[A-z]{1}/, c => c.toUpperCase());
    },

    /**
     * @method   randomInt
     * @todo     Add method description for randomInt
     * @global   
     * @memberof bbn.fn
     * @param    {Number} min 
     * @param    {Number} max 
     * @returns           
     */
    randomInt(min, max){
      return Math.floor(Math.random() * (max - min + 1) + min);
    },

    /**
     * @method   randomString
     * @todo     Add method description for randomString
     * @global   
     * @memberof bbn.fn
     * @param    {Number} length 
     * @param    {String} chars  
     * @returns           
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
     * @method   isEmail
     * @todo     Add method description for isEmail
     * @global   
     * @memberof bbn.fn
     * @param    {String} st 
     * @returns           
     */
    isEmail(st){
      let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(st);
    },

    /**
     * @method   isColor
     * @todo     Add method description for isColor
     * @global   
     * @memberof bbn.fn
     * @param    {String} st 
     * @returns           
     */
    isColor(st){
      var reg = new RegExp('^(#[a-f0-9]{6}|#[a-f0-9]{3}|rgb *\( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *\)|rgba *\( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *\)|black|green|silver|gray|olive|white|yellow|maroon|navy|red|blue|purple|teal|fuchsia|aqua)$', 'i');
      return reg.test(st);
    },

    /**
     * @method   isDimension
     * @todo     Add method description for isDimension
     * @global   
     * @memberof bbn.fn
     * @param    {String} st 
     * @returns           
     */
    isDimension(st){
      if ( typeof(st) === 'number' ){
        return 1;
      }
      if ( (typeof(st) === 'string') &&
        (st.length > 0) && (
          (st.indexOf('calc') === 0 ) ||
          (!isNaN(st.substr(0,1))) ) ){
        var el = document.createElement('div'),
            style = el.style;
        style.width = st;
        return !!style.width.length;
      }
      return false;

    },

    /**
     * @method   isEmpty
     * @todo     Add method description for isEmpty
     * @global   
     * @memberof bbn.fn
     * @param    {Object}  
     * @returns           
     */
    isEmpty(obj){
      if ( !obj ){
        return true;
      }
      if ( Array.isArray(obj) ){
        return obj.length ? false : true;
      }
      if ( typeof(obj) === 'object' ){
        for(var prop in obj ){
          return false;
        }
        return true;
      }
      return false;
    },

    /**
     * @method   shorten
     * @todo     Add method description for shorten
     * @global   
     * @memberof bbn.fn
     * @param    {String} st  
     * @param    {Number} len 
     * @returns           
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
          st = st.substr(0, len) + adj;
        }
      }
      return st;
    },

    /**
     * @method   replaceAll
     * @todo     Add method description for replaceAll
     * @global   
     * @memberof bbn.fn
     * @param    {String} find    
     * @param    {String} replace 
     * @param    {String} str     
     * @returns           
     */
    replaceAll(find, replace, str){
      if ( str !== undefined ){
        return str.toString().replace(new RegExp(bbn.fn.escapeRegExp(find), 'g'), replace);
      }
      return false;
    },

    /**
     * @method   remove_quotes
     * @todo     Add method description for remove_quotes
     * @global   
     * @memberof bbn.fn
     * @param    {String} st 
     * @returns           
     */
    remove_quotes(st){
      return bbn.fn.replaceAll('"', '&quot;', bbn.fn.replaceAll("'", "&#39;", st));
    },

    /**
     * @method   remove_nl
     * @todo     Add method description for remove_nl
     * @global   
     * @memberof bbn.fn
     * @param    {String} st 
     * @returns           
     */
    remove_nl(st){
      return bbn.fn.replaceAll("\n", " ", st);
    },

    /**
     * @method   remove_all
     * @todo     Add method description for remove_all
     * @global   
     * @memberof bbn.fn
     * @param    {String} st 
     * @returns           
     */
    remove_all(st){
      return bbn.fn.remove_nl(bbn.fn.remove_quotes(st));
    },

    /**
     * @method   nl2br
     * @todo     Add method description for nl2br
     * @global   
     * @memberof bbn.fn
     * @param    {String} st 
     * @returns           
     */
    nl2br(st){
      return bbn.fn.replaceAll("\n", "<br>", st);
    },

    /**
     * @method   br2nl
     * @todo     Add method description for br2nl
     * @global   
     * @memberof bbn.fn
     * @param    string st 
     * @returns         
     */
    br2nl(st){
      return bbn.fn.replaceAll("<br />", "\n", bbn.fn.replaceAll("<br/>", "\n", bbn.fn.replaceAll("<br>", "\n", st)));
    },

    /**
     * @method   html2text
     * @todo     Add method description for html2text
     * @global   
     * @memberof bbn.fn
     * @param    {String} st 
     * @returns           
     */
    html2text(st){
      /*var $test = $('<div/>').html(bbn.fn.br2nl(st)).appendTo(document.body);
      st = $test.text();
      $test.remove();
      */
      let $test = document.createElement('div');
      document.body.appendChild($test);
      $test.innerHTML = bbn.fn.br2nl(st);
      st = $test.textContent;
      document.body.removeChild($test);
      return st;
    },

    /**
     * @method   removeAccents
     * @todo     Add method description for removeAccents
     * @global   
     * @memberof bbn.fn
     * @param    {String} st 
     * @returns           
     */
    removeAccents(st){
      var m = bbn.var.defaultDiacriticsRemovalMap;
      st = bbn.fn.stringify(st);
      for(var i=0; i < m.length; i++ ){
        st = st.replace(m[i].letters, m[i].base);
      }
      return st;
    },

    /**
     * @method   stringify
     * @todo     Add method description for stringify
     * @global   
     * @memberof bbn.fn
     * @param    {Array|Number|Function} v 
     * @returns                          
     */
    stringify(v){
      if ( typeof v === 'String' ){
        return v;
      }
      return v.toString ? v.toString() : '';
    },

    /**
     * @method   percent
     * @todo     Add method description for percent
     * @global   
     * @memberof bbn.fn
     * @param    {Number|String} percent 
     * @param    {Number|String} cent    
     * @returns                  
     */
    percent(percent, cent){
      return (cent/100) * percent;
    },

    /**
     * @method   dirName
     * @todo     Add method description for dirName
     * @global   
     * @memberof bbn.fn
     * @param    {String} path 
     * @returns           
     */
    dirName(path){
      var bits = path.split("/");
      if ( bits.length < 2 ){
        return false;
      }
      bits.pop();
      return bits.join("/");
    },

    /**
     * @method   baseName
     * @todo     Add method description for baseName
     * @global   
     * @memberof bbn.fn
     * @param    {String} path 
     * @returns           
     */
    baseName(path){
      var bits = path.split("/");
      return bits.pop();
    },

    /**
     * @method   printf
     * @todo     Add method description for printf
     * @global   
     * @memberof bbn.fn
     * @param    format  
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
        while ( st.substr(-char.length) === char ){
          st = st.substr(0, st.length - char.length);
        }
        while ( st.substr(0, char.length) === char ){
          st = st.substr(char.length);
        }
      }
      return st;
    },

    /**
     * @method   formatSize
     * @todo     Add method description for formatSize
     * @global   
     * @memberof bbn.fn
     * @param    {String|Number} st 
     * @returns                  
     */
    formatSize(st){
      if ( !st ){
        return 'auto';
      }
      if ( bbn.fn.isNumber(st) ){
        return st + 'px';
      }
      return st.toString();
    },

    /**
     * @method   repeat
     * @todo     Add method description for repeat
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    repeat(st, num) {
      let res = '';
      bbn.fn.iterate(num, () => {
        res += st;
      });
      return res;
    },

  });
})(bbn);
