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
      return md5(st);
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
        str = str.substr(hair.length);
      }

      while (str.lastIndexOf(hair) === str.length - hair.length) {
        str = str.substr(0, str.length - hair.length);
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
          st = st.substr(0, len) + adj;
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
    nl2br(st){
      return bbn.fn.replaceAll("\n", "<br>", st);
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
      document.body.appendChild($test);
      $test.innerHTML = bbn.fn.br2nl(st);
      st = $test.textContent;
      document.body.removeChild($test);
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

      let m = bbn.var.defaultDiacriticsRemovalMap;
      for(var i=0; i < m.length; i++ ){
        st = st.replace(m[i].letters, m[i].base);
      }

      return st;
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
        while (path.substr(path.length-1) === '/') {
          path = path.substr(0, path.length-1);
        }
        let pos = path.lastIndexOf('/');
        if (pos > 0) {
          return path.substr(0, pos);
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
        if (res && res.substr(-len) === suffix) {
          return res.substr(0, res.length - len);
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

    removeHtmlComments(st) {
      return st.replace(/<!--[\s\S]*?-->/g, '');
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
    }

  });
})(bbn);
